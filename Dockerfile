FROM node:7
WORKDIR /app
COPY pacakge.json /app
RUN npm install
COPY . /app
CMD node server.json
EXPOSE 8081