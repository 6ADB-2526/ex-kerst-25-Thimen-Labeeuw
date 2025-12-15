from django.db import models

# Create your models here.
class User(models.Model):
    # maak gebruik van aanvullingen bij je model (max aantal chars - defaults)
    login = models.CharField()
    pasword = models.CharField()
    email = models.CharField()
    role = models.CharField()
    isSuperuser = models.BooleanField()