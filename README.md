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

【OpenAPI】
参考
・https://zenn.dev/dyoshikawa/articles/ed61d6bf0e8ef1
・https://buildersbox.corp-sansan.com/entry/2023/08/14/182118
・https://note.com/shift_tech/n/n66f43685f2f9

選定ポイント
- フロントエンドとバックエンドをともにtypescriptを使用していればnpm経由で比較的容易に導入できる
	- Aspida
		- https://zenn.dev/dyoshikawa/articles/ed61d6bf0e8ef1
		- https://github.com/aspida/openapi2aspida
		- https://github.com/aspida/aspida/tree/main/packages/aspida-fetch#readme
		- モックサーバとしてmswがある
			- https://github.com/mswjs/msw
			- Aspidaで自動生成したレスポンスの型と組み合わせることで型安全なモックサーバを立てる
				- → バックエンドの実装を待たずにフロントエンドの開発も進められる
	- OpenApiGeneratorはバックエンドとフロントエンドが異なる言語の時に良さそう

- OpenAPI Generator
	- https://5thfloor.co.jp/blog/webapp-development-with-openapi-and-typescript
- openapi-typescript
	- https://github.com/drwpow/openapi-typescript
- orval
	- https://orval.dev/

【openapi.ymlからスキーマファイルを作成する】
npm run openapi-gen
