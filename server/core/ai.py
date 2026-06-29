"""Couche d'abstraction IA pour Kinetic.

Choisit automatiquement le fournisseur selon les clés configurées :
- **Gemini** (Google) en priorité s'il y a une clé — palier gratuit, gère aussi
  la vision. Appelé via son API REST (urllib, aucune dépendance ajoutée).
- **Anthropic** (Claude) en repli si seule sa clé est présente.

La clé reste côté serveur et n'est jamais transmise au navigateur.
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


def provider():
    if settings.GEMINI_API_KEY:
        return "gemini"
    if settings.ANTHROPIC_API_KEY:
        return "anthropic"
    return None


def available():
    return provider() is not None


# --- Gemini (REST) ----------------------------------------------------------
def _gemini_call(contents, system_text, model, json_mode=False):
    url = (
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"{model}:generateContent?key={settings.GEMINI_API_KEY}"
    )
    gen_cfg = {"maxOutputTokens": 1024, "temperature": 0.7}
    if json_mode:
        gen_cfg["responseMimeType"] = "application/json"
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


def vision(system_text, user_text, image_b64, media_type):
    """Analyse d'image + texte. Renvoie le texte (souvent du JSON) du modèle."""
    p = provider()
    if p == "gemini":
        contents = [{"role": "user", "parts": [
            {"inline_data": {"mime_type": media_type, "data": image_b64}},
            {"text": user_text},
        ]}]
        return _gemini_call(contents, system_text, settings.GEMINI_VISION_MODEL, json_mode=True)
    if p == "anthropic":
        return _anthropic_run({
            "model": settings.KINETIC_VISION_MODEL,
            "max_tokens": 1024,
            "system": system_text,
            "messages": [{"role": "user", "content": [
                {"type": "image", "source": {
                    "type": "base64", "media_type": media_type, "data": image_b64}},
                {"type": "text", "text": user_text},
            ]}],
        })
    raise AIError("IA non configurée sur le serveur.", 503)
