<style scoped>
:popover-open {
  width: 100%;
  padding: 0 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

::backdrop {
  backdrop-filter: blur(3px);
}

.button {
  width: 200px;
  border: none;
  box-shadow: none;
  position: relative;
  /* overflow: hidden; */
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
  animation-name: animation2;
  animation-duration: 1.3s;
  animation-delay: 3s;
  animation-iteration-count: 8;
}
.button::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: green;
}
.button::after {
  width: 70%;
  height: 100%;
  content: '';
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 0;
  right: 110%;
  transform: skew(-30deg) translateX(0px);
  animation-name: animation;
  animation-duration: 1.3s;
  animation-delay: 3s;
  animation-iteration-count: 8;
}

.button span {
  position: relative;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
}

@keyframes animation {
  0% {
    transform: skew(-30deg) translateX(0px);
  }

  100% {
    transform: skew(-30deg) translateX(400px);
  }
}

@keyframes animation2 {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(1);
  }
}

/*  */

svg {
  position: absolute;
  top: -4000px;
  left: -4000px;
}

#gooey-button {
  padding: 1rem;
  font-size: 2rem;
  border: none;
  color: #0c1016;
  filter: url('#gooey');
  position: relative;
  background-color: #00ff80;
}
#gooey-button:focus {
  outline: none;
}
#gooey-button .bubbles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
#gooey-button .bubbles .bubble {
  background-color: #00ff80;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: -1;
}
#gooey-button .bubbles .bubble:nth-child(1) {
  left: 94px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-1 3.02s infinite;
  animation: move-1 3.02s infinite;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
#gooey-button .bubbles .bubble:nth-child(2) {
  left: 26px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-2 3.04s infinite;
  animation: move-2 3.04s infinite;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
#gooey-button .bubbles .bubble:nth-child(3) {
  left: 93px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-3 3.06s infinite;
  animation: move-3 3.06s infinite;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
#gooey-button .bubbles .bubble:nth-child(4) {
  left: 90px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-4 3.08s infinite;
  animation: move-4 3.08s infinite;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
#gooey-button .bubbles .bubble:nth-child(5) {
  left: 64px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-5 3.1s infinite;
  animation: move-5 3.1s infinite;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
#gooey-button .bubbles .bubble:nth-child(6) {
  left: 57px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-6 3.12s infinite;
  animation: move-6 3.12s infinite;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}
#gooey-button .bubbles .bubble:nth-child(7) {
  left: 66px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-7 3.14s infinite;
  animation: move-7 3.14s infinite;
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s;
}
#gooey-button .bubbles .bubble:nth-child(8) {
  left: 83px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-8 3.16s infinite;
  animation: move-8 3.16s infinite;
  -webkit-animation-delay: 1.6s;
  animation-delay: 1.6s;
}
#gooey-button .bubbles .bubble:nth-child(9) {
  left: 75px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-9 3.18s infinite;
  animation: move-9 3.18s infinite;
  -webkit-animation-delay: 1.8s;
  animation-delay: 1.8s;
}
#gooey-button .bubbles .bubble:nth-child(10) {
  left: 74px;
  width: 25px;
  height: 25px;
  -webkit-animation: move-10 3.2s infinite;
  animation: move-10 3.2s infinite;
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

@-webkit-keyframes move-1 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -104px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}

@keyframes move-1 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -104px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-2 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -92px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-2 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -92px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-3 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -71px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-3 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -71px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-4 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -127px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-4 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -127px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-5 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -72px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-5 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -72px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-6 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -113px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-6 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -113px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-7 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -61px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-7 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -61px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-8 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -69px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-8 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -69px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-9 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -81px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-9 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -81px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@-webkit-keyframes move-10 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -109px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
@keyframes move-10 {
  0% {
    transform: translate(0, 0);
  }
  99% {
    transform: translate(0, -109px);
  }
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
}
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="gooey">
        <!-- in="sourceGraphic" -->
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="highContrastGraphic" />
        <feComposite
          in="SourceGraphic"
          in2="highContrastGraphic"
          operator="atop" />
      </filter>
    </defs>
  </svg>

  <button
    id="gooey-button"
    class="button"
    popovertarget="mypopover"
    popovertargetaction="show">
    <span>Clique aqui</span>
    <span class="bubbles">
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
      <span class="bubble"></span>
    </span>
  </button>

  <div id="mypopover" popover>
    <mozg-binance></mozg-binance>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  // document.addEventListener('DOMContentLoaded', function () {
  const popover = document.getElementById('mypopover')

  popover.addEventListener('beforetoggle', function (event) {
    if (event.newState === 'open') {
      console.log('Popover está prestes a ser aberto')
    } else if (event.newState === 'closed') {
      console.log('Popover está prestes a ser fechado')
    }
  })

  popover.addEventListener('toggle', function (event) {
    if (event.newState === 'open') {
      console.log('Popover foi aberto')

      const autoIterateToggle = document
        .querySelector('#mypopover > mozg-binance')
        .shadowRoot.querySelector('#autoIterateToggle')

      autoIterateToggle.click()
    } else if (event.newState === 'closed') {
      console.log('Popover foi fechado')
    }
  })
})
// })
</script>
