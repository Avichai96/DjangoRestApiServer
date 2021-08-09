from django.shortcuts import render
from django.http import HttpResponse
from .serializers import UserSerializer, UserContactSerializer
from rest_framework import viewsets
from .models import *

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class ContactView(viewsets.ModelViewSet):
    serializer_class = UserContactSerializer
    # queryset = UserContact.objects.all()
    def get_queryset(self):
        queryset = UserContact.objects.all()
        userID = self.request.query_params.get('userID')
        if userID is not None:
            queryset = queryset.filter(user=userID)
        return queryset

