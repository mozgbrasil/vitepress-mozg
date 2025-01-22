import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')

const pkg = { version: '1.0.0' }

export const pt = defineConfig({
  lang: 'pt-BR',
  description: 'O futuro é agora ✨',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern:
        'https://github.com/mozgbrasil/vitepress-mozg/edit/main/docs/:path',
      text: 'Edite esta página no GitHub'
    },

    footer: {
      message: 'Lançado sob a licença MIT.',
      copyright: 'Copyright © 2016-present 🍀'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guia',
      link: '/guide/what-is-mozg',
      activeMatch: '/guide/'
    },
    {
      text: 'Web Components',
      link: '/reference/web-components',
      activeMatch: '/reference/'
    },
    {
      text: 'Mobile Apps',
      link: '/reference/mobile-apps',
      activeMatch: '/reference/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/mozgbrasil/vitepress-mozg/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/mozgbrasil/vitepress-mozg/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introdução',
      collapsed: false,
      items: [
        { text: 'O que é Mozg?', link: 'what-is-mozg' },
        { text: 'Experimente', link: 'getting-started' }
      ]
    },
    { text: 'Web Components', base: '/reference/', link: 'web-components' },
    { text: 'Mobile Apps', base: '/reference/', link: 'mobile-apps' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Referência',
      items: [
        { text: 'Web Components', link: 'web-components' },
        {
          text: 'Componentes',
          base: '/reference/component-',
          items: [
            { text: 'Simple Css Waves', link: 'simple-css-waves' },
            { text: 'Binance Charts', link: 'binance-charts' }
          ]
        },
        { text: 'Mobile Apps', link: 'mobile-apps' },
        {
          text: 'Apps',
          base: '/reference/app-',
          items: [
            { text: 'Fizzy', link: 'fizzy' },
            { text: 'Fizzy', link: 'fizzy' }
          ]
        }
      ]
    }
  ]
}
