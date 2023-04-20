# ts-tutorial
- https://typescriptbook.jp/ を進めた

- npm, npx, yarn違い
  | 機能             | npm                 | npx             | yarn          |
  |------------------|---------------------|-----------------|---------------|
  | パッケージ管理    | ✅                  | ❌              | ✅            |
  | パッケージ実行    | ❌                  | ✅              | ❌            |
  | コマンドライン    | ✅                  | ✅              | ✅            |
  | パッケージインストール  | `npm install`      | `npx <command>` | `yarn add`    |
  | パッケージアンインストール| `npm uninstall` | ❌              | `yarn remove` |
  | パッケージ更新    | `npm update`        | ❌              | `yarn upgrade`|
  | パッケージ検索    | `npm search`        | ❌              | `yarn search` |
  | パッケージ情報表示| `npm info`          | ❌              | `yarn info`   |
  | パッケージスクリプト実行 | `npm run <script>`| ❌             | `yarn run <script>`|

  - npm：Node.jsのパッケージマネージャーであり、パッケージのインストール、アンインストール、更新、スクリプトの実行などを行うことができます。
  - npx：npmパッケージを実行するためのコマンドで、パッケージをダウンロードして実行することができます。
  - yarn：npmに代わるパッケージマネージャーであり、パッケージのインストール、アンインストール、更新、スクリプトの実行などを行うことができます。
  この表からわかるように、npmはパッケージの管理、実行、コマンドライン操作を行うことができます。npxは、npmパッケージの実行をより簡単にするためのコマンドです。yarnは、npmに代わるパッケージマネージャーであり、npmと同様の機能を提供しますが、いくつかの異なるコマンドを使用します。



## 参考文献
- [【初心者向け】NPMとpackage.jsonを概念的に理解する](https://qiita.com/righteous/items/e5448cb2e7e11ab7d477)
