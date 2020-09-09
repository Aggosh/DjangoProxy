# Generated by Django 3.1 on 2020-08-20 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("proxy", "0002_auto_20200820_1649"),
    ]

    operations = [
        migrations.AddField(
            model_name="proxy",
            name="type",
            field=models.IntegerField(
                choices=[(0, "HTTP"), (1, "HTTPS"), (2, "SOCKS"), (3, "SOCKS5")],
                default=0,
            ),
        ),
    ]