FROM python:3.8

ENV PYTHONUNBUFFERED 1
ENV DJANGO_ENV dev
ENV DOCKER_CONTAINER 1

COPY ./requirements.txt /code/requirements.txt
RUN pip3 install -r /code/requirements.txt

COPY ./djangoproxy /code/
WORKDIR /code/

CMD gunicorn djangoproxy.wsgi:application --bind 0.0.0.0:$PORT