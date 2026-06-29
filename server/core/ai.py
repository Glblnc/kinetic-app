"""Couche d'abstraction IA pour Kinetic.

Choisit automatiquement le fournisseur selon les clés configurées, par ordre de
priorité (le premier qui a une clé gagne) :
- **Mistral** (FR, RGPD) — tier gratuit. API compatible OpenAI.
- **OpenRouter** — tier gratuit, plusieurs modèles. Compatible OpenAI.
- **Gemini** (Google) — gratuit hors UE (payant en UE). API REST.
- **Anthropic** (Claude) — repli payant si seule sa clé est présente.

Mistral et OpenRouter passent par le format OpenAI Chat Completions ; Gemini et
Anthropic ont leur propre format. Tout est appelé via urllib / SDK déjà présent,
sans dépendance ajoutée. La clé reste côté serveur, jamais exposée au navigateur.
"""
import json
import urllib.error
import urllib.request

from django.conf import settings


class AIError(Exception):
    """Erreur IA portant un code HTTP à renvoyer au client."""

    def __init__(self, message, status=502):
        super().__init__(message)
        self.status = status


# Fournisseurs « compatibles OpenAI » (Mistral, OpenRouter) : même format d'API,
# on ne change que l'URL de base, la clé, les modèles et quelques en-têtes.
def _openai_compat_configs():
    return {
        "mistral": {
            "label": "Mistral",
            "base": "https://api.mistral.ai/v1/chat/completions",
            "key": settings.MISTRAL_API_KEY,
            "model": settings.MISTRAL_MODEL,
            "headers": {},
        },
        "openrouter": {
            "label": "OpenRouter",
            "base": "https://openrouter.ai/api/v1/chat/completions",
            "key": settings.OPENROUTER_API_KEY,
            "model": settings.OPENROUTER_MODEL,
            "headers": {"HTTP-Referer": "https://kinetic-5tw8.onrender.com", "X-Title": "Kinetic"},
        },
    }


def provider():
    if settings.MISTRAL_API_KEY:
        return "mistral"
    if settings.OPENROUTER_API_KEY:
        return "openrouter"
    if settings.GEMINI_API_KEY:
        return "gemini"
    if settings.ANTHROPIC_API_KEY:
        return "anthropic"
    return None


def available():
    return provider() is not None


# --- Fournisseurs compatibles OpenAI (Mistral, OpenRouter) ------------------
def _openai_compat_call(cfg, messages, model):
    payload = {"model": model, "messages": messages, "max_tokens": 1024, "temperature": 0.7}
    headers = {"Content-Type": "application/json", "Authorization": "Bearer " + cfg["key"]}
    headers.update(cfg.get("headers") or {})
    req = urllib.request.Request(
        cfg["base"], data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            body = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        code = exc.code
        if code == 429:
            raise AIError(f"Limite gratuite {cfg['label']} atteinte, réessaie plus tard.", 429)
        if code in (401, 403):
            raise AIError(f"Clé {cfg['label']} invalide ou refusée côté serveur.", 502)
        raise AIError(f"Erreur API {cfg['label']} ({code}).", 502)
    except urllib.error.URLError:
        raise AIError(f"Connexion à {cfg['label']} impossible.", 502)
    except Exception:
        raise AIError("Erreur inattendue de l'IA.", 500)

    choices = body.get("choices") or []
    if not choices:
        raise AIError("Réponse vide de l'IA.", 502)
    text = ((choices[0].get("message") or {}).get("content") or "").strip()
    if not text:
        raise AIError("Réponse vide de l'IA.", 502)
    return text


def _oai_text_messages(system_text, messages):
    out = [{"role": "system", "content": system_text}] if system_text else []
    out.extend({"role": m.get("role", "user"), "content": m.get("content", "")} for m in messages)
    return out


# --- Gemini (REST) ----------------------------------------------------------
def _gemini_call(contents, system_text, model):
    url = (
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"{model}:generateContent?key={settings.GEMINI_API_KEY}"
    )
    gen_cfg = {"maxOutputTokens": 1024, "temperature": 0.7}
    payload = {"contents": contents, "generationConfig": gen_cfg}
    if system_text:
        payload["systemInstruction"] = {"parts": [{"text": system_text}]}

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            body = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        code = exc.code
        if code == 429:
            raise AIError("Limite gratuite Gemini atteinte, réessaie plus tard.", 429)
        if code in (400, 401, 403):
            raise AIError("Clé Gemini invalide ou refusée côté serveur.", 502)
        raise AIError(f"Erreur API Gemini ({code}).", 502)
    except urllib.error.URLError:
        raise AIError("Connexion à Gemini impossible.", 502)
    except Exception:
        raise AIError("Erreur inattendue de l'IA.", 500)

    candidates = body.get("candidates") or []
    if not candidates:
        # Bloqué par les filtres de sécurité, ou réponse vide.
        raise AIError("Réponse vide de l'IA.", 502)
    parts = (candidates[0].get("content") or {}).get("parts") or []
    text = "".join(p.get("text", "") for p in parts if isinstance(p, dict)).strip()
    if not text:
        raise AIError("Réponse vide de l'IA.", 502)
    return text


def _gemini_messages(messages):
    """Convertit l'historique {user|assistant} au format Gemini {user|model}."""
    out = []
    for m in messages:
        role = "model" if m.get("role") == "assistant" else "user"
        out.append({"role": role, "parts": [{"text": m.get("content", "")}]})
    return out


# --- Anthropic (Claude) -----------------------------------------------------
def _anthropic_client():
    try:
        import anthropic
    except ImportError:
        raise AIError("SDK Anthropic absent côté serveur.", 503)
    return anthropic


def _anthropic_run(create_kwargs):
    anthropic = _anthropic_client()
    try:
        client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)
        resp = client.messages.create(**create_kwargs)
    except anthropic.AuthenticationError:
        raise AIError("Clé Claude invalide côté serveur.", 502)
    except anthropic.RateLimitError:
        raise AIError("Limite de débit Claude atteinte, réessaie.", 429)
    except anthropic.APIStatusError as exc:
        raise AIError(f"Erreur API Claude ({exc.status_code}).", 502)
    except anthropic.APIConnectionError:
        raise AIError("Connexion à Claude impossible.", 502)
    except AIError:
        raise
    except Exception:
        raise AIError("Erreur inattendue de l'IA.", 500)
    text = "".join(
        getattr(b, "text", "") for b in resp.content if getattr(b, "type", "") == "text"
    ).strip()
    if not text:
        raise AIError("Réponse vide de l'IA.", 502)
    return text


# --- API publique du module -------------------------------------------------
def chat(system_text, messages):
    """Conversation texte. `messages` : [{role:'user'|'assistant', content:str}]."""
    p = provider()
    if p in ("mistral", "openrouter"):
        cfg = _openai_compat_configs()[p]
        return _openai_compat_call(cfg, _oai_text_messages(system_text, messages), cfg["model"])
    if p == "gemini":
        return _gemini_call(_gemini_messages(messages), system_text, settings.GEMINI_MODEL)
    if p == "anthropic":
        return _anthropic_run({
            "model": settings.KINETIC_MODEL,
            "max_tokens": 1024,
            "system": system_text,
            "messages": messages,
        })
    raise AIError("IA non configurée sur le serveur.", 503)
