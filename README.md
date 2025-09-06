# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ microCMS integration ready

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 microCMS Integration

このプロジェクトはmicroCMSとの連携に対応しています。

### Setup

1. `.env.example`を`.env.local`にコピーしてください
2. microCMSのサービスドメインとAPIキーを設定してください：

```
PUBLIC_MICROCMS_SERVICE_DOMAIN=your-service-domain
PUBLIC_MICROCMS_API_KEY=your-api-key
PUBLIC_SITE_URL=https://your-domain.pages.dev
```

### Usage

- `/` - microCMSで管理されているブログ記事一覧
- `/categories/` - カテゴリ一覧
- `/search` - 記事検索
- `/about` - Aboutページ（microCMS管理）
- `src/lib/microcms.ts` - microCMS連携用のライブラリ

### microCMS API設定

以下のAPIエンドポイントを作成してください：

#### blogs API（リスト形式）
- title (テキスト)
- content (リッチエディタ)
- eyecatch (画像・任意)
- category (参照・任意)

#### categories API（リスト形式）
- name (テキスト)
- description (テキスト・任意)

#### about API（リスト形式）
- title (テキスト)
- content (リッチエディタ)

#### news API（リスト形式）
- title (テキスト)
- content (リッチエディタ)
- publishedAt (日時)

#### banners API（リスト形式）
- title (テキスト)
- image (画像)
- link (テキスト・任意)

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
