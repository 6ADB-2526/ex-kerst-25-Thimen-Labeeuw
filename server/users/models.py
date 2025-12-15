from django.db import models

# Create your models here.
class User(models.Model):
    login = models.CharField()
    pasword = models.CharField()
    email = models.CharField()
    role = models.CharField()
    isSuperuser = models.BooleanField()