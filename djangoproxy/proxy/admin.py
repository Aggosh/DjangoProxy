from django.contrib import admin
from .models import Proxy, ProxySource, ApiKey


admin.site.register(Proxy)
admin.site.register(ProxySource)
admin.site.register(ApiKey)
