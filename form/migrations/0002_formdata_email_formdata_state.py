# Generated by Django 4.1.3 on 2022-11-07 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='formdata',
            name='email',
            field=models.EmailField(blank=True, max_length=256, null=True),
        ),
        migrations.AddField(
            model_name='formdata',
            name='state',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]