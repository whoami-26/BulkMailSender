from django.contrib import admin
from django.urls import path,include
from app.views import *
urlpatterns = [
    path("",IndexPage,name="indexpage"),
]