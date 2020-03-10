FROM node:13.10.1-alpine3.11

RUN yarn --version

RUN mkdir workSpace

WORKDIR /workSpace

COPY package.json .

RUN yarn

COPY . .

ENTRYPOINT [ "node", "server.js" ]
