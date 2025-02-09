<template>
  <p hidden>
    ⛔ Your browser doesn't support
    <code>shadowrootmode</code>
    attribute yet.
  </p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const host = ref(null)

onMounted(() => {
  const isShadowRootModeSupported =
    HTMLTemplateElement.prototype.hasOwnProperty('shadowRootMode')

  document
    .querySelector('p[hidden]')
    .toggleAttribute('hidden', isShadowRootModeSupported)
})
</script>
