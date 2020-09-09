from django.db import models


PROXY_STATUS = ((0, "Dead"), (1, "Unknown"), (2, "Live"))


PROXY_TYPE = ((0, "HTTP"), (1, "HTTPS"), (2, "SOCKS"), (3, "SOCKS5"))


class Proxy(models.Model):
    proxy = models.CharField(max_length=40, unique=True)
    status = models.IntegerField(choices=PROXY_STATUS, default=1)

    type = models.IntegerField(choices=PROXY_TYPE, default=0)

    create_date = models.DateField(auto_now_add=True)
    last_update = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.get_status_display()} {self.get_type_display()} {self.proxy}"


class ProxySource(models.Model):
    title = models.CharField(max_length=200)
    type = models.IntegerField(choices=PROXY_TYPE)
    url = models.CharField(max_length=1000)

    def __str__(self):
        return f"{self.title} {self.get_type_display()}"


class ApiKey(models.Model):
    key = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"{self.key} {self.end_date}"
