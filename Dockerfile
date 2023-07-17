# Use Node 19 as the base image
FROM node:19 as build-stage

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular app for production
RUN npm run build --prod


# Use a lightweight Node 19 image for serving the app
FROM node:19-slim as production-stage

# Set the working directory to /app
WORKDIR /app

# Copy the built app from the build-stage
COPY --from=build-stage /app/dist ./dist

# Install a lightweight http server
RUN npm install -g http-server

# Expose port 80 for the Angular app
EXPOSE 80

# Start the http-server to serve the app
CMD ["http-server", "./dist", "-p", "80"]
