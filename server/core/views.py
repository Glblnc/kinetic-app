"""Endpoints API de Kinetic.

Toutes les vues sensibles exigent une session authentifiée. La clé Claude n'est
jamais transmise au navigateur : seul ce serveur l'utilise dans /api/coach.
"""
import datetime
import hmac
import json
import re

from django.conf import settings
from django.contrib.auth import authenticate, get_user_model, login, logout
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
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
    # L'application est réservée aux 14 ans et plus (attestation obligatoire).
    if body.get("ageConfirmed") is not True:
        return JsonResponse(
            {"error": "Tu dois avoir 14 ans ou plus pour créer un compte."}, status=400
        )
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
    goal_prot = 2 if p.get("goal") in ("Prise de masse", "Sèche", "Recomposition corporelle", "Force") else 1.7
    lvl_prot = 0.2 if p.get("level") == "Avancé" else (-0.1 if p.get("level") == "Débutant" else 0)
    pf = goal_prot + lvl_prot
    fat_factor = 1 if p.get("sex") == "Femme" else 0.9
    pro = round(weight * pf)
    fat = round(weight * fat_factor)
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
    from . import ai
    if not ai.available():
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
        text = ai.chat(system_prompt, messages)
    except ai.AIError as exc:
        return JsonResponse({"error": str(exc)}, status=exc.status)
    return JsonResponse({"reply": text})


# --- Reconnaissance d'aliments par photo (Claude Vision, clé côté serveur) --
ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/webp", "image/gif"}
MAX_IMAGE_B64 = 5_000_000  # ~5 Mo de base64 (l'image est compressée côté client)


def _extract_json(text):
    """Parse le JSON renvoyé par le modèle, avec repli si du texte l'entoure."""
    text = (text or "").strip()
    try:
        return json.loads(text)
    except ValueError:
        pass
    m = re.search(r"\{.*\}", text, re.S)
    if m:
        try:
            return json.loads(m.group(0))
        except ValueError:
            return None
    return None


def _num(v, default=0.0):
    try:
        return float(v)
    except (TypeError, ValueError):
        return default


def _sanitize_food_items(data):
    foods = []
    for it in (data.get("foods") or [])[:25]:
        if not isinstance(it, dict):
            continue
        name = str(it.get("name") or "").strip()[:80]
        if not name:
            continue
        foods.append({
            "name": name,
            "grams": int(max(0, min(3000, round(_num(it.get("grams")))))),
            "calories": int(max(0, min(6000, round(_num(it.get("calories")))))),
            "protein": round(max(0, min(500, _num(it.get("protein")))), 1),
            "carbs": round(max(0, min(800, _num(it.get("carbs")))), 1),
            "fat": round(max(0, min(500, _num(it.get("fat")))), 1),
        })
    return foods


@require_http_methods(["POST"])
def food_photo(request):
    """Analyse la photo d'un repas et renvoie les aliments détectés (estimation)."""
    if not request.user.is_authenticated:
        return JsonResponse({"error": "Authentification requise."}, status=401)
    from . import ai
    if not ai.available():
        return JsonResponse(
            {"error": "Reconnaissance par photo non configurée sur le serveur (clé absente)."},
            status=503,
        )

    body = _json_body(request)
    if body is None:
        return JsonResponse({"error": "Requête invalide."}, status=400)
    image = body.get("image") or ""
    media_type = body.get("mediaType") or "image/jpeg"
    if media_type not in ALLOWED_IMAGE_TYPES:
        return JsonResponse({"error": "Format d'image non supporté."}, status=400)
    if not image or len(image) > MAX_IMAGE_B64:
        return JsonResponse({"error": "Image manquante ou trop volumineuse."}, status=400)

    english = body.get("language") == "en"
    if english:
        system_prompt = (
            "You are a nutrition expert analyzing a photo of a meal. Identify every "
            "distinct food or dish actually visible. Ignore negligible seasonings (salt, "
            "pepper, spices, herbs, a drizzle of oil, tiny amounts of sauce) unless they are "
            "a major part of the dish. For each food, estimate the visible portion in grams, "
            "then its nutrition for THAT portion. Reply ONLY with a valid JSON object, no text "
            "around it, exactly in this shape: {\"foods\":[{\"name\":\"short name\",\"grams\":number,"
            "\"calories\":number,\"protein\":number,\"carbs\":number,\"fat\":number}],\"note\":\"short comment\"}. "
            "grams and calories are integers; protein, carbs, fat may have one decimal. If no food "
            "is identifiable, return {\"foods\":[],\"note\":\"...\"}."
        )
        user_text = "Here is a photo of my meal. Identify every food present and estimate the quantities."
    else:
        system_prompt = (
            "Tu es un expert en nutrition qui analyse la photo d'un repas. Identifie chaque "
            "aliment ou plat distinct réellement visible. Ignore les assaisonnements négligeables "
            "(sel, poivre, épices, herbes, filet d'huile, très petite quantité de sauce) sauf s'ils "
            "constituent une part importante du plat. Pour chaque aliment, estime la portion visible "
            "en grammes, puis ses valeurs nutritionnelles pour CETTE portion. Réponds UNIQUEMENT par "
            "un objet JSON valide, sans aucun texte autour, exactement au format : "
            "{\"foods\":[{\"name\":\"nom court\",\"grams\":nombre,\"calories\":nombre,\"protein\":nombre,"
            "\"carbs\":nombre,\"fat\":nombre}],\"note\":\"court commentaire\"}. grams et calories sont des "
            "entiers ; protein, carbs, fat peuvent avoir une décimale. Si aucun aliment n'est "
            "identifiable, renvoie {\"foods\":[],\"note\":\"...\"}."
        )
        user_text = "Voici la photo de mon repas. Identifie tous les aliments présents et estime les quantités."

    try:
        text = ai.vision(system_prompt, user_text, image, media_type)
    except ai.AIError as exc:
        return JsonResponse({"error": str(exc)}, status=exc.status)

    parsed = _extract_json(text)
    if not isinstance(parsed, dict):
        return JsonResponse({"error": "Réponse illisible du modèle."}, status=502)
    return JsonResponse({
        "foods": _sanitize_food_items(parsed),
        "note": str(parsed.get("note") or "").strip()[:300],
    })


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


# --- Cron : déclenche les rappels via une URL (hébergeur ou cron-job.org) ----
@csrf_exempt
@require_http_methods(["GET", "POST"])
def cron_reminders(request):
    """Envoie les rappels dus (séance + protection de série).

    Protégé par un jeton secret (KINETIC_CRON_TOKEN) à passer dans l'en-tête
    `X-Cron-Token` ou le paramètre `?token=`. À appeler toutes les ~15 min par
    un service externe (ex. cron-job.org) puisque Render gratuit n'a pas de cron.
    """
    token = settings.KINETIC_CRON_TOKEN
    if not token:
        return JsonResponse({"error": "Cron non configuré sur le serveur."}, status=503)
    given = request.headers.get("X-Cron-Token") or request.GET.get("token") or ""
    if not hmac.compare_digest(str(given), str(token)):
        return JsonResponse({"error": "Jeton invalide."}, status=403)
    from .reminders import run_reminders

    sessions, streaks = run_reminders()
    return JsonResponse({"ok": True, "sessionReminders": sessions, "streakNudges": streaks})


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
