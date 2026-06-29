"""Envoie les rappels Web Push dus (séance + protection de série).

À planifier régulièrement (cron de l'hébergeur ou service externe), p. ex.
toutes les 10-15 min :
    python manage.py send_reminders

Les préférences (activation, heure) viennent de l'état synchronisé de chaque
utilisateur. La déduplication empêche tout double envoi le même jour.
"""
from django.core.management.base import BaseCommand

from core import push
from core.reminders import run_reminders


class Command(BaseCommand):
    help = "Envoie les rappels dus (séance + série) par Web Push."

    def add_arguments(self, parser):
        parser.add_argument(
            "--window", type=int, default=15,
            help="Fenêtre en minutes pour rattraper un cron peu fréquent (défaut 15).",
        )
        parser.add_argument(
            "--streak-hour", type=int, default=20,
            help="Heure (0-23) du rappel « protège ta série » (défaut 20 h).",
        )

    def handle(self, *args, **options):
        if not push.push_enabled():
            self.stderr.write("Notifications non configurées (VAPID absent).")
            return
        sessions, streaks = run_reminders(options["window"], options["streak_hour"])
        self.stdout.write(f"Rappels séance : {sessions} · rappels série : {streaks}")
