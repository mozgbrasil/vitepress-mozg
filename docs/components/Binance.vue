<template>
  <!-- Precisa aplicar suporte do CDN nesse local -->
  <ion-button expand="block" @click="openModal">
    Entrar no Charts Binance
  </ion-button>
  <ion-modal :is-open="isModalOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title>&nbsp;</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div ref="modalContent"></div>
      <!-- <mozg-binance></mozg-binance> -->
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isModalOpen = ref(false)
const modalContent = ref(null)

const openModal = () => {
  isModalOpen.value = true
  insertBinanceElement()
}

const closeModal = () => {
  isModalOpen.value = false
}

const insertBinanceElement = () => {
  console.log('insertBinanceElement', modalContent)
  if (modalContent.value) {
    // insert
    console.log('insertBinanceElement', modalContent.value)
    modalContent.value.innerHTML = ''
    const binanceElement = document.createElement('mozg-binance')
    console.log({ binanceElement })
    modalContent.value.appendChild(binanceElement)

    // select
    setTimeout(() => {
      // Selecionar o host do Shadow DOM
      const shadowHost = document.querySelector('mozg-binance')

      // Acessar o Shadow Root
      const shadowRoot = shadowHost.shadowRoot

      // Selecionar um elemento dentro do Shadow DOM
      const elementoDentroDoShadowDOM =
        shadowRoot.getElementById('autoIterateToggle')

      // evento
      elementoDentroDoShadowDOM.click()

      // Fazer algo com o elemento selecionado
      console.log({ shadowHost, shadowRoot, elementoDentroDoShadowDOM })
    }, 1000)
  }
}

onMounted(() => {
  // Certifique-se de que o elemento de conteúdo está disponível
  if (modalContent.value) {
    // Adicione qualquer lógica de inicialização aqui, se necessário
  }

  ;(() => {
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js'
    script.type = 'module'

    script.onload = () => {}
    script.onerror = () => {}

    document.head.appendChild(script)
  })()
  ;(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js'
    script.type = 'nomodule'

    script.onload = () => {}
    script.onerror = () => {}

    document.head.appendChild(script)
  })()
})
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css');

ion-modal {
  --width: 100vw;
  --height: 100vh;
}
</style>
