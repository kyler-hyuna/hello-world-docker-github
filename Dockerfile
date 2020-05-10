FROM node:12.16-alpine

ENV NODE_ENV production

WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn install --production --silent 

COPY src/ src/

EXPOSE 8080
CMD ["yarn", "start"]