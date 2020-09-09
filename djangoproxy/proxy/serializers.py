from rest_framework import serializers

from .models import Proxy


class ProxySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Proxy
        fields = ['proxy', 'type', 'status']
