import os
from celery import Celery
from django.conf import settings
from celery.schedules import crontab


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "djangoproxy.settings")
celery_app = Celery("djangoproxy")
celery_app.config_from_object("django.conf:settings")
celery_app.autodiscover_tasks(settings.INSTALLED_APPS)


celery_app.conf.beat_schedule = {
    "collect-proxy-every-hour": {
        "task": "proxy.tasks.find_proxy",
        "schedule": crontab(hour="*", minute=35),
    },
    "check-proxy-every-hour": {
        "task": "proxy.tasks.check_proxy",
        "schedule": crontab(hour="*", minute=30),
    },
}
