from celery import group

from .models import ProxySource, Proxy

from .proxy_parsers import link_parse

import sys
import random
import requests

sys.path.append("..")

from djangoproxy.celery import celery_app


@celery_app.task
def find_proxy():
    all_count = 0
    for proxy in ProxySource.objects.all():
        count = link_parse(proxy.url, proxy.type)
        print(f"{count} proxy found")
        all_count += count
    return all_count


@celery_app.task(ignore_result=True)
def check_proxy():
    tasks = group([https_test.s(obj.proxy) for obj in Proxy.objects.filter(type=1)])  # 1 - HTTPS
    tasks.delay()
    print('All proxy checked')


@celery_app.task(ignore_result=True)
def https_test(proxy):
    urls = ['https://www.facebook.com/robots.txt', 'https://store.steampowered.com/robots.txt',
            'https://www.google.com/humans.txt', 'https://en.wikipedia.org/robots.txt',
            'https://www.bing.com/robots.txt', 'https://www.youtube.com/robots.txt',
            'https://www.amazon.com/robots.txt']
    try:
        requests.get(random.choice(urls), proxies={"https": proxy}, timeout=5)
    except (TimeoutError, requests.exceptions.ConnectTimeout, requests.exceptions.ProxyError,
            requests.exceptions.ConnectionError, requests.exceptions.ReadTimeout):
        proxy_obj = Proxy.objects.get(proxy=proxy)
        proxy_obj.delete()
        return False
    else:
        proxy_obj = Proxy.objects.get(proxy=proxy)
        proxy_obj.status = 2  # 2 is live
        proxy_obj.save()
        return True
