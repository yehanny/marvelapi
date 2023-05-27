FROM php:8.1-apache

USER root

RUN apt-get update

# Development packages
RUN apt-get install -y \
    libssl-dev \
    openssl \
    libicu-dev \
    libbz2-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    jpegoptim \
    libmcrypt-dev \
    libreadline-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    git \
    zip \
    curl \
    sudo \
    unzip \
    g++ \
    nano \
    # Added exiftool - required composer install >> Riccardo
    exiftool

RUN docker-php-ext-install \
    bz2 \
    intl \
    iconv \
    bcmath \
    opcache \
    calendar \
    mbstring \
    pdo \
    pdo_mysql \
    zip \
    soap \
    gd \
    # Added exif - required composer install >> Riccardo
    exif

RUN docker-php-ext-configure \
    zip

# Apache configs + document root
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# mod_rewrite for URL rewrite and mod_headers for .htaccess extra headers like Access-Control-Allow-Origin-
RUN a2enmod rewrite headers

# Start with base php config, then add extensions
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

# Install XDebug
# [Option] Install zsh
ARG INSTALL_ZSH="true"
# [Option] Upgrade OS packages to their latest versions
ARG UPGRADE_PACKAGES="false"
# [Option] Enable non-root Docker access in container
ARG ENABLE_NONROOT_DOCKER="true"

RUN mkdir bootstrap bootstrap/cache storage storage/framework storage/framework/sessions storage/framework/views storage/framework/cache && \
    sudo chown :www-data storage bootstrap -R && \
    sudo chmod 775 storage bootstrap -R

# Node installation
ARG INSTALL_NODE=true

RUN if [ ${INSTALL_NODE} = true ]; then \
    # Install NodeJS using NVM
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash > /dev/null && \
    export NVM_DIR="$HOME/.nvm" > /dev/null && \
    [ -s "$NVM_DIR/nvm.sh" ] > /dev/null && . "$NVM_DIR/nvm.sh" > /dev/null && \
    nvm install 11 && \
    nvm use node \
    nvm install node-sass; \
    npm rebuild node-sass \
    ;fi

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer > /dev/null

# We need a user with the same UID/GID with host user
# so when we execute CLI commands, all the host file's ownership remains intact
# otherwise command from inside container will create root-owned files and directories
ARG uid
RUN useradd -G www-data,root -u $uid -d /home/devuser devuser
RUN mkdir -p /home/devuser/.composer && \
    chown -R devuser:devuser /home/devuser

WORKDIR /var/www/html

# Set domain alias
ADD https://raw.githubusercontent.com/springload/set-alias-on-host/master/set-alias-on-host.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/set-alias-on-host.sh
