from django.conf import settings
from django.db import models


class UserState(models.Model):
    """État applicatif (profil, programmes, journaux...) propre à un utilisateur.

    Stocké en JSON : un seul enregistrement par compte, accessible uniquement
    par son propriétaire authentifié.
    """

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="kinetic_state",
    )
    data = models.JSONField(default=dict, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    # Évite d'envoyer deux fois le rappel de séance le même jour.
    last_reminded_on = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"État de {self.user.username}"


class PushSubscription(models.Model):
    """Abonnement Web Push d'un navigateur pour un utilisateur."""

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="push_subscriptions",
    )
    endpoint = models.URLField(max_length=600, unique=True)
    p256dh = models.CharField(max_length=255)
    auth = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def as_subscription_info(self):
        return {"endpoint": self.endpoint, "keys": {"p256dh": self.p256dh, "auth": self.auth}}

    def __str__(self):
        return f"Push {self.user.username} ({self.endpoint[:32]}…)"
