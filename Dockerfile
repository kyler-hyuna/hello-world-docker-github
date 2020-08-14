FROM node:12.16-alpine

ENV NODE_ENV production

WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn --prod --frozen-lockfile --silent 2>/dev/null

COPY src/ src/

EXPOSE 8080
CMD ["yarn", "start"]