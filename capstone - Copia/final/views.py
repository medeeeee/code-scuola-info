from typing import Reversible
from django.shortcuts import redirect, render
from .models import Lesson, User, questions, saveSubj
from django.http import HttpResponse, HttpResponseRedirect, request
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
# Create your views here.


def index(request):
    return render(request, "final/index.html",{
        "contents":Lesson.objects.all(),
        
        })

def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "final/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "final/login.html",{
            "contents":Lesson.objects.all()
            
        })


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "final/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "final/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "final/register.html")


def aboutMe(request):
    return render(request, "final/aboutMe.html", {
        "contents":Lesson.objects.all()
    })

def allThings(request):
    return render(request, "final/allthings.html", {
        "contents":Lesson.objects.all()
    })


def explanation(request, content_id):
    if request.user.is_authenticated:
        c = Lesson.objects.get(id=content_id)
        s = saveSubj.objects.filter(user=request.user, Content=content_id).first()
        if s is None:
            a = True
        else:
            a = False
        return render(request, "final/explanation.html",{
        "contents":Lesson.objects.all(),
        "content": c,
        "a":a
    })

    
    

    c = Lesson.objects.get(id=content_id)
    return render(request, "final/explanation.html",{
        "contents":Lesson.objects.all(),
        "content": c,
        
    })

def addRemove(request, content_id):

    user = request.user
    l = Lesson.objects.filter(id = content_id).first()
    
    w = saveSubj.objects.filter(user = user, Content = l).first()
    
    if w is None:
        wl = saveSubj.objects.create(user = user,Content = l)
        wl.save()
        return HttpResponseRedirect(reverse("allThings"))
    
    w.delete()
    return HttpResponseRedirect(reverse("allThings"))

@login_required
@csrf_exempt
def profile(request, username):
    user=request.user
    return render(request, "final/profile.html",{
        "contents":Lesson.objects.all(),
        "username":username,
        "mine": saveSubj.objects.filter(user=user),
        "messa":"YOU AREN'T ALLOWED TO VISIT THIS PAGE",
        "all":questions.objects.all()
    })

def odd(request):
    return render(request, "final/odd.html", {
        "contents":Lesson.objects.all(),
    })

def scramble(request):
    return render(request, "final/scramble.html", {
        "contents":Lesson.objects.all(),
    })

def topic(request):
    return render(request, "final/topic.html", {
        "contents":Lesson.objects.all(),

    })

@login_required
def create(request):
    if request.method == "POST":

        title = request.POST['title']

        desc = request.POST['desc']

        pa = request.POST['pa']

        if title =="" or desc =="" or pa=="":
            return render(request,"final/create.html", {
                "alert":"Please compile all fields!"
            })
        
        c = Lesson.objects.create(title=title, explanation = desc, payAttention=pa)
        c.save()
    return render(request, "final/create.html",{
        "contents":Lesson.objects.all(),
    })

def message(request):
    if request.method == "POST":
        email = request.POST['mail']
        text = request.POST['text']

        if email =="" or text=="":
            return render(request, "final/aboutMe.html",{
                "msg":"Please fill all fields!",
                "contents":Lesson.objects.all(),
            })
        
        k = questions.objects.create(email = email, text=text)
        k.save()
    return render(request, "final/aboutMe.html",
    {
        "check":"Message sent!",
        "contents":Lesson.objects.all(),
    })

def delete(request, questions_id):
    if request.method == "POST":
        k = questions.objects.filter(id=questions_id).delete()
        
    return redirect('index')

def pronunciation(request):
    return render(request, "final/pronunciation.html", {
        "contents":Lesson.objects.all(),
    })

def umaterial(request):
    return render(request, "final/umaterial.html", {
        "contents":Lesson.objects.all(),
    })