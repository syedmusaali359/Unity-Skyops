FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
#COPY overlay/development/configmap/.env .
RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /app/default.conf /etc/nginx/conf.d/
ENTRYPOINT ["nginx", "-g", "daemon off;"]
