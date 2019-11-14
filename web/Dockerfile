ARG NODE_VERSION=12
FROM node:${NODE_VERSION}
LABEL maintainer="Victor Ferreira <victor@otavioferreira.com.br>"
ARG VUE_APP_API_BASE_URL
WORKDIR /app
COPY package*.json ./
RUN npm install -g http-server && \
    npm install --production
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]
