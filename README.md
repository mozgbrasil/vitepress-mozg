# VitePress 📝💨

[![test](https://github.com/vuejs/vitepress/workflows/Test/badge.svg)](https://github.com/vuejs/vitepress/actions)
[![npm](https://img.shields.io/npm/v/vitepress)](https://www.npmjs.com/package/vitepress)
[![nightly releases](https://img.shields.io/badge/nightly-releases-orange)](https://nightly.akryum.dev/vuejs/vitepress)
[![chat](https://img.shields.io/badge/chat-discord-blue?logo=discord)](https://chat.vuejs.org)

---

VitePress is a Vue-powered static site generator and a spiritual successor to [VuePress](https://vuepress.vuejs.org), built on top of [Vite](https://github.com/vitejs/vite).

## Documentation

To check out docs, visit [vitepress.dev](https://vitepress.dev).

## Changelog

Detailed changes for each release are documented in the [CHANGELOG](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md).

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/vuejs/vitepress/blob/main/.github/contributing.md) before making a pull request.

## License

[MIT](https://github.com/vuejs/vitepress/blob/main/LICENSE)

Copyright (c) 2019-present, Yuxi (Evan) You

## Development

https://dnschecker.org/

```bash


# Mount $ Remount

MY_DATE_TIME=$(date +"%Y%m%d_%H%M%S")
IN="/home/marcio/Downloads/tmp/$MY_DATE_TIME"
mkdir -p "$IN"
cd "$IN"

# npm add -D vitepress
# npx vitepress init

npm create vitepress@latest -- --help

# Dev

cd vitepress-project
npm install
pnpm install
npm run dev

```

## Publish

```bash

npm run build && npm run serve

# meld /home/marcio/dados/vitepress/docs/.vitepress/dist /home/marcio/dados/mozgbrasil.github.io/docs

rm -fr ./docs/.vitepress/cache/ ./docs/.vitepress/dist/

npm run build

rm -fr /home/marcio/dados/mozg.com.br/docs

cp -r /home/marcio/dados/vitepress/docs/.vitepress/dist /home/marcio/dados/mozg.com.br/docs

echo "mozg.com.br" >> CNAME

```

<!-- https://mozgbrasil.github.io//vitepress/ -->

## Tests

```bash
npm uninstall @lunariajs/core
# npm install postcss-rtlcss
npm run dev

```
