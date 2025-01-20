import { defineConfig } from 'vitepress'

import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'

export const shared = defineConfig({
  title: 'Mozg',

  rewrites: {
    'pt/:rest*': ':rest*'
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    config(md) {
      // TODO: remove when https://github.com/mozgbrasil/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'es':
              return 'Copiar código'
            case 'fa':
              return 'کپی کد'
            case 'ko':
              return '코드 복사'
            case 'pt':
              return 'Copiar código'
            case 'ru':
              return 'Скопировать код'
            case 'zh':
              return '复制代码'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      md.use(groupIconMdPlugin)
    }
  },

  sitemap: {
    hostname: 'https://mozg.com.br',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [     
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'pt_BR' }],
    ['meta', { property: 'og:title', content: 'Mozg | Sistemas e informação' }],
    ['meta', { property: 'og:site_name', content: 'Mozg' }],
    ['meta', { property: 'og:image', content: 'https://mozg.com.br/og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://mozg.com.br/' }],
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }],
    ['link', { rel: 'manifest',  href: '/manifest.json' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/@mozgbrasil/web-components@1.0.19' }],
    // ['script', { src: 'https://platform.linkedin.com/badges/js/profile.js' }],
    // ['script', { type: 'module', src: 'http://localhost:5173/src/web-components/index.ts' }]
    ['script', { type: 'module', src: 'mozg-web-components.es.js' }]
   ],

  themeConfig: {
    logo: { src: '/logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/mozgbrasil/vitepress'
      }
    ],

    search: {
      provider: 'local'
      // provider: 'algolia',
      // options: {
      //   appId: 'EYUWQOC0G9',
      //   apiKey: '31f76f286968c8238eb92be6fc676af1',
      //   indexName: 'vitepress',
      //   locales: {}
      // }
    }

    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          vitepress: localIconLoader(
            import.meta.url,
            '../../public/logo-mini.svg'
          ),
          firebase: 'logos:firebase'
        }
      })
    ]
  }
})
