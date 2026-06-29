"""Logique des rappels Web Push.

Deux types de rappels :
- Rappel de séance, à l'heure choisie par l'utilisateur (settings.reminderTime).
- Protection de série (« streak ») : le soir, si la journée n'a pas encore été
  validée alors qu'une série est en cours, on envoie une relance.

Le calcul de la série reflète celui du client : un jour est « actif » s'il
contient une séance, un repas, de l'eau, ou un check-in.

Utilisé par la commande `send_reminders` et l'endpoint cron HTTP, pour
fonctionner aussi bien via un cron de l'hébergeur qu'un service externe
(cron-job.org) qui appelle l'URL régulièrement.
"""
import datetime

from django.utils import timezone

from core import push
from core.models import UserState


def _active_dates(data):
    """Ensemble des dates (YYYY-MM-DD) où l'utilisateur a été actif."""
    s = set()
    for w in data.get("workouts") or []:
        d = (w or {}).get("date")
        if d:
            s.add(str(d)[:10])
    for f in data.get("foods") or []:
        d = (f or {}).get("date")
        if d:
            s.add(str(d)[:10])
    for c in data.get("checkins") or []:
        d = (c or {}).get("date")
        if d:
            s.add(str(d)[:10])
    for d, ml in (data.get("water") or {}).items():
        try:
            if float(ml) > 0:
                s.add(str(d)[:10])
        except (TypeError, ValueError):
            pass
    return s


def _current_streak(data, today):
    """Nombre de jours consécutifs actifs en remontant depuis aujourd'hui
    (ou hier si la journée n'est pas encore validée)."""
    active = _active_dates(data)
    d = today
    if d.isoformat() not in active:
        d = d - datetime.timedelta(days=1)
        if d.isoformat() not in active:
            return 0
    streak = 0
    while d.isoformat() in active:
        streak += 1
        d = d - datetime.timedelta(days=1)
    return streak


def run_reminders(window=15, streak_hour=20):
    """Envoie les rappels dus. Retourne (rappels_séance, rappels_série)."""
    if not push.push_enabled():
        return (0, 0)

    now = timezone.localtime()
    now_min = now.hour * 60 + now.minute
    today = now.date()
    window = max(1, window)
    sessions = 0
    streaks = 0

    for st in UserState.objects.select_related("user"):
        data = st.data or {}
        prefs = data.get("settings") or {}
        if not prefs.get("notifications"):
            continue

        # 1) Rappel de séance à l'heure choisie.
        rt = prefs.get("reminderTime") or "18:00"
        try:
            h, m = (int(x) for x in str(rt).split(":")[:2])
            rmin = h * 60 + m
        except (ValueError, TypeError):
            rmin = None
        if (rmin is not None
                and 0 <= (now_min - rmin) < window
                and st.last_reminded_on != today):
            if push.send_to_user(st.user, "Kinetic", "C'est l'heure de ta séance 💪", "/"):
                st.last_reminded_on = today
                st.save(update_fields=["last_reminded_on"])
                sessions += 1

        # 2) Protection de série : le soir, si la journée n'est pas validée.
        guard_min = max(0, min(23, streak_hour)) * 60
        if (0 <= (now_min - guard_min) < window
                and st.last_streak_nudge_on != today
                and today.isoformat() not in _active_dates(data)):
            streak = _current_streak(data, today)  # compte depuis hier
            if streak >= 1:
                jour = "jours" if streak > 1 else "jour"
                msg = (f"🔥 Ne casse pas ta série de {streak} {jour} ! "
                       f"Une séance, un repas ou ton eau suffisent aujourd'hui.")
                if push.send_to_user(st.user, "Kinetic", msg, "/"):
                    st.last_streak_nudge_on = today
                    st.save(update_fields=["last_streak_nudge_on"])
                    streaks += 1

    return (sessions, streaks)
