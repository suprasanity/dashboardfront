# Utiliser Node 19 comme image de base
FROM node:19 as build-stage

# Définir le répertoire de travail sur /app
WORKDIR /app

# Copier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier l'ensemble du projet dans le répertoire de travail
COPY . .

# Construire l'application Angular pour la production
RUN npm run build --prod


# Utiliser une image Node 19 légère pour servir l'application
FROM node:19-slim as production-stage

# Définir le répertoire de travail sur /app
WORKDIR /app

# Copier l'application construite à partir de build-stage
COPY --from=build-stage /app/dist .

# Installer un serveur HTTP léger
RUN npm install -g http-server

# Exposer le port 80 pour l'application Angular
EXPOSE 80

# Start the http-server to serve the app
CMD ["http-server", "./", "-p", "80", "-c-1"]
