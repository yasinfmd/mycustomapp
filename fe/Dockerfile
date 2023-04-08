FROM node:16-alpine

WORKDIR /app

COPY ./fe/package*.json ./
RUN npm install


COPY ./fe .

RUN npm run test

RUN npm run build


EXPOSE 3000

CMD ["npm", "run", "start"]
