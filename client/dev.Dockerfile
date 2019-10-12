FROM node:carbon-jessie
WORKDIR /app
COPY ./package.json .
RUN apt-get install libpng-dev
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
