import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import Layout from '../../components/Layout.vue'
import Binance from '../../components/Binance.vue'
import ShadowComponent from '../../components/ShadowComponent.vue'

export default {
  // ...DefaultTheme,
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app }) {
    app.component('Binance', Binance)
    app.component('ShadowComponent', ShadowComponent)
  }
}
