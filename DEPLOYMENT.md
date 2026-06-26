# Mettre Kinetic en ligne (URL publique + HTTPS + mobile)

Ce guide explique comment passer du serveur local à un site public accessible
par une URL, en HTTPS, puis comment l'installer sur mobile. Les actions qui
demandent **ton identité ou ton paiement** (comptes d'hébergement, comptes
développeurs Apple/Google) ne peuvent être faites que par toi : elles sont
indiquées clairement.

---

## 1. Obtenir une URL publique en HTTPS

Le plus simple est une plateforme d'hébergement (PaaS) qui fournit **HTTPS et un
domaine automatiquement** — par exemple **Render**, **Railway** ou **Fly.io**.
Tu n'as pas à gérer de certificat TLS toi-même.

Le projet est déjà prêt : `Procfile`, `gunicorn`, `whitenoise`, support de
`DATABASE_URL` et réglages HTTPS sont en place.

### Étapes (exemple avec Render)

1. **Pousse le code sur GitHub** (le `.gitignore` exclut déjà `.env`, la base et le venv).
2. Crée un compte sur la plateforme *(à faire par toi)* et un **nouveau Web Service**
   relié à ton dépôt.
3. **Base de données** : crée une base **PostgreSQL** sur la plateforme. ⚠️ Important :
   sur ces hébergeurs, le disque est éphémère — **SQLite serait effacé à chaque
   redéploiement**. PostgreSQL est donc nécessaire pour conserver les comptes.
4. **Commande de build** :
   ```
   pip install -r server/requirements.txt && python server/manage.py collectstatic --noinput && python server/manage.py migrate
   ```
5. **Commande de démarrage** : déjà dans le `Procfile`
   ```
   gunicorn kinetic_server.wsgi:application --chdir server --bind 0.0.0.0:$PORT
   ```
6. **Variables d'environnement** (dans le tableau de bord de la plateforme, pas dans le code) :
   | Variable | Valeur |
   |---|---|
   | `DJANGO_SECRET_KEY` | une longue chaîne aléatoire |
   | `DJANGO_DEBUG` | `0` |
   | `DJANGO_ALLOWED_HOSTS` | ton domaine, ex. `kinetic.onrender.com` |
   | `DJANGO_CSRF_TRUSTED_ORIGINS` | `https://kinetic.onrender.com` |
   | `DATABASE_URL` | fournie par la base PostgreSQL de la plateforme |
   | `ANTHROPIC_API_KEY` | `sk-ant-...` (reste côté serveur) |
   | `KINETIC_ALLOW_REGISTRATION` | `1` (inscription ouverte à tous) |

   Générer une clé secrète :
   ```
   python -c "from django.core.management.utils import get_random_secret_key as g; print(g())"
   ```
7. Déploie. Une fois en ligne, ouvre l'URL HTTPS : tout le monde peut créer un compte.
8. **HSTS (optionnel, après vérification)** : quand tout fonctionne en HTTPS, ajoute
   `DJANGO_HSTS_SECONDS=31536000` pour forcer HTTPS côté navigateur.

> Hors DEBUG, les cookies sécurisés, la redirection HTTPS et l'en-tête proxy TLS
> s'activent automatiquement (voir `server/kinetic_server/settings.py`).

### Alternative : ton propre serveur (VPS)

Sur un VPS Linux, place **Caddy** ou **nginx + Certbot (Let's Encrypt)** devant
`gunicorn` pour le HTTPS. Même configuration de variables d'environnement.

---

## 2. « Télécharger » l'application — la PWA (sans store)

Kinetic est une **PWA** : une fois le site en HTTPS, elle s'installe directement
depuis le navigateur, **sans passer par un store**. Aucune opération de ma part
n'est nécessaire — c'est déjà prêt (manifeste, service worker, icônes 192/512 et
maskable générées).

- **Android (Chrome)** : menu ⋮ → « Installer l'application » / « Ajouter à l'écran d'accueil ».
- **iPhone (Safari)** : bouton Partager → « Sur l'écran d'accueil ».
- **Ordinateur (Chrome/Edge)** : icône d'installation dans la barre d'adresse.

L'app apparaît alors comme une vraie application, en plein écran, avec son icône.
C'est le moyen le plus rapide de l'avoir sur ton téléphone.

---

## 3. Apple App Store et Google Play Store

**Réponse honnête : je ne peux pas publier sur les stores à ta place.** La
publication exige des choses que seul toi peux faire (et que je n'ai pas les
moyens techniques de réaliser) :

- **Comptes développeurs payants, à ton nom** : Apple Developer Program (~99 $/an)
  et Google Play Console (~25 $ une fois).
- **Signature et envoi** des binaires via App Store Connect / Play Console.
- Pour iOS, **un Mac avec Xcode** est nécessaire pour compiler et soumettre.

Ce qui est **réaliste**, et que je peux préparer :

### Android (Play Store) — faisable

On « emballe » la PWA dans une app Android (technique **TWA**, Trusted Web Activity)
qui ouvre ton site HTTPS en plein écran. Outil recommandé : **[PWABuilder](https://www.pwabuilder.com)**
(ou Bubblewrap). Étapes :

1. Mets le site en ligne (étape 1).
2. Sur PWABuilder, entre ton URL → génère le paquet Android (`.aab`).
3. PWABuilder te donne l'**empreinte SHA‑256** de signature et le **nom de package**.
4. Reporte-les dans `.well-known/assetlinks.json` (déjà servi par le serveur) à la
   place des deux champs `REMPLACER_PAR_...`, puis redéploie. Cela lie l'app au site.
5. Crée le compte Play Console *(à faire par toi)* et envoie le `.aab`.

### iOS (App Store) — possible mais délicat

Apple **refuse souvent** une simple PWA emballée (règle 4.2 « fonctionnalité
minimale »). Les options :

- Emballer avec **Capacitor** (ou le paquet iOS de PWABuilder) et **ajouter de la
  valeur native** (notifications, intégration santé HealthKit, etc.) pour éviter le refus.
- Compiler et soumettre depuis **un Mac avec Xcode**, via ton compte Apple Developer.

Sans ajout natif, le risque de refus est élevé. La PWA via Safari (« Sur l'écran
d'accueil ») reste la solution immédiate côté iPhone.

> En résumé : **Android via le Play Store est un objectif réaliste** (je prépare
> l'`assetlinks.json`, tu fais les comptes et l'envoi). **iOS demande plus de
> travail natif** et un Mac. Et dans tous les cas, **la création des comptes
> développeurs et l'envoi final t'appartiennent.**

---

## 4. Avant de rendre le site public — à vérifier

- [ ] `DJANGO_DEBUG=0` et `DJANGO_SECRET_KEY` défini (aléatoire) côté hébergeur.
- [ ] `DJANGO_ALLOWED_HOSTS` et `DJANGO_CSRF_TRUSTED_ORIGINS` = ton domaine HTTPS.
- [ ] **PostgreSQL** via `DATABASE_URL` (sinon les comptes seraient perdus aux redéploiements).
- [ ] `ANTHROPIC_API_KEY` défini côté serveur uniquement.
- [ ] `KINETIC_ALLOW_REGISTRATION=1` pour l'inscription publique.
- [ ] HTTPS actif (fourni par la plateforme), puis HSTS après validation.
- [ ] Pense à une protection anti‑abus si le trafic grandit (limitation des
      tentatives de connexion, captcha à l'inscription) — non inclus par défaut.
