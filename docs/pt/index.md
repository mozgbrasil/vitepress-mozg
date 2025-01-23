---
layout: home

title: Mozg
titleTemplate: Sistemas e informação
description: O futuro é agora ✨

hero:
  name: Mozg
  text: Sistemas e informação
  tagline: O futuro é agora ✨
  actions:
    - theme: brand
      text: O que é Mozg?
      link: /guide/what-is-mozg
    - theme: alt
      text: Início rápido
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/mozgbrasil/vitepress-mozg
  image:
    src: /logo-large.webp
    alt: Mozg
# features:
#   - icon: 📝
#     title: Focus on Your Content
#     details: Effortlessly create beautiful documentation sites with just markdown.
#   - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><defs><linearGradient id="a" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"/><stop offset="100%" stop-color="#BD34FE"/></linearGradient><linearGradient id="b" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"/><stop offset="8.333%" stop-color="#FFDD35"/><stop offset="100%" stop-color="#FFA800"/></linearGradient></defs><path fill="url(#a)" d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/><path fill="url(#b)" d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/></svg>
#     title: Enjoy the Vite DX
#     details: Instant server start, lightning fast hot updates, and leverage Vite ecosystem plugins.
#   - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
#     title: Customize with Vue
#     details: Use Vue syntax and components directly in markdown, or build custom themes with Vue.
#   - icon: 🚀
#     title: Ship Fast Sites
#     details: Fast initial load with static HTML, fast post-load navigation with client-side routing.
---

<style>
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(
      120deg,
      #bd34fe 30%,
      #41d1ff
    );

    --vp-home-hero-image-background-image: linear-gradient(
      -45deg,
      #bd34fe 50%,
      #47caff 50%
    );
    --vp-home-hero-image-filter: blur(44px);
  }

  @media (min-width: 640px) {
    :root {
      --vp-home-hero-image-filter: blur(56px);
    }
  }

  @media (min-width: 960px) {
    :root {
      --vp-home-hero-image-filter: blur(68px);
    }
  }
</style>

<style>
  /*  Fix: "flash of unstyled content" (FOUC). */
  [class^='mozg-'] {
    visibility: hidden;
  }

  [class^='mozg-']:defined {
    visibility: visible;
  }
</style>

<!-- Authentication -->

<mozg-firebase-tools></mozg-firebase-tools>

<!-- Social Links -->

<style>
  i {
    cursor: pointer;
    font-size: 4rem; /* Ajuste o tamanho do ícone conforme necessário */
    margin: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: inline-block; /* Adiciona display: inline-block */
  }

  i:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px 5px rgba(0, 255, 255, 0.7),
      0 0 40px 10px rgba(0, 255, 255, 0.6), 0 0 60px 15px rgba(0, 255, 255, 0.5);
  }

  /* Animação de brilho */
  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 10px 5px rgba(0, 255, 255, 0.5),
        0 0 20px 10px rgba(0, 255, 255, 0.3),
        0 0 30px 15px rgba(0, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 20px 10px rgba(0, 255, 255, 1),
        0 0 40px 15px rgba(0, 255, 255, 0.8),
        0 0 60px 20px rgba(0, 255, 255, 0.6);
    }
    100% {
      box-shadow: 0 0 10px 5px rgba(0, 255, 255, 0.5),
        0 0 20px 10px rgba(0, 255, 255, 0.3),
        0 0 30px 15px rgba(0, 255, 255, 0.2);
    }
  }

  i:hover {
    transform: scale(1.2);
    animation: glowPulse 1.5s infinite alternate;
  }

  .icons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .icons-container i {
    margin-bottom: 20px;
    flex-basis: calc(25% - 20px); /* Ajusta o tamanho base dos ícones */
    flex-grow: 1; /* Permite que os ícones cresçam para preencher o espaço disponível */
  }
</style>

<div class="icons-container">
  <!-- https://fontawesome.com/icons -->
  <a href="https://wa.me/5511977072339?text=%7B%22nome%22%3A%20%22Jo%C3%A3o%22%2C%20%22mensagem%22%3A%20%22Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%22%7D" target="_blank">
    <i class="fa-brands fa-whatsapp fa-2xl"></i>
  </a>
  <a href="https://github.com/mozgbrasil" target="_blank">
    <i class="fa-brands fa-github fa-2xl"></i>
  </a>
  <a href="https://www.linkedin.com/in/mozgbrasil/" target="_blank">
    <i class="fa-brands fa-linkedin fa-2xl"></i>
  </a>
  <a href="https://web.facebook.com/mozgbrasil/" target="_blank">
    <i class="fa-brands fa-facebook fa-2xl"></i>
  </a>
  <a href="https://www.instagram.com/mozgbrasil" target="_blank">
    <i class="fa-brands fa-instagram fa-2xl"></i>
  </a>
  <a href="https://www.youtube.com/@mozgbrasil" target="_blank">
    <i class="fa-brands fa-youtube fa-2xl"></i>
  </a>
  <a href="https://x.com/mozgbrasil" target="_blank">
    <i class="fa-brands fa-twitter fa-2xl"></i>
  </a>
   <a href="https://mozgbrasil.wordpress.com/" target="_blank">
    <i class="fa-brands fa-wordpress fa-2xl"></i>
  </a>
  <a href="https://www.npmjs.com/~mozg" target="_blank">
    <i class="fa-brands fa-npm fa-2xl"></i>
  </a>
  <a href="https://gitlab.com/mozgbrasil" target="_blank">
     <i class="fa-brands fa-gitlab fa-2xl"></i>
  </a>
  <a href="https://mozg.com.br/sitemap.xml" target="_blank">
     <i class="fa-solid fa-sitemap fa-2xl"></i>
  </a>
</div>
