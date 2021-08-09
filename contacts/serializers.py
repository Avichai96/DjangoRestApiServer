from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id' ,'user_name', 'user_last_name')

class UserContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserContact
        fields = ('id' ,'user', 'contact_name', 'contact_phone_number')

