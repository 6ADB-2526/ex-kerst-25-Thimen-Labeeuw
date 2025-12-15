from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import User
from django.views.decorators.csrf import csrf_exempt
import json
from django.forms.models import model_to_dict

# Create your views here.
def getAll(req):
    allUsers = User.objects.all().values()
    allUsers = list(allUsers)
    return JsonResponse(allUsers, safe=False)

@csrf_exempt
def add(req):
    post_data =  json.loads(req.body.decode('utf-8'))
    newUser = User() 
    newUser.login = post_data["login"]
    newUser.pasword = post_data["password"]
    newUser.email = post_data["email"]
    newUser.role = post_data["role"]
    newUser.isSuperuser = post_data["isSuperuser"]
    newUser.save()
    # geef als return de nieuw gemaakte user aan. 
    return HttpResponse("add")


# verder ben je jammer genoeg niet geraakt. 
# delete / update / pass-check
def delete(req, ID):

    return HttpResponse("delete")

def change(req, ID):
    return HttpResponse("change")