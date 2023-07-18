# Utiliser Node 19 comme image de base
FROM node:19 as build-stage

# Définir le répertoire de travail sur /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
USER root
CMD ["/bin/bash", "-c", "echo 'chovy.freeboxos.fr' > /etc/hostname && service hostname restart && npm start"]
