# Stage 1: Build the Angular app
FROM node:19 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --prod

# Stage 2: Create a production-ready image with Apache
FROM httpd:2.4
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Ajouter la configuration pour les routes Angular en mode HTML5
COPY apache-config.conf /usr/local/apache2/conf/httpd.conf
