from django.shortcuts import render, HttpResponse
import datetime
from .models import Proxy, ApiKey
from .serializers import ProxySerializer

from rest_framework import viewsets


def get_proxy(request):
    key = request.GET.get('key')
    p_type = 1 if request.GET.get('type') is None else request.GET.get('type')
    status = 2 if request.GET.get('status') is None else request.GET.get('status')
    print(key)
    print(p_type)
    print(status)
    try:
        ApiKey.objects.get(key=key, end_date__gte=datetime.datetime.now().date())
        proxy = Proxy.objects.filter(type=p_type, status=status)
        return HttpResponse('\n'.join([p.proxy for p in proxy]))
    except ApiKey.DoesNotExist:
        return HttpResponse('API key not exist')


def index(request):
    proxy_count = {'HTTP': Proxy.objects.filter(type=0).count(),
                   'HTTPS': Proxy.objects.filter(type=1).count(),
                   'SOCKS': Proxy.objects.filter(type=2).count(),
                   'SOCKS5': Proxy.objects.filter(type=3).count(),
                   }
    return render(request, 'proxy.html', context=proxy_count)


class ProxyViewSet(viewsets.ModelViewSet):
    queryset = Proxy.objects.filter(status=2)
    serializer_class = ProxySerializer
