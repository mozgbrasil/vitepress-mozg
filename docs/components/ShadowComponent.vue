<template>
  <div ref="host">host</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const host = ref(null)

onMounted(() => {
  const shadowRoot = host.value.attachShadow({ mode: 'open' })

  ;(function () {
    const template = document.createElement('template')
    template.innerHTML = `<span>I'm in the shadow DOM</span>`

    shadowRoot.appendChild(template.content.cloneNode(true))
  })()
  ;(function () {
    // const template = document.createElement('mozg-google-sign-in')
    // shadowRoot.appendChild(template)
  })()
})
</script>
