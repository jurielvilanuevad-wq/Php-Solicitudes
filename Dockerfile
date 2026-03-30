FROM php:8.2-apache

# Deshabilitar módulos MPM en conflicto y dejar solo uno
RUN a2dismod mpm_event mpm_worker 2>/dev/null || true \
    && a2enmod mpm_prefork

# Habilitar mod_rewrite (necesario para la mayoría de apps PHP)
RUN a2enmod rewrite

# Copiar archivos de la app al directorio web de Apache
COPY . /var/www/html/

# Permisos correctos
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Configurar Apache para usar el puerto de Railway (variable $PORT)
RUN sed -i 's/Listen 80/Listen ${PORT:-80}/' /etc/apache2/ports.conf \
    && sed -i 's/<VirtualHost \*:80>/<VirtualHost *:${PORT:-80}>/' /etc/apache2/sites-enabled/000-default.conf

EXPOSE 80

CMD ["apache2-foreground"]