"""
Configuration Django pour Kinetic.

Tous les secrets (SECRET_KEY, clé API Claude) sont lus depuis l'environnement
(fichier server/.env), jamais codés en dur et jamais exposés au navigateur.
"""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent          # .../server
FRONTEND_DIR = BASE_DIR.parent                             # .../kinetic-app (index.html, app.js...)


def env_bool(name, default=False):
    val = os.environ.get(name)
    if val is None:
        return default
    return val.strip().lower() in ("1", "true", "yes", "on")


# --- Sécurité de base -------------------------------------------------------
SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY")
if not SECRET_KEY:
    # Évite de démarrer en production sans clé. En dev local on peut en générer une.
    from django.core.management.utils import get_random_secret_key
    SECRET_KEY = get_random_secret_key()

DEBUG = env_bool("DJANGO_DEBUG", True)

ALLOWED_HOSTS = [
    h.strip()
    for h in os.environ.get("DJANGO_ALLOWED_HOSTS", "127.0.0.1,localhost").split(",")
    if h.strip()
]

# Autorise l'inscription tant qu'aucun compte n'existe (amorçage), ou si la
# variable l'autorise explicitement. Une fois ton compte créé, l'inscription
# se ferme automatiquement : personne d'autre ne peut s'enregistrer.
ALLOW_REGISTRATION = env_bool("KINETIC_ALLOW_REGISTRATION", False)

# --- Applications -----------------------------------------------------------
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "core",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    # WhiteNoise sert les fichiers statiques (admin) en production.
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "kinetic_server.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "kinetic_server.wsgi.application"

# --- Base de données --------------------------------------------------------
# SQLite par défaut : aucun serveur réseau, fichier local, idéal pour un usage
# personnel. Pour PostgreSQL, renseigne DATABASE_URL-like via les variables
# ci-dessous (laissées simples volontairement).
if os.environ.get("DATABASE_URL"):
    # Plateformes type Render / Railway / Heroku fournissent un DATABASE_URL.
    import dj_database_url

    DATABASES = {
        "default": dj_database_url.parse(
            os.environ["DATABASE_URL"], conn_max_age=600, ssl_require=not DEBUG
        )
    }
elif os.environ.get("POSTGRES_DB"):
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": os.environ["POSTGRES_DB"],
            "USER": os.environ.get("POSTGRES_USER", ""),
            "PASSWORD": os.environ.get("POSTGRES_PASSWORD", ""),
            "HOST": os.environ.get("POSTGRES_HOST", "127.0.0.1"),
            "PORT": os.environ.get("POSTGRES_PORT", "5432"),
        }
    }
else:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": BASE_DIR / "db.sqlite3",
        }
    }

# --- Mots de passe ----------------------------------------------------------
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
     "OPTIONS": {"min_length": 8}},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# --- Internationalisation ---------------------------------------------------
LANGUAGE_CODE = "fr-fr"
TIME_ZONE = "Europe/Paris"
USE_I18N = True
USE_TZ = True

# --- Fichiers statiques -----------------------------------------------------
STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

# En production, WhiteNoise compresse et met en cache les fichiers statiques.
if not DEBUG:
    STORAGES = {
        "default": {"BACKEND": "django.core.files.storage.FileSystemStorage"},
        "staticfiles": {"BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage"},
    }

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# --- Durcissement des cookies / sessions ------------------------------------
# Le cookie de session est HttpOnly : inaccessible au JavaScript (anti-vol XSS).
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = "Lax"
CSRF_COOKIE_SAMESITE = "Lax"
# Le cookie CSRF doit être lisible par le JS pour renvoyer l'en-tête X-CSRFToken.
CSRF_COOKIE_HTTPONLY = False
# Session expirée à la fermeture du navigateur par défaut ? On garde une durée.
SESSION_COOKIE_AGE = 60 * 60 * 24 * 14  # 14 jours
SESSION_EXPIRE_AT_BROWSER_CLOSE = False

# Cookies sécurisés : automatiques hors DEBUG (HTTPS), forçables via .env.
SESSION_COOKIE_SECURE = env_bool("DJANGO_COOKIE_SECURE", not DEBUG)
CSRF_COOKIE_SECURE = env_bool("DJANGO_COOKIE_SECURE", not DEBUG)

CSRF_TRUSTED_ORIGINS = [
    o.strip()
    for o in os.environ.get(
        "DJANGO_CSRF_TRUSTED_ORIGINS", "http://127.0.0.1:8000,http://localhost:8000"
    ).split(",")
    if o.strip()
]

# Render (et hébergeurs similaires) exposent le nom d'hôte public via cette
# variable : on l'autorise automatiquement, sans avoir à connaître l'URL d'avance.
_render_host = os.environ.get("RENDER_EXTERNAL_HOSTNAME")
if _render_host:
    ALLOWED_HOSTS.append(_render_host)
    CSRF_TRUSTED_ORIGINS.append("https://" + _render_host)
# Filet de sécurité sur Render : autorise tout sous-domaine onrender.com
# (couvre l'URL du service et le health check de la plateforme).
if os.environ.get("RENDER"):
    ALLOWED_HOSTS.append(".onrender.com")
    CSRF_TRUSTED_ORIGINS.append("https://*.onrender.com")

# --- Durcissement HTTPS (production) ---------------------------------------
if not DEBUG:
    SECURE_CONTENT_TYPE_NOSNIFF = True
    X_FRAME_OPTIONS = "DENY"
    # Derrière un reverse proxy / PaaS qui termine le TLS (Render, Railway...),
    # Django apprend que la requête d'origine est en HTTPS via cet en-tête.
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
    # Redirige tout le trafic HTTP vers HTTPS (désactivable si le proxy le fait déjà).
    SECURE_SSL_REDIRECT = env_bool("DJANGO_SECURE_SSL", True)
    # HSTS : force HTTPS côté navigateur (active après avoir vérifié que tout marche).
    SECURE_HSTS_SECONDS = int(os.environ.get("DJANGO_HSTS_SECONDS", "0"))
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True

# --- Configuration Claude (lue côté serveur uniquement) ---------------------
ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
KINETIC_MODEL = os.environ.get("KINETIC_MODEL", "claude-opus-4-8")

# --- Web Push (notifications) ----------------------------------------------
# La clé publique est transmise au navigateur ; la clé privée reste ici.
VAPID_PUBLIC_KEY = os.environ.get("VAPID_PUBLIC_KEY", "")
VAPID_PRIVATE_KEY = os.environ.get("VAPID_PRIVATE_KEY", "")
VAPID_CLAIM_SUB = os.environ.get("VAPID_CLAIM_SUB", "mailto:admin@example.com")

# --- Cron des rappels -------------------------------------------------------
# Jeton secret protégeant l'URL /api/cron/reminders (appelée par un service
# externe type cron-job.org). Vide = endpoint désactivé.
KINETIC_CRON_TOKEN = os.environ.get("KINETIC_CRON_TOKEN", "")
