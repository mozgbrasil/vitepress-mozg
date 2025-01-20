import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { pt } from './pt'

export default defineConfig({
  base: '/vitepress-mozg/', // Substitua com o nome do seu repositório
  ...shared,
  locales: {
    root: { label: 'Português', ...pt }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
})
