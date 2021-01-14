from django.shortcuts import render, HttpResponse
import datetime
from .models import Proxy, ApiKey
from .serializers import ProxySerializer

from rest_framework import viewsets


def get_proxy(request):
    key = request.GET.get('key')

    try:
        ApiKey.objects.get(key=key, end_date__gte=datetime.datetime.now().date())

        res = ''

        if request.GET.get('http') == 'on':
            http = Proxy.objects.filter(type=0, status=2)
            res = res + '\n'.join([p.proxy for p in http])
        if request.GET.get('https') == 'on':
            https = Proxy.objects.filter(type=1, status=2)
            res = res + '\n'.join([p.proxy for p in https])
        if request.GET.get('socks') == 'on':
            socks = Proxy.objects.filter(type=2, status=2)
            res = res + '\n'.join([p.proxy for p in socks])
        if request.GET.get('socks5') == 'on':
            socks5 = Proxy.objects.filter(type=3, status=2)
            res = res + '\n'.join([p.proxy for p in socks5])

        return HttpResponse(res)
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
