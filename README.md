# Garima Codes
## My Tech Blog Website


![Author](https://img.shields.io/badge/author-garimasingh128-orange)
![License](https://img.shields.io/badge/license-MIT-brightgreen)
![Platform](https://img.shields.io/badge/platform-Visual%20Studio%20Code-blue)
![Last Commit](https://img.shields.io/github/last-commit/garimasingh128/GarimaCodes)
![Maintained](https://img.shields.io/maintenance/yes/2020)



<div align="center">

  <img src="./assets/gatsby-starter-bee.png" width="360px" />

</div>

![Netlify Status](https://api.netlify.com/api/v1/badges/4b1962ce-6206-4d8f-9516-63be92294198/deploy-status)



<div align="center">

<img src="ss.png" height="350px">

</div>
[Check out this live here.](https://garimasingh.netlify.app/)

In this template...

- 💄 Code highlight with Fira Code font
- 🧙 CLI Tool
- 😄 Emoji (emojione)
- 🗣 Social share feature (Twitter, Facebook)
- 💬 Comment feature (disqus, utterances)
- ☕ 'Buy me a coffee' service
- 🤖 GA
- ⭐ Enhance UX
- ⚙ Configurable

> [About this Template](https://www.gatsbyjs.org/starters/JaeYeopHan/gatsby-starter-bee/)

## Demo

- [Default Theme](https://gatsby-starter-bee.netlify.com/)

## 😎 Quick Start

### 1. Create a Gatsby site

```sh
# create a new Gatsby site using the blog starter
npx gatsby new my-blog-starter https://github.com/JaeYeopHan/gatsby-starter-bee
```

> If you are not using `npx`, following [Gatsby Getting Started](https://www.gatsbyjs.org/docs/quick-start)

```sh
npm install -g gatsby-cli
gatsby new my-blog-starter https://github.com/JaeYeopHan/gatsby-starter-bee
```

### 2. Start developing

```sh
cd my-blog-starter/
npm start
# open localhost:8000
```

### 3. Add your content

You can write...

- contents to blog in `content/blog` directory.
- resume `content/__about` directory.

> With markdown syntax and some meta data

#### Support script for creating new post

![cli-tool-example](assets/cli-tool-example.gif)

```sh
npm run post
```

👉 Use **gatsby-post-gen** (https://github.com/JaeYeopHan/gatsby-post-gen)

### 4. Fix meta data

You can fix meta data of blog in `/gatsby-meta-config.js` file.

### 5. Publish with [netlify](https://netlify.com)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JaeYeopHab/gatsby-starter-bee)

:bulb: if you want to deploy github pages, add following script to package.json

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

## 🧐 Customize

### ⚙ Gatsby config

```sh
/root
├── gatsby-browser.js // font, polyfill, onClientRender ...
├── gatsby-config.js // Gatsby config
├── gatsby-meta-config.js // Template meta config
└── gatsby-node.js // Gatsby Node config
```

### ⛑ Structure

```sh
src
├── components // Just component with styling
├── layout // home, post layout
├── pages // routing except post: /(home), /about
├── styles
│   ├── code.scss
│   ├── dark-theme.scss
│   ├── light-theme.scss
│   └── variables.scss
└── templates
    ├── blog-post.js
    └── home.js
```

### 🎨 Style

You can customize color in `src/styles` directory.

```sh
src/styles
├── code.scss
├── dark-theme.scss
├── light-theme.scss
└── variables.scss
```

### 🍭 Tips (You can change...)

- Profile image! (replace file in `/content/assets/profile.png`)
- Favicon image! (replace file in `/content/assets/felog.png`)
- Header gradient! (\$theme-gradient `/styles/variables.scss`)
- Utterances repository! (replace repository address in `/gatsby-meta-config.js`)
  - ⚠️ Please check, this guide(https://utteranc.es/)

## ☕ Like it?

<a href="https://www.buymeacoffee.com/garimasingh" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" >
</a>

## 🤔 If...

If you are currently writing in the Medium, consider migration with [medium-to-own-blog](https://github.com/mathieudutour/medium-to-own-blog)!

## :bug: Bug reporting

[Issue](https://github.com/JaeYeopHan/gatsby-starter-bee/issues)

## 🎁 Contributing

[Contributing guide](./CONTRIBUTING.md)


## LICENSE

[MIT](./LICENSE)

