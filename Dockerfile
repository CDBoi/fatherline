FROM nginx:alpine
EXPOSE 80
COPY index.html /usr/share/nginx/html/index.html
COPY ./assets/ /usr/share/nginx/html/assets/
COPY nginx.conf /etc/nginx/conf.d/default.conf