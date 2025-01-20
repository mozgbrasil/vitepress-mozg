# vitepress

<https://vite.dev/guide/ssr>

## Development

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

echo "mozg.com.br" >> /home/marcio/dados/mozg.com.br/CNAME

```

<!-- https://mozgbrasil.github.io//vitepress/ -->

## Tests

```bash
npm uninstall @lunariajs/core
# npm install postcss-rtlcss
npm run dev

```
