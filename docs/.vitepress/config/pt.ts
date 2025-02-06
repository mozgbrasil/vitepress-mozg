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
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Próximo'
    },

    outline: {
      label: 'Nesta página'
    },

    lastUpdated: {
      text: 'Atualizado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Alterar Idioma',
    returnToTopLabel: 'Voltar ao Topo',
    sidebarMenuLabel: 'Menu Lateral',
    darkModeSwitchLabel: 'Tema Escuro',
    lightModeSwitchTitle: 'Mudar para Modo Claro',
    darkModeSwitchTitle: 'Mudar para Modo Escuro',
    skipToContentLabel: 'Pular para o Conteúdo'
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
      text: 'Aplicativo móvel',
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
    { text: 'Aplicativo móvel', base: '/reference/', link: 'mobile-apps' }
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
            { text: 'Firebase', link: 'firebase' },
            { text: 'Binance', link: 'binance' }
          ]
        },
        { text: 'Aplicativo móvel', link: 'mobile-apps' },
        {
          text: 'Apps',
          base: '/reference/app-',
          items: [
            { text: 'Mozg PWA', link: 'mozg-pwa' },
            { text: 'Mozg TWA', link: 'mozg-twa' },
            { text: 'Mozg Híbrido', link: 'mozg-hibrido' }
          ]
        }
      ]
    }
  ]
}

export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  pt: {
    placeholder: 'Pesquisar documentos',
    translations: {
      button: {
        buttonText: 'Pesquisar',
        buttonAriaLabel: 'Pesquisar'
      },
      modal: {
        searchBox: {
          resetButtonTitle: 'Limpar pesquisa',
          resetButtonAriaLabel: 'Limpar pesquisa',
          cancelButtonText: 'Cancelar',
          cancelButtonAriaLabel: 'Cancelar'
        },
        startScreen: {
          recentSearchesTitle: 'Histórico de Pesquisa',
          noRecentSearchesText: 'Nenhuma pesquisa recente',
          saveRecentSearchButtonTitle: 'Salvar no histórico de pesquisas',
          removeRecentSearchButtonTitle: 'Remover do histórico de pesquisas',
          favoriteSearchesTitle: 'Favoritos',
          removeFavoriteSearchButtonTitle: 'Remover dos favoritos'
        },
        errorScreen: {
          titleText: 'Não foi possível obter resultados',
          helpText: 'Verifique a sua conexão de rede'
        },
        footer: {
          selectText: 'Selecionar',
          navigateText: 'Navegar',
          closeText: 'Fechar',
          searchByText: 'Pesquisa por'
        },
        noResultsScreen: {
          noResultsText: 'Não foi possível encontrar resultados',
          suggestedQueryText: 'Você pode tentar uma nova consulta',
          reportMissingResultsText:
            'Deveriam haver resultados para essa consulta?',
          reportMissingResultsLinkText: 'Clique para enviar feedback'
        }
      }
    }
  }
}
