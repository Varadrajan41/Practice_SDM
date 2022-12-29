FROM node:7
WORKDIR /app
COPY packge.json /app
RUN npm install
COPY . /app
CMD node server.json
EXPOSE 8081
