from django import urls
from django.db import router
from django.urls import path
from django.urls.conf import include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'user')
router.register(r'usercontacts', views.ContactView, 'usercontact')

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name='index'),
]