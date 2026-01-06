FROM nginx:stable-alpine 

RUN  touch /var/run/nginx.pid && \
     chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid

COPY ./nginx.conf /etc/nginx/nginx.conf 

RUN rm -rf /usr/share/nginx/html/*

COPY --chown=nginx:nginx  . /usr/share/nginx/html
 


USER nginx
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]