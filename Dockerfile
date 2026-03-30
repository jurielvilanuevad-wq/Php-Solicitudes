FROM php:8.2-fpm-alpine

RUN apk add --no-cache nginx bash
RUN docker-php-ext-install mysqli

COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh /start.sh
RUN chmod +x /start.sh

COPY . /var/www/html/
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
CMD ["/start.sh"]