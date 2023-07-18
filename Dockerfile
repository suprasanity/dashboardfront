# Utiliser Node 19 comme image de base
FROM node:19 as build-stage

# Définir le répertoire de travail sur /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npm", "start"]
