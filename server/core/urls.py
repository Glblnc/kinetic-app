from django.urls import path

from . import views

urlpatterns = [
    path("auth/me", views.me),
    path("auth/register", views.register),
    path("auth/login", views.login_view),
    path("auth/logout", views.logout_view),
    path("state", views.state),
    path("coach", views.coach),
    path("push/key", views.push_key),
    path("push/subscribe", views.push_subscribe),
    path("push/unsubscribe", views.push_unsubscribe),
    path("push/test", views.push_test),
]
