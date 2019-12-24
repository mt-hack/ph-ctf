FROM node:alpine
RUN mkdir /src
COPY app /src/app
COPY app/flag /etc
WORKDIR /src/app
RUN npm install
CMD node app.js