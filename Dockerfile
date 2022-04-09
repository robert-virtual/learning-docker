FROM node:16

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 4000

ENV PORT 8080

CMD ["node","."]
