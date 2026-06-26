"""Endpoints API de Kinetic.

Toutes les vues sensibles exigent une session authentifiée. La clé Claude n'est
jamais transmise au navigateur : seul ce serveur l'utilise dans /api/coach.
"""
import datetime
import json

from django.conf import settings
from django.contrib.auth import authenticate, get_user_model, login, logout
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .models import UserState

User = get_user_model()

MAX_MESSAGES = 24          # historique de chat transmis au modèle
MAX_MESSAGE_CHARS = 4000   # taille max d'un message
MAX_STATE_BYTES = 2_000_000  # garde-fou sur la taille de l'état synchronisé


# --- Utilitaires ------------------------------------------------------------
def _json_body(request):
    try:
        return json.loads(request.body.decode("utf-8") or "{}")
    except (ValueError, UnicodeDecodeError):
        return None


def _registration_open():
    return settings.ALLOW_REGISTRATION or User.objects.count() == 0


def _user_payload(user):
    return {"authenticated": True, "username": user.username}


# --- Authentification -------------------------------------------------------
@require_http_methods(["GET"])
def me(request):
    if request.user.is_authenticated:
        return JsonResponse(_user_payload(request.user))
    return JsonResponse({"authenticated": False, "registrationOpen": _registration_open()})


@require_http_methods(["POST"])
def register(request):
    if not _registration_open():
        return JsonResponse(
            {"error": "Les inscriptions sont fermées."}, status=403
        )
    body = _json_body(request)
    if body is None:
        return JsonResponse({"error": "Requête invalide."}, status=400)
    username = (body.get("username") or "").strip()
    password = body.get("password") or ""
    if not username or not password:
        return JsonResponse({"error": "Identifiant et mot de passe requis."}, status=400)
    if User.objects.filter(username__iexact=username).exists():
        return JsonResponse({"error": "Cet identifiant existe déjà."}, status=400)
    try:
        validate_password(password)
    except ValidationError as exc:
        return JsonResponse({"error": " ".join(exc.messages)}, status=400)
    user = User.objects.create_user(username=username, password=password)
    login(request, user)
    return JsonResponse(_user_payload(user))


@require_http_methods(["POST"])
def login_view(request):
    body = _json_body(request)
    if body is None:
        return JsonResponse({"error": "Requête invalide."}, status=400)
    username = (body.get("username") or "").strip()
    password = body.get("password") or ""
    user = authenticate(request, username=username, password=password)
    if user is None:
        return JsonResponse({"error": "Identifiant ou mot de passe incorrect."}, status=401)
    login(request, user)
    return JsonResponse(_user_payload(user))


@require_http_methods(["POST"])
def logout_view(request):
    logout(request)
    return JsonResponse({"authenticated": False})


# --- État utilisateur -------------------------------------------------------
@require_http_methods(["GET", "PUT"])
def state(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Authentification requise."}, status=401)

    obj, _ = UserState.objects.get_or_create(user=request.user)

    if request.method == "GET":
        return JsonResponse({"data": obj.data, "updatedAt": obj.updated_at.isoformat()})

    # PUT : sauvegarde
    if len(request.body) > MAX_STATE_BYTES:
        return JsonResponse({"error": "État trop volumineux."}, status=413)
    body = _json_body(request)
    if not isinstance(body, dict) or not isinstance(body.get("data"), dict):
        return JsonResponse({"error": "Format d'état invalide."}, status=400)
    obj.data = body["data"]
    obj.save()
    return JsonResponse({"ok": True, "updatedAt": obj.updated_at.isoformat()})


# --- Coach IA (proxy Claude, clé côté serveur) ------------------------------
def _start_of_week(d):
    monday = d - datetime.timedelta(days=d.weekday())
    return monday


def _weekly_sessions(data):
    workouts = data.get("workouts") or []
    sow = _start_of_week(datetime.date.today())
    dates = set()
    for w in workouts:
        ds = (w or {}).get("date")
        if not ds:
            continue
        try:
            dd = datetime.date.fromisoformat(str(ds)[:10])
        except ValueError:
            continue
        if dd >= sow:
            dates.add(str(ds)[:10])
    return len(dates)


def _calculate_nutrition(p):
    sex = p.get("sex")
    sex_adj = -161 if sex == "Femme" else (-78 if sex == "Autre" else 5)
    act_f = {"Sédentaire": 1.25, "Modérée": 1.45, "Active": 1.65, "Très active": 1.82}
    goal_adj = {
        "Prise de masse": 280, "Perte de poids": -420, "Sèche": -480,
        "Recomposition corporelle": -80, "Force": 180, "Endurance": 80,
        "Remise en forme": -120,
    }
    try:
        weight = float(p.get("weight", 75))
        height = float(p.get("height", 175))
        age = float(p.get("age", 30))
    except (TypeError, ValueError):
        weight, height, age = 75.0, 175.0, 30.0
    bmr = 10 * weight + 6.25 * height - 5 * age + sex_adj
    cal = round((bmr * act_f.get(p.get("activity"), 1.45) + goal_adj.get(p.get("goal"), 0)) / 10) * 10
    pf = 2 if p.get("goal") in ("Prise de masse", "Sèche", "Recomposition corporelle", "Force") else 1.7
    pro = round(weight * pf)
    fat = round(weight * 0.9)
    car = max(80, round((cal - pro * 4 - fat * 9) / 4))
    return {"calories": cal, "protein": pro, "carbs": car, "fat": fat}


def _recovery_score(sessions, target):
    if target and sessions > target:
        return 58
    if sessions == target:
        return 76
    return 84


def _build_system_prompt(data, language):
    p = data.get("profile") or {}
    t = _calculate_nutrition(p)
    target_sessions = p.get("sessions") or 3
    week = _weekly_sessions(data)
    rec = _recovery_score(week, target_sessions)
    lang = "English" if language == "en" else "français"
    equipment = ", ".join(p.get("equipment") or []) or "aucun"
    return (
        f"Tu es le coach virtuel de fitness et nutrition de l'application Kinetic. "
        f"Réponds en {lang}, de façon concise (max ~150 mots), concrète et bienveillante. "
        f"Tes conseils sont généraux et ne remplacent pas un avis médical.\n"
        f"Profil utilisateur : {p.get('age', '?')} ans, {p.get('sex', '?')}, "
        f"{p.get('height', '?')} cm, {p.get('weight', '?')} kg, niveau {p.get('level', '?')}, "
        f"objectif {p.get('goal', '?')}, {target_sessions} séances/semaine. "
        f"Matériel : {equipment}. Blessures/limitations : {p.get('limitations') or 'aucune'}. "
        f"Préférences alimentaires : {p.get('foodPreferences') or 'aucune'}.\n"
        f"Cibles nutritionnelles : {t['calories']} kcal, {t['protein']} g protéines, "
        f"{t['carbs']} g glucides, {t['fat']} g lipides.\n"
        f"Séances réalisées cette semaine : {week}/{target_sessions}. "
        f"Récupération estimée : {rec} %."
    )


def _sanitize_messages(raw):
    """Nettoie l'historique reçu : rôles valides, contenu texte borné, premier
    message côté utilisateur (exigence de l'API Claude)."""
    out = []
    for m in (raw or [])[-MAX_MESSAGES:]:
        if not isinstance(m, dict):
            continue
        role = m.get("role")
        content = m.get("content")
        if role not in ("user", "assistant") or not isinstance(content, str):
            continue
        content = content.strip()[:MAX_MESSAGE_CHARS]
        if content:
            out.append({"role": role, "content": content})
    while out and out[0]["role"] != "user":
        out.pop(0)
    return out


@require_http_methods(["POST"])
def coach(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Authentification requise."}, status=401)
    if not settings.ANTHROPIC_API_KEY:
        return JsonResponse(
            {"error": "Coach IA non configuré sur le serveur (clé absente)."}, status=503
        )

    body = _json_body(request)
    if body is None:
        return JsonResponse({"error": "Requête invalide."}, status=400)

    messages = _sanitize_messages(body.get("messages"))
    if not messages:
        return JsonResponse({"error": "Aucun message valide."}, status=400)

    obj, _ = UserState.objects.get_or_create(user=request.user)
    system_prompt = _build_system_prompt(obj.data or {}, body.get("language"))

    try:
        import anthropic
    except ImportError:
        return JsonResponse({"error": "SDK Anthropic absent côté serveur."}, status=503)

    try:
        client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)
        resp = client.messages.create(
            model=settings.KINETIC_MODEL,
            max_tokens=1024,
            system=system_prompt,
            messages=messages,
        )
    except anthropic.AuthenticationError:
        return JsonResponse({"error": "Clé Claude invalide côté serveur."}, status=502)
    except anthropic.RateLimitError:
        return JsonResponse({"error": "Limite de débit Claude atteinte, réessaie."}, status=429)
    except anthropic.APIStatusError as exc:
        return JsonResponse({"error": f"Erreur API Claude ({exc.status_code})."}, status=502)
    except anthropic.APIConnectionError:
        return JsonResponse({"error": "Connexion à Claude impossible."}, status=502)
    except Exception:
        return JsonResponse({"error": "Erreur inattendue du coach IA."}, status=500)

    text = "".join(
        getattr(b, "text", "") for b in resp.content if getattr(b, "type", "") == "text"
    ).strip()
    if not text:
        return JsonResponse({"error": "Réponse vide du coach IA."}, status=502)
    return JsonResponse({"reply": text})


# --- Notifications Web Push -------------------------------------------------
@require_http_methods(["GET"])
def push_key(request):
    """Clé publique VAPID, nécessaire au navigateur pour s'abonner."""
    return JsonResponse({"publicKey": settings.VAPID_PUBLIC_KEY or ""})


@require_http_methods(["POST"])
def push_subscribe(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Authentification requise."}, status=401)
    body = _json_body(request) or {}
    endpoint = body.get("endpoint")
    keys = body.get("keys") or {}
    p256dh, auth = keys.get("p256dh"), keys.get("auth")
    if not endpoint or not p256dh or not auth:
        return JsonResponse({"error": "Abonnement invalide."}, status=400)
    from .models import PushSubscription

    PushSubscription.objects.update_or_create(
        endpoint=endpoint,
        defaults={"user": request.user, "p256dh": p256dh, "auth": auth},
    )
    return JsonResponse({"ok": True})


@require_http_methods(["POST"])
def push_unsubscribe(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Authentification requise."}, status=401)
    body = _json_body(request) or {}
    endpoint = body.get("endpoint")
    from .models import PushSubscription

    qs = PushSubscription.objects.filter(user=request.user)
    if endpoint:
        qs = qs.filter(endpoint=endpoint)
    qs.delete()
    return JsonResponse({"ok": True})


@require_http_methods(["POST"])
def push_test(request):
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Authentification requise."}, status=401)
    from . import push

    if not push.push_enabled():
        return JsonResponse({"error": "Notifications non configurées sur le serveur."}, status=503)
    sent = push.send_to_user(
        request.user,
        "Kinetic",
        "Notifications activées ! Tu recevras tes rappels ici.",
        "/",
    )
    if sent == 0:
        return JsonResponse({"error": "Aucun appareil abonné."}, status=404)
    return JsonResponse({"ok": True, "sent": sent})
