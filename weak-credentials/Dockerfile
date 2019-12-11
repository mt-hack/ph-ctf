FROM node:alpine
RUN apk --no-cache add --virtual builds-deps build-base python
COPY app /root/app
WORKDIR /root/app
RUN rm /root/app/node_modules -rf
RUN npm install
RUN npm rebuild bcrypt --build-from-source
CMD node app.js