from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.getAll),
    path('add/', views.add),
    path('delete/<int:ID>', views.delete),
    path('change/<int:ID>', views.change),
]
