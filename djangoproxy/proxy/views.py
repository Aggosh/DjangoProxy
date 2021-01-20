from django.shortcuts import render, HttpResponse
import datetime
from .models import Proxy, ApiKey
from .serializers import ProxySerializer

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response


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
        if request.GET.get('http') is None and request.GET.get('https') is None and request.GET.get('socks') is None and\
                request.GET.get('socks5') is None:
            all_live_proxy = Proxy.objects.filter(status=2)
            res = res + '\n'.join([p.proxy for p in all_live_proxy])

        return HttpResponse(res, content_type="text/plain")
    except ApiKey.DoesNotExist:
        return HttpResponse('API key does not exist')


def index(request):
    proxy_count = {'HTTP': Proxy.objects.filter(type=0).count(),
                   'HTTPS': Proxy.objects.filter(type=1).count(),
                   'SOCKS': Proxy.objects.filter(type=2).count(),
                   'SOCKS5': Proxy.objects.filter(type=3).count(),
                   }
    return render(request, 'proxy.html', context=proxy_count)


class ProxyViewSet(APIView):
    renderer_classes = (JSONRenderer,)

    def get(self, request, format=None):
        proxy_count = Proxy.objects.filter(status=2).count()
        proxy_http = Proxy.objects.filter(status=2, type=0).count()
        proxy_https = Proxy.objects.filter(status=2, type=1).count()
        proxy_socks = Proxy.objects.filter(status=2, type=2).count()
        proxy_socks5 = Proxy.objects.filter(status=2, type=3).count()
        content = {'proxy_count': proxy_count,
                   'proxy_http': proxy_http,
                   'proxy_https': proxy_https,
                   'proxy_socks': proxy_socks,
                   'proxy_socks5': proxy_socks5}
        return Response(content)
