# nestjs-restapi-practice
Nest.jsの習得用リポジトリ

Nest.jsのアーキテクチャ
https://zenn.dev/morinokami/articles/nestjs-overview

【migration】
参考
・https://typeorm.io/migrations#creating-a-new-migration
・https://qiita.com/jpnm0415shkm/items/f7208f7925adf33e215b

【migration作成】
npx ts-node ./node_modules/.bin/typeorm migration:generate -d ./data-source.ts ./migrations/path

【migration実行】
npx ts-node ./node_modules/.bin/typeorm migration:run -d ./data-source.ts

【CRUDの構築】
参考
・https://zenn.dev/engineerhikaru/articles/69eb781a7fb5e0#2.-typeorm%E3%81%AE%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97
・https://thriveread.com/typeormmodule-with-forroot-and-forfeature/
