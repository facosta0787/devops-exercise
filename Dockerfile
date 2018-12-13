FROM node:8.14.0-jessie
EXPOSE 3000
WORKDIR /app
COPY ["package.json","package-lock.json","./"]
RUN npm install
COPY . .
CMD ["node","server.js"]