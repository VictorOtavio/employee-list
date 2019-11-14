ARG NODE_VERSION=12
FROM node:${NODE_VERSION}
LABEL maintainer="Victor Ferreira <victor@otavioferreira.com.br>"
ARG DB_HOST
ARG DB_PORT
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN NODE_ENV=production npx npm-run-all clean build
EXPOSE 3000
CMD [ "./entrypoint.sh" ]
