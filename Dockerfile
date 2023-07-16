# Use an official Node.js runtime as the base image
FROM node:19.5.0-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use an official Nginx image as the base image
FROM nginx:latest

# Copy the built static files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# The default command for the Nginx image starts Nginx automatically
CMD ["nginx", "-g", "daemon off;"]
