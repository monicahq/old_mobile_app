FROM node:8.11

WORKDIR /opt/project

RUN npm i -g yarn

# cache deps
COPY .cache/package.json package.json
COPY .cache/yarn.lock yarn.lock
RUN yarn

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn

CMD sleep 300
