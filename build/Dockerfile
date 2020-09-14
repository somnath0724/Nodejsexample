FROM node

# This is intended to be a shortterm-use image for use in building this project. It should be replaced by something for more general use.
MAINTAINER ricardo.torres@boeing.com

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN npm i -g @angular/cli \

  && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
  && apt update \
  && apt install -y ./google-chrome-stable_current_amd64.deb
