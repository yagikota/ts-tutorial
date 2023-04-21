# memo

- `.eslint.js`, `tsconfig.eslint.json`, `tsconfig.json`の関係性がいまいちわからない。
  - 追加のコンパイラ設定をtsconfig.eslint.jsonに書きます。コンパイラ設定は、tsconfig.jsonの内容をextendsで継承しつつ、上書きが必要なところだけ記述していきます。

    ```json
    {
      "extends": "./tsconfig.json",
      "compilerOptions": {
        "allowJs": true
      },
      "include": ["src", ".*.js"]
    }
    ```
    - tsconfig.eslint.jsonは、「TypeScriptを使ううえでlintをどのファイルにまで適用すればいいのか」を管理するファイル
       - <https://zenn.dev/rinda_1994/articles/07a30be1a26a38>
