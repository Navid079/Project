#syntax=docker/dockerfile:1

FROM node:16.13.1-slim
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]