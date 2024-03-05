# nestjs-restapi-practice
Nest.jsの習得用リポジトリ

【migration作成】
npx ts-node ./node_modules/.bin/typeorm migration:create ./db/migrations/create_todos

【migration実行】
npx ts-node ./node_modules/.bin/typeorm migration:run -d ./src/data-source.ts
