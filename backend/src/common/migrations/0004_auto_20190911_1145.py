# Generated by Django 2.2.1 on 2019-09-11 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0003_channel_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='channel',
            name='sn_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='channel',
            name='tm_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
