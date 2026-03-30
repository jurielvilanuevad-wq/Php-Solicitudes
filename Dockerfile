FROM php:8.2-apache

# Desactivar MPM conflictivos y dejar prefork
RUN a2dismod mpm_event || true
RUN a2dismod mpm_worker || true
RUN a2enmod mpm_prefork

# Instalar extensiones necesarias
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copiar archivos
COPY . /var/www/html/

# Activar rewrite
RUN a2enmod rewrite

# Permisos
RUN chown -R www-data:www-data /var/www/html