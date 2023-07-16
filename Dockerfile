# Use an official Node.js runtime as the base image
FROM node:19.5.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-app /usr/share/nginx/html
