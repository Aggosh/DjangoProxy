import requests

from .models import Proxy

import sys
sys.path.append("..")

from djangoproxy.celery import celery_app


@celery_app.task()
def https_test(proxy, url="https://www.google.com/"):
    try:
        requests.get(url, proxies={"https": proxy}, timeout=5)
    except (TimeoutError, requests.exceptions.ConnectTimeout, requests.exceptions.ProxyError,
            requests.exceptions.ConnectionError):
        proxy_obj = Proxy.objects.get(proxy=proxy)
        proxy_obj.delete()
        return False
    else:
        proxy_obj = Proxy.objects.get(proxy=proxy)
        proxy_obj.status = 2  # 2 is live
        proxy_obj.save()
        return True
