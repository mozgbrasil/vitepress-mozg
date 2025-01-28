import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import Binance from '../../components/Binance.vue' // Caminho relativo ao arquivo .vitepress/theme

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Binance', Binance) // Registra o componente globalmente
  }
}
