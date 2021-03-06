# Ejemplo
# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:14.15.1-alpine3.12 as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN  node_modules/.bin/ng build --configuration=production


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.21.0-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/ /usr/share/nginx/html/
COPY --from=build /usr/local/app/conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/conf/default.conf /etc/nginx/conf.d/default.conf
# Expose port 80
EXPOSE 80
