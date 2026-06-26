# Kinetic

Application de musculation, nutrition et progression avec coach IA.
Frontend web installable (PWA) + backend Django sécurisé.

## Démarrage rapide

```powershell
cd server
# Renseigne ta clé Claude dans server/.env (ANTHROPIC_API_KEY=sk-ant-...)
.\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
```

Ouvre <http://127.0.0.1:8000/>. Au **premier lancement**, crée ton compte ;
l'inscription se ferme ensuite automatiquement (toi seul as un compte).

Détails serveur, configuration et sécurité : voir [`server/README.md`](server/README.md).

## Architecture

- **Frontend** (`index.html`, `app.js`, `styles.css`, `sw.js`) : interface responsive,
  installable, fonctionnant hors ligne pour l'essentiel.
- **Backend** (`server/`) : Django. Comptes, stockage des données par utilisateur,
  et proxy vers l'API Claude. La clé API ne quitte jamais le serveur.

Le serveur Django sert aussi le frontend : il n'y a qu'une seule URL à ouvrir.

## Ce qui est inclus

- Interface responsive mobile et navigateur, mode clair / sombre.
- **Comptes utilisateurs** avec connexion sécurisée (Django, mots de passe hachés).
- **Données synchronisées côté serveur** : profil, programmes, journaux, mesures, chat —
  rattachés à ton compte et accessibles uniquement par toi.
- **Coach IA réel** branché sur l'API Claude (`claude-opus-4-8`) via un endpoint serveur ;
  repli automatique sur des réponses locales si la clé n'est pas configurée ou hors ligne.
- Génération de programme selon objectif, niveau, matériel et limitations.
- Journal d'entraînement (volume, historique), records, succès/badges.
- Calcul calories, protéines, glucides et lipides ; journal alimentaire.
- **Scan code-barres réel** via la caméra (BarcodeDetector) relié à Open Food Facts,
  avec saisie manuelle en repli.
- Import / export des données utilisateur en JSON.
- Manifeste d'installation PWA + service worker (cache hors ligne, API jamais mise en cache).

## Sécurité

- La **clé API Claude** est lue depuis `server/.env` et utilisée seulement par
  `/api/coach`. Elle n'est jamais transmise au navigateur.
- **Authentification obligatoire** : un visiteur non connecté ne voit qu'un écran de
  connexion, sans accès aux données ni au coach.
- **Inscription verrouillée** après la création du premier compte.
- CSRF activé, cookie de session `HttpOnly`, cookies sécurisables en HTTPS,
  `SECRET_KEY` et secrets hors du code (et hors Git via `.gitignore`).

## Limites actuelles

- Données stockées en JSON par compte (pas encore de modèle relationnel détaillé).
- Synchronisation multi-appareils via le compte serveur ; pas de résolution de conflit
  fine en cas d'édition simultanée sur deux appareils.
- Applications natives Android/iOS non publiées (la PWA est installable depuis le
  navigateur).

## Pistes d'évolution

1. Modéliser les données en relationnel (séances, séries, aliments, mesures…) plutôt
   qu'un blob JSON, pour des requêtes et statistiques côté serveur.
2. Déplacer davantage de calculs critiques côté serveur (progression, fatigue,
   adaptation automatique du programme).
3. Déploiement HTTPS (gunicorn + reverse proxy), `DJANGO_DEBUG=0`, PostgreSQL.
4. Notifications push, intégration montres connectées / applications de santé.
