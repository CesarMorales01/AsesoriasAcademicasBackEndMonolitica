FROM node:16

WORKDIR /usr/src/appMonolitica

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "index.js"]