import requests
import re

from .models import Proxy


def link_parse(url, proxy_type):
    proxy_list = requests.get(url).text.split("\n")
    for proxy in proxy_list:
        if re.match(r'((?:\d{1,3}\.){3}\d{1,3}):(\d+)', proxy):
            new_proxy, _ = Proxy.objects.get_or_create(proxy=proxy, type=proxy_type)
            new_proxy.save()
        else:
            print('error'+ proxy)
    return len(proxy_list)
