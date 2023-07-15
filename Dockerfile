# Use an official Node.js runtime as the base image
FROM node:19.5.0-alpine

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Servere
FROM nginx:1.18.0-alpine
COPY --from=build /app/dist/project-name/ /usr/share/nginx/html
EXPOSE 80
