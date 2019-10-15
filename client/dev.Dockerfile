FROM node:carbon-jessie
WORKDIR /app
COPY ./package.json .
RUN npm install react-app-rewired
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
