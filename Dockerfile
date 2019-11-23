FROM node:alpine

RUN mkdir -p /app
WORKDIR /app/packages/slides
VOLUME /app

# ENTRYPOINT yarn install
CMD yarn start