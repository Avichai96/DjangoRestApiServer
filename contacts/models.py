from django.db import models

class User(models.Model):
    user_name = models.CharField(max_length=100)
    user_last_name = models.CharField(max_length=200)
    def __str__(self):
        return '{} {}'.format(self.user_name, self.user_last_name)

class UserContact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    contact_name = models.CharField(max_length=100)
    contact_phone_number = models.IntegerField(default=0)
    def __str__(self):
        return '{} : {}'.format(self.user, self.contact_name)

    