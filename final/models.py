from django.db import models

# Create your models here.
  
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    pass

class Lesson(models.Model):
    
    title=models.CharField(max_length=64)
    explanation = models.TextField()
    payAttention = models.TextField()

    def __str__(self):
        return f"{self.title}"

class saveSubj(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Content = models.ForeignKey(Lesson, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user}--{self.Content}"

class questions(models.Model):
    email = models.EmailField()
    text = models.TextField()
    
    