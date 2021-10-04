FROM node:14

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN mkdir -p /usr/code/lahaus-ui
WORKDIR /usr/code/lahaus-ui

COPY package.json package.json
RUN npm install

COPY lahaus-bkp .

COPY build.sh build.sh
RUN chmod +x build.sh

EXPOSE 300
