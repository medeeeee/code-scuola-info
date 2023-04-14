from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("about-me", views.aboutMe, name="aboutMe"),
    path("all-content", views.allThings, name="allThings"),
    path("explanation/<int:content_id>", views.explanation, name="explanation"),
    path("add-remove/<int:content_id>", views.addRemove, name="add-remove"),
    path("user/<str:username>", views.profile, name="profile"),
    path("create", views.create, name="create"),
    path("models", views.message, name="message"),
    path("delete/<int:questions_id>", views.delete, name="delete"),
    path("pronunciation", views.pronunciation, name="pronunciation"),
    path("useful-materials", views.umaterial, name="materials"),

    #games
    path("odd-one-out", views.odd, name="odd"),
    path("scramble", views.scramble, name="scramble"),
    path("what-are-we-talking-about", views.topic, name="topic")
    
]