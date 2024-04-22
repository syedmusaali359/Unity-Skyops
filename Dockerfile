# FROM node:alpine3.17 as builder
# # Set working directory. Paths will be relative this WORKDIR.
# WORKDIR /app
# # Copy dependencies
# COPY package*.json ./
# # install dependencies
# RUN yarn install
# # Copy source files from host computer to the container
# COPY . .
# RUN yarn build
# EXPOSE 3000

# starting server with cmd command
# CMD [ "yarn", "start" ]


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
