from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import request
from .views import MenuListView

app_name = 'api'

urlpatterns = [
    path('menu/', MenuListView.as_view(), name='menu_api'),
]
