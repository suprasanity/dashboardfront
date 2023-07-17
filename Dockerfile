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



# Stage 2: Serve the Angular app using NGINX
FROM nginx:1.21.1
COPY --from=build-stage /app/dist/* /usr/share/nginx/html

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default NGINX port
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
