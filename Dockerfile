FROM node:16

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "run", "web", "react-web"]
