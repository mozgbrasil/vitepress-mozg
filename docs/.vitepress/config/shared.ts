import { defineConfig, PageData } from 'vitepress'

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
      // TODO: remove when https://github.com/mozgbrasil/vitepress-mozg/issues/4431 is fixed
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
    ['script', { type: 'module',  src: '/main.ts', defer: '' }],
    ['link', { rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@mozgbrasil/web-components@1.0.23' }],
    ['script', { src: 'https://platform.linkedin.com/badges/js/profile.js', async: '', defer: '' }],
    // ['script', { type: 'module', src: 'http://localhost:5173/src/index.ts' }],
    // ['script', { type: 'module', src: 'mozg-web-components.es.js' }],
    // 
    // 
     [
      'script',
      { type: 'module' },
      `;(() => {
      
       

      })()`
    ] ,
    // 
    // https://vitepress.dev/reference/site-config#example-registering-a-service-worker
    [
      'script',
      { id: 'register-sw' },
      `;(() => {
      
        // Registrar o Service Worker
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker.getRegistrations().then((registrations) => {
            if (registrations.length === 0) {
              // Se não houver registros, registre o Service Worker
              navigator.serviceWorker
                .register("/service-worker.js")
                .then((registration) => {
                  console.log("Service Worker registrado com sucesso:");
                })
                .catch((error) => {
                  console.error("Falha ao registrar o Service Worker:", error);
                });
            } else {
              console.log("Service Worker já registrado");
            }
          });
        }

      })()`
    ] ,
    // https://vitepress.dev/reference/site-config#example-using-google-analytics
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-WCNGF2YB71' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WCNGF2YB71');`
    ],
    // 
  ],

  themeConfig: {
    logo: { src: '/logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/mozgbrasil/vitepress-mozg'
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
  },

  // SEO Improvement - JSON-LD

  transformPageData(pageData) {
    const canonicalUrl = `https://mozg.com.br/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    const res = {
      frontmatter: {
        ...pageData.frontmatter,
        head: [
          ['link', { rel: 'canonical', href: canonicalUrl }],
          ['script', { type: 'application/ld+json' }, getJSONLD(pageData)]
        ]
      }
    }

    // console.log({ pageData, res })

    return res
  }
})

//

function getJSONLD(pageData: PageData) {
  let JSONLD = ''
  if (pageData.relativePath === 'index.md') {
    JSONLD = `{
  "@context":"http://schema.org",
  "@type":"WebSite",
  "url":"https:\/\/mozg.com.br\/",
  "inLanguage":"pt",
  "description":"${pageData.description}",
  "name":"${pageData.title}"
}`
  } else {
    let lang = pageData.relativePath.startsWith('zh/') ? 'zh-CN' : 'en'
    let url = `https:\/\/mozg.com.br\/${pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/\/index\$/, '/')}`
    JSONLD = `{
  "@context":"http://schema.org",
  "@type":"TechArticle",
  "headline":"${pageData.title} | ${pageData.titleTemplate}",
  "inLanguage":"${lang}",
  "mainEntityOfPage":{
     "@type":"WebPage",
     "@id":"${url}"
  },
  "keywords":"mozg, cerebrum",
  "url":"${url}"
}`
  }

  // console.log({ pageData, JSONLD })

  return `${JSONLD}`
}
