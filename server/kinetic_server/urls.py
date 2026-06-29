from django.conf import settings
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.static import serve

FRONTEND_DIR = settings.FRONTEND_DIR


@ensure_csrf_cookie
def index(request):
    """Sert l'app (index.html) et pose le cookie CSRF pour le JS."""
    return serve(request, "index.html", document_root=FRONTEND_DIR)


def frontend_asset(request, path):
    return serve(request, path, document_root=FRONTEND_DIR)


def well_known(request, path):
    # Sert /.well-known/... (ex. assetlinks.json pour une app Android TWA).
    return serve(request, path, document_root=FRONTEND_DIR / ".well-known")


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("core.urls")),
    re_path(r"^\.well-known/(?P<path>.*)$", well_known),
    # Fichiers statiques du frontend, servis à la racine pour respecter les
    # chemins relatifs d'index.html.
    re_path(r"^(?P<path>app\.js|styles\.css|sw\.js|manifest\.webmanifest)$", frontend_asset),
    re_path(r"^assets/(?P<path>.*)$",
            lambda request, path: serve(request, path, document_root=FRONTEND_DIR / "assets")),
    # /index.html sert aussi l'app (start_url du manifeste, précache du SW).
    re_path(r"^index\.html$", index),
    path("", index, name="index"),
]
