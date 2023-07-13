# Use an official Node.js runtime as the base image
FROM node:19.5.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the React app for production
RUN npm run start

# Set the environment variable to serve the app
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 4200

# Start the app
CMD ["npm", "start"]
