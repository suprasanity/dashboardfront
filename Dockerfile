# Stage 1: Build the Angular app
FROM node:19 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Create a production-ready image with Apache
FROM httpd:2.4
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Enable Apache rewrite module and update configuration
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf
RUN echo 'LoadModule proxy_module modules/mod_proxy.so' >> /usr/local/apache2/conf/httpd.conf
RUN echo 'LoadModule proxy_http_module modules/mod_proxy_http.so' >> /usr/local/apache2/conf/httpd.conf
RUN echo 'ProxyPass /api/ http://backend:3000/' >> /usr/local/apache2/conf/httpd.conf
RUN echo 'ProxyPassReverse /api/ http://backend:3000/' >> /usr/local/apache2/conf/httpd.conf

# Update Apache default site configuration
COPY ./apache-default.conf /usr/local/apache2/conf/extra/httpd-vhosts.conf
RUN echo 'Include conf/extra/httpd-vhosts.conf' >> /usr/local/apache2/conf/httpd.conf
RUN echo '127.0.0.1 chovy.freeboxos.fr' >> /etc/hosts
