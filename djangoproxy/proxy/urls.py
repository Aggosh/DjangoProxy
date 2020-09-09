from django.urls import path, include
from .views import get_proxy, index, ProxyViewSet

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'proxy', ProxyViewSet)


urlpatterns = [
    path("get_proxy/", get_proxy, name='get_proxy'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
