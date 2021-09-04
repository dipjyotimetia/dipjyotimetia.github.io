FROM node:lts as builder

WORKDIR /app/website

EXPOSE 3000
COPY ./ /app/website
RUN yarn install

FROM nginx:stable
COPY --from=builder /app/website/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]