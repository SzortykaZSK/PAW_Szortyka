FROM node:14

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install
RUN npx tsc

EXPOSE 3000

CMD [ "node", "build/src/index.js" ]
