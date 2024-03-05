FROM node:18-alpine
WORKDIR /nestjs_restapi_practice/app
# ホストのpackage.jsonとpackage-lock.jsonを
# コンテナの/appにコピー
COPY ./package*.json ./

CMD sh -c "npm install && npm run start:dev"
