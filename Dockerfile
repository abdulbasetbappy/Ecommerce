FROM node:18.13.0

ENV HOST 0.0.0.0

RUN apt-get update && apt-get install -y \
  nano \
  vim