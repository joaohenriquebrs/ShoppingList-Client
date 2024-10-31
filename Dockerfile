FROM node:18.16

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .
ENV NODE_ENV=production
RUN yarn
COPY client.js .
COPY tsconfig.json .
COPY next.config.js .
COPY ./src ./src

ENV NODE_OPTIONS=--max_old_space_size=2560

RUN yarn build
EXPOSE 3000


CMD ["node", "client"]