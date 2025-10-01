FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets to nginx directory
COPY . /usr/share/nginx/html/

# Set proper permissions
RUN chmod -R 755 /usr/share/nginx/html

# Configure nginx to serve on port 80
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
