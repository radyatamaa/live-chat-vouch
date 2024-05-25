# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:12

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Debugging step: List node_modules to verify installation
RUN ls -la node_modules

# Copy local code to the container image.
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run the web service on container startup.
CMD [ "npm", "start" ]
