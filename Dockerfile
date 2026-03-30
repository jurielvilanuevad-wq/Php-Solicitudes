FROM php:8.2-fpm-alpine

# Instalar nginx y bash
RUN apk add --no-cache nginx bash

# Instalar extensión mysqli para tu conexion.php
RUN docker-php-ext-install mysqli

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos de la app
COPY . /var/www/html/
RUN chown -R www-data:www-data /var/www/html

# Script de arranque
RUN echo '#!/bin/bash
php-fpm -D
sed -i "s/RAILWAY_PORT/${PORT:-80}/" /etc/nginx/nginx.conf
nginx -g "daemon off;"' > /start.sh && chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]