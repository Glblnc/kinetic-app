# Kinetic

Version applicative locale de Kinetic.

## Ce qui est inclus

- Interface responsive mobile et navigateur.
- Profil utilisateur sauvegardé localement.
- Génération de programme selon objectif, niveau, matériel et limitations.
- Journal d'entraînement avec volume et historique.
- Calcul calories, protéines, glucides et lipides.
- Journal alimentaire local.
- Coach IA simulé avec réponses contextuelles.
- Mode clair / sombre.
- Manifeste d'installation PWA.
- Service worker pour le cache hors ligne quand l'application est servie en HTTP.

## Limites actuelles

- Pas encore de création de compte réelle.
- Pas encore de synchronisation multi-appareils.
- Pas encore d'appel OpenAI réel.
- Pas encore de base Supabase.
- Le scan code-barres est préparé côté interface, mais pas encore relié à la caméra ou à Open Food Facts.

## Prochaine phase recommandée

1. Créer un projet Django avec PostgreSQL.
2. Ajouter les comptes utilisateurs avec l'authentification Django.
3. Créer les modèles de données : profil, programme, séance, exercice, série, aliment, journal alimentaire, mesures corporelles et messages coach.
4. Déplacer les calculs critiques côté serveur : calories, macros, progression, fatigue et recommandations.
5. Ajouter OpenAI côté serveur uniquement, via une vue Django ou une tâche asynchrone sécurisée.
6. Conserver une interface web responsive et installable, puis ajouter progressivement les fonctionnalités mobiles.
