# Generated by Django 3.2.6 on 2021-08-08 18:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserContact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact_name', models.CharField(max_length=100)),
                ('contact_phone_number', models.IntegerField(default=0)),
            ],
        ),
        migrations.RenameModel(
            old_name='AllUsers',
            new_name='User',
        ),
        migrations.DeleteModel(
            name='UsersContacts',
        ),
        migrations.AddField(
            model_name='usercontact',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contacts.user'),
        ),
    ]