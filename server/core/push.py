"""Envoi de notifications Web Push (clé privée VAPID côté serveur uniquement)."""
import base64
import json

from django.conf import settings


def _vapid_instance():
    """Reconstruit l'objet VAPID depuis la clé privée (base64url DER)."""
    from cryptography.hazmat.primitives.serialization import load_der_private_key
    from py_vapid import Vapid01

    raw = settings.VAPID_PRIVATE_KEY
    padded = raw + "=" * (-len(raw) % 4)
    der = base64.urlsafe_b64decode(padded)
    key = load_der_private_key(der, password=None)
    return Vapid01(private_key=key)


def push_enabled():
    return bool(settings.VAPID_PRIVATE_KEY and settings.VAPID_PUBLIC_KEY)


def send_to_subscription(sub, payload):
    """Envoie un payload à un abonnement. Retourne True si OK, False si l'abonnement
    est mort (à supprimer)."""
    from pywebpush import WebPushException, webpush

    try:
        webpush(
            subscription_info=sub.as_subscription_info(),
            data=json.dumps(payload),
            vapid_private_key=_vapid_instance(),
            vapid_claims={"sub": settings.VAPID_CLAIM_SUB},
            ttl=86400,
        )
        return True
    except WebPushException as exc:
        status = getattr(getattr(exc, "response", None), "status_code", None)
        # 404 / 410 : l'abonnement n'existe plus côté navigateur.
        if status in (404, 410):
            return False
        raise


def send_to_user(user, title, body, url="/"):
    """Envoie une notification à tous les appareils d'un utilisateur.
    Supprime les abonnements morts. Retourne le nombre d'envois réussis."""
    from .models import PushSubscription

    payload = {"title": title, "body": body, "url": url}
    sent = 0
    for sub in list(PushSubscription.objects.filter(user=user)):
        try:
            if send_to_subscription(sub, payload):
                sent += 1
            else:
                sub.delete()
        except Exception:
            # On n'interrompt pas l'envoi aux autres appareils.
            continue
    return sent
