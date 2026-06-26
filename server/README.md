# Kinetic — serveur Django

Backend sécurisé pour Kinetic. Il sert l'application web, gère les comptes, stocke
les données par utilisateur et fait office de **proxy vers l'API Claude** : la clé API
reste exclusivement côté serveur et n'est jamais envoyée au navigateur.

## Sécurité en bref

- **Clé API Claude** : lue depuis `server/.env` (`ANTHROPIC_API_KEY`), utilisée uniquement
  par l'endpoint `/api/coach`. Jamais exposée au client.
- **Comptes** : authentification Django, mots de passe hachés (PBKDF2), cookie de session
  `HttpOnly`.
- **Inscription verrouillée** : ouverte uniquement tant qu'aucun compte n'existe. Dès que
  ton compte est créé, plus personne ne peut s'enregistrer.
- **Données privées** : chaque utilisateur ne voit que ses propres données (endpoints
  protégés par authentification).
- **CSRF** activé, cookies durcis, `ALLOWED_HOSTS` et `SECRET_KEY` hors du code.

## Prérequis

L'environnement virtuel et les dépendances sont déjà installés dans `server/.venv`
(Django, anthropic, python-dotenv). Pour réinstaller ailleurs :

```powershell
cd server
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

## Configuration

1. Ouvre `server/.env` (déjà généré avec une `DJANGO_SECRET_KEY` aléatoire).
2. Renseigne ta clé Claude :

   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

   Sans clé, l'app reste utilisable mais le coach répond avec ses réponses locales.

## Lancer le serveur

```powershell
cd server
.\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
```

Puis ouvre <http://127.0.0.1:8000/>.

- **Premier lancement** : l'écran d'inscription apparaît. Crée ton compte. L'inscription
  se ferme automatiquement ensuite.
- **Lancements suivants** : écran de connexion.

## Endpoints API

| Méthode | Chemin              | Rôle                                          |
| ------- | ------------------- | --------------------------------------------- |
| GET     | `/api/auth/me`      | État de session                               |
| POST    | `/api/auth/register`| Inscription (verrouillée après le 1er compte) |
| POST    | `/api/auth/login`   | Connexion                                     |
| POST    | `/api/auth/logout`  | Déconnexion                                   |
| GET/PUT | `/api/state`        | Charger / sauvegarder l'état (par compte)     |
| POST    | `/api/coach`        | Coach IA (proxy Claude, clé côté serveur)     |

## Réouvrir l'inscription / réinitialiser

- Créer un compte alors qu'il en existe déjà : mets `KINETIC_ALLOW_REGISTRATION=1`
  dans `.env`, crée le compte, puis repasse à `0`.
- Repartir de zéro : supprime `server/db.sqlite3` puis relance
  `manage.py migrate`.

## Mise en production (hors usage local)

- `DJANGO_DEBUG=0`, renseigne `DJANGO_ALLOWED_HOSTS` et `DJANGO_CSRF_TRUSTED_ORIGINS`.
- Sers le site en **HTTPS** et mets `DJANGO_COOKIE_SECURE=1` (cookies sécurisés).
- Utilise un serveur WSGI (gunicorn/uwsgi) derrière un reverse proxy, et
  `python manage.py collectstatic`.
- PostgreSQL : renseigne `POSTGRES_DB`, `POSTGRES_USER`, etc. dans `.env`.
