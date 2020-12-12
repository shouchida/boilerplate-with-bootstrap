# boilerplate-with-bootstrap

[Bootstrap v5.0.0-alpha1](https://v5.getbootstrap.jp/)  を利用した Web サイト制作のボイラープレートです。

## 推奨環境

- [Yarn](https://classic.yarnpkg.com/ja/)
- Node.js 12.19.0（制作時のバージョン）

## ディレクトリ構成

```
.
├── config.js
├── dist/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── bootstrap.custom.css
│   │   │   ├── main.css
│   │   │   └── sub.css
│   │   ├── img/
│   │   │   └── dummy_img_01.png
│   │   ├── js/
│   │   │   └── main.js
│   │   └── lib/
│   │       └── js/
│   │           ├── bootstrap.min.js
│   │           └── jquery-3.5.1.min.js
│   └── index.html
├── gulpfile.js/
│   ├── clean.js
│   ├── html.js
│   ├── index.js
│   ├── scripts.js
│   ├── serve.js
│   ├── static.js
│   └── styles.js
├── package.json
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── _partials/
│   │   │   │   ├── _base.scss
│   │   │   │   └── _variables.scss
│   │   │   ├── bootstrap.custom.scss
│   │   │   ├── main.scss
│   │   │   └── sub.scss
│   │   └── js/
│   │       └── main.js
│   └── index.html
└── static/
    └── assets/
        ├── img/
        │   └── dummy_img_01.png
        └── lib/
            └── js/
                ├── bootstrap.min.js
                └── jquery-3.5.1.min.js
```

### `config.js`

ターゲットブラウザ、開発環境内の各種パスなどを設定するファイルです。

### `src/`

開発用のソースファイルです。  
HTML、CSS(Sass)、JS ファイルなど、**編集を前提とするファイル**を格納します。

### `src/assets/css/main.scss`

サイト共通の Sass ファイルです。各種パーシャルファイルを import しています。  
**このファイル内に直接 CSS 宣言を記述することは推奨しません。**  
`dist/assets/css/main.css` として出力されます。

### `src/assets/css/bootstrap.custom.scss`

Bootstrap のカスタムビルド用ファイルです。  
不要な Bootstrap モジュールがある場合はコメントアウトして start(dev) コマンドを実行してください。  
`dist/assets/css/bootstrap.custom.css` として出力されます。

### `src/assets/css/_partials/_variables.scss`

Sass 変数を管理するファイルです。  
Bootstrap のデフォルト変数（ `node_modules/bootstrap/scss/variables` ）を上書きしたり、新たな変数を定義することができます。

### `src/assets/js/main.js`

サイト共通の JS ファイルです。  
Babel によるトランスパイルを経て、`dist/assets/js/main.js` として出力されます。

### `static/`

画像ファイル、各種ライブラリ関連ファイルなど、**編集やコンパイルを前提としないファイル**を格納します。  
start(dev) コマンド実行時に `dist/` ディレクトリ配下にコピーされます。

### `dist/`

コンパイルなどの処理を経たファイルが出力されるディレクトリです。  
**このディレクトリ内のファイルを直接編集することは推奨しません。**

## コマンド

### install（インストール）

```Shell
yarn install
```

Node.js の依存モジュールをインストールします。

### start（ソースファイルのコンパイルと変更監視）

```Shell
yarn start
```

`dist/` ディレクトリ内のファイルを削除後、`src/` ディレクトリ内の HTML、CSS(Sass)、JS ファイルのコンパイルを実行し、`dist/` ディレクトリに出力します。  
また、`static/` ディレクトリ内の静的ファイルを `dist/` ディレクトリにコピーします。

`src/` ディレクトリ内の監視も開始し、HTML、CSS(Sass)、JS ファイルに変更が発生した場合には再度コンパイルと `dist/` ディレクトリへの出力をおこないます。

### dev（開発用ローカルサーバーの起動）

```Shell
yarn dev
```

start コマンドの内容に加えて、開発用ローカルサーバーを起動します。  
`http://localhost:3000/`  で `dist/` ディレクトリ配下にアクセスできます。

`src/` ディレクトリ内の HTML、CSS(Sass)、JS ファイルに変更が発生した場合には、ブラウザが自動リロードされます。
