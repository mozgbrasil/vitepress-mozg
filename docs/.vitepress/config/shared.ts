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
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
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
  head:  [
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
    ['link', { rel: 'manifest', href: '/manifest.json' }],    
    ['script', { src: `/main.js` }],
    ['link', { rel: 'stylesheet', href: '/main.css' }],
    ['script', { src: 'https://unpkg.com/@webcomponents/webcomponentsjs@2.8.0/webcomponents-bundle.js' }],
    ['script', {}, `
      ;(() => {
        window.addEventListener("WebComponentsReady", function (e) {
          // imports are loaded and elements have been registered
          console.log("Components are ready");
        });
      })()
    `],
    ['link', { rel: 'stylesheet', href: '/tailwind.css' }],
 
    ['script', {}, `
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // console.log("Você está em localhost.");
} else {
  // console.log("Você não está em localhost.");

  (function(w,d,s,l,i) {
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);

    // Define os atributos do script
    j.async = true;
    j.crossOrigin = 'anonymous';
    j.src = 'https://js.sentry-cdn.com/248f36517c640f644a4030f19ae070c1.min.js';
    j.onload = () => {
      // console.log("onload");

      window.sentryOnLoad = function () {
        Sentry.init({
          dsn: "https://248f36517c640f644a4030f19ae070c1@o435772.ingest.us.sentry.io/4508770207137792",
          integrations: [
            Sentry.feedbackIntegration({
              // Additional SDK configuration goes in here, for example:
              colorScheme: "system",
              isNameRequired: true,
              isEmailRequired: true,
            }),
          ],
        });

        Sentry.lazyLoadIntegration("feedbackIntegration")
          .then((feedbackIntegration) => {
            Sentry.addIntegration(
              feedbackIntegration({
                // User Feedback configuration options
              })
            );
          })
          .catch(() => {
            // this can happen if e.g. a network error occurs,
            // in this case User Feedback will not be enabled
          });
      };

    };
    j.onerror = (err) => {
      console.log("onerror", err);
    };
  
    // Insere o script no DOM
    f.parentNode.insertBefore(j, f);

  })(window, document, 'script');

} 
    `],
    ['script', {}, `
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // console.log("Você está em localhost.");
} else {
  // console.log("Você não está em localhost.");

  (function(w,d,s,l,i) {
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);

    // Define os atributos do script
    j.async = true;
    j.crossOrigin = 'anonymous';
    j.src = 'https://cdn.lrkt-in.com/LogRocket.min.js';
    j.onload = () => {
      // console.log("onload");
      window.LogRocket && window.LogRocket.init("vuieju/project-mozgcombr");
    };
    j.onerror = (err) => {
      console.log("onerror", err);
    };

    // Insere o script no DOM
    f.parentNode.insertBefore(j, f);

  })(window, document, 'script'); 
}
    `],
    ['script', {}, `
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // console.log("Você está em localhost.");
} else {
  // console.log("Você não está em localhost.");

  ;(function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 5294163, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

}
    `],
    ['script', {}, `
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // console.log("Você está em localhost.");
} else {
  // console.log("Você não está em localhost.");


  (function(w,d,s,l,i) {
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);

    // Define os atributos do script
    j.async = true;
    j.crossOrigin = 'anonymous';
    j.src = 'https://cdn.amplitude.com/script/5bc76c5d1a252c44d2396b1b42a1d507.js';
    j.onload = () => {
      // console.log("onload");
      window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
      window.amplitude.init("5bc76c5d1a252c44d2396b1b42a1d507", {
        fetchRemoteConfig: true,
        autocapture: true,
      });
    };
    j.onerror = (err) => {
      console.log("onerror", err);
    };

    // Insere o script no DOM
    f.parentNode.insertBefore(j, f);

  })(window, document, 'script'); 

}
    `],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@mozgbrasil/web-components@1.0.42' }],
    // ['script', { type: 'module', src: 'http://192.168.1.10:5002/src/index.ts' }],
    // ['script', { src: 'http://localhost:5001/mozg-web-components.umd.js' }],
    // https://analytics.google.com/analytics/web/#/a73869264p474402691/admin/streams/table/10179988960
    [ 'script', {}, `
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // console.log("Você está em localhost.");
} else {
  // console.log("Você não está em localhost.");

  (function(w,d,s,l,i) {
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);

    // Define os atributos do script
    j.async = true;
    // j.crossOrigin = 'anonymous';
    j.src = 'https://www.googletagmanager.com/gtag/js?id=G-WCNGF2YB71';
    j.onload = () => {
      // console.log("onload");
      window.dataLayer = window.dataLayer || [];
      function gtag(){
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-WCNGF2YB71');
      gtag('config', 'G-WCNGF2YB71');
    };
    j.onerror = (err) => {
      console.log("onerror", err);
    };

    // Insere o script no DOM
    f.parentNode.insertBefore(j, f);

  })(window, document, 'script'); 

}
    `],
    
    [ 'script', {}, `
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // console.log("Você está em localhost.");
} else {
  // console.log("Você não está em localhost.");

  // https://tagmanager.google.com/#/admin/accounts/491416460/containers/2618425/install?containerDraftId=6

  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PNT4KQ');

  // https://www.google.com/adsense/new/u/0/pub-7927094983433027/sites/detail/url=mozg.com.br

   (function(w,d,s,l,i) {
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);

    // Define os atributos do script
    j.async = true;
    j.crossOrigin = 'anonymous';
    j.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7927094983433027';
    j.onload = () => {
      // console.log("onload");
 
    };
    j.onerror = (err) => {
      console.log("onerror", err);
    };

    // Insere o script no DOM
    f.parentNode.insertBefore(j, f);

  })(window, document, 'script'); 

}
    `], 
    // https://vitepress.dev/reference/site-config#example-registering-a-service-worker
    [
      'script', { id: 'register-sw' }, `
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  // console.log("Você está em localhost.");
} else {
  // console.log("Você não está em localhost.");

  ;(() => {      
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      if (registrations.length === 0) {
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
  })()

}
  `],
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
    // resolve: {
    //   alias: {
    //     '@components': '/path/to/your/components' // Atualize para o caminho correto
    //   }
    // },
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
