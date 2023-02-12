FROM trafex/alpine-nginx-php7
USER root
RUN echo "FLAG{BBBBBB!}" > /flag
COPY --chown=nginx /public/* /var/www/html
USER nobody
