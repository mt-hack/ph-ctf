FROM node:alpine
RUN mkdir /src
COPY app /src/app
WORKDIR /src/app
RUN npm install
CMD node app.js