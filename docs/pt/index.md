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

<!-- Google Tag Manager (noscript) -->

<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-PNT4KQ"
    height="0"
    width="0"
    style="display: none; visibility: hidden"></iframe>
</noscript>

<!-- End Google Tag Manager (noscript) -->

<!-- Mozg Resources -->

<style>
  mozg-google-sign-in {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>

<mozg-google-sign-in></mozg-google-sign-in>

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
  <a
    href="https://wa.me/5511977072339?text=%7B%22nome%22%3A%20%22Jo%C3%A3o%22%2C%20%22mensagem%22%3A%20%22Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%22%7D"
    target="_blank">
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
