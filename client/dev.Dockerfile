FROM node:carbon-jessie
WORKDIR /marmoset-client
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
