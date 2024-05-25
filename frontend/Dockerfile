# Use the official Node.js image as the base image.
FROM node:12 AS build

# Set the working directory.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the React app.
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build output to Nginx's html directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port Nginx is using.
EXPOSE 80

# Start Nginx when the container starts.
CMD ["nginx", "-g", "daemon off;"]