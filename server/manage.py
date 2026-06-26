#!/usr/bin/env python
"""Utilitaire en ligne de commande Django pour Kinetic."""
import os
import sys
from pathlib import Path

from dotenv import load_dotenv

# Charge les variables d'environnement depuis server/.env avant tout.
load_dotenv(Path(__file__).resolve().parent / ".env")


def main():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "kinetic_server.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Django n'est pas installé ou l'environnement virtuel n'est pas actif."
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
