"""Envoie les rappels de séance aux utilisateurs dont l'heure correspond.

À planifier régulièrement (cron de l'hébergeur), par exemple toutes les 10 min :
    python manage.py send_reminders

L'heure de rappel et l'activation viennent des préférences de chaque utilisateur
(état synchronisé). La déduplication empêche tout double envoi le même jour.
"""
from django.core.management.base import BaseCommand
from django.utils import timezone

from core import push
from core.models import UserState


class Command(BaseCommand):
    help = "Envoie les rappels de séance dus (Web Push)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--window", type=int, default=15,
            help="Fenêtre en minutes pour rattraper un cron peu fréquent (défaut 15).",
        )

    def handle(self, *args, **options):
        if not push.push_enabled():
            self.stderr.write("Notifications non configurées (VAPID absent).")
            return
        now = timezone.localtime()
        now_min = now.hour * 60 + now.minute
        today = now.date()
        window = max(1, options["window"])
        total = 0
        for st in UserState.objects.select_related("user"):
            s = (st.data or {}).get("settings") or {}
            if not s.get("notifications"):
                continue
            rt = s.get("reminderTime") or "18:00"
            try:
                h, m = (int(x) for x in str(rt).split(":")[:2])
            except (ValueError, TypeError):
                continue
            rmin = h * 60 + m
            if not (0 <= (now_min - rmin) < window):
                continue
            if st.last_reminded_on == today:
                continue
            sent = push.send_to_user(
                st.user, "Kinetic", "C'est l'heure de ta séance 💪", "/"
            )
            if sent:
                st.last_reminded_on = today
                st.save(update_fields=["last_reminded_on"])
                total += sent
        self.stdout.write(f"Rappels envoyés : {total}")
