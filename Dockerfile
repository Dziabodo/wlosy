FROM php:8.0.2-apache

RUN apt-get update; apt-get -y install libz-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev

RUN docker-php-ext-install pdo pdo_mysql mysqli bcmath gd opcache

COPY 000-default.conf /etc/apache2/sites-enabled/000-default.conf

#COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt-get update && \
    apt-get upgrade -y
RUN apt-get install -y git
RUN apt-get install -y ruby-full
RUN apt-get install build-essential
RUN gem install sass
Run gem install compass