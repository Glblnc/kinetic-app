"""Envoie une notification à tous les utilisateurs abonnés (infos importantes).

Exemple :
    python manage.py broadcast_push "Mise à jour" "Nouvelle fonctionnalité disponible !"
"""
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from core import push

User = get_user_model()


class Command(BaseCommand):
    help = "Diffuse une notification Web Push à tous les utilisateurs abonnés."

    def add_arguments(self, parser):
        parser.add_argument("title", help="Titre de la notification.")
        parser.add_argument("body", help="Message de la notification.")
        parser.add_argument("--url", default="/", help="Lien ouvert au clic (défaut /).")

    def handle(self, *args, **options):
        if not push.push_enabled():
            self.stderr.write("Notifications non configurées (VAPID absent).")
            return
        total = 0
        for user in User.objects.filter(push_subscriptions__isnull=False).distinct():
            total += push.send_to_user(user, options["title"], options["body"], options["url"])
        self.stdout.write(f"Notifications diffusées : {total}")
