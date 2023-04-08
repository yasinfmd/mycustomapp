FROM node:16-alpine

WORKDIR /app

COPY ./be/package*.json ./
RUN npm install -g jest
RUN npm install

COPY ./be .


ENV APP_PORT=5020
ENV MONGO_DB_HOST="mongodb+srv://yasindlklc:1JlzZM2HB01YzIyT@cluster0.wknqv.mongodb.net/?retryWrites=true&w=majority"
ENV APP_PREFIX="/api/"


RUN npm run test

EXPOSE 5020


CMD [ "npm", "start" ]
