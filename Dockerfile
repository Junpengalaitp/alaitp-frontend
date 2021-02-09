FROM nginx:stable-alpine
COPY build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY certs/ /etc/nginx/certs/
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]