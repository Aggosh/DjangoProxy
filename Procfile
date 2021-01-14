web: /bin/sh -c gunicorn\ djangoproxy.wsgi:application\ --bind\ 0.0.0.0:\$PORT
celery: celery -A djangoproxy worker -B --loglevel=info --concurrency=10