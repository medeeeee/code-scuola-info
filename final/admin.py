from django.contrib import admin

# Register your models here.

  
from final.models import Lesson, User, saveSubj
from django.contrib import admin

# Register your models here.


admin.site.register(User)
admin.site.register(Lesson)
admin.site.register(saveSubj)