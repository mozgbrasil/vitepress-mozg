import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import Binance from '../../components/Binance.vue'
import ShadowComponent from '../../components/ShadowComponent.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Binance', Binance)
    app.component('ShadowComponent', ShadowComponent)
  }
}
