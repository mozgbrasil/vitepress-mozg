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
    --vp-button-brand-border: #ccc;
    --vp-button-alt-border: #ccc;
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

  /*  */
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

  mozg-macosx-dock {
    padding-bottom: 10px;
  }
</style>

<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-PNT4KQ"
    height="0"
    width="0"
    style="display: none; visibility: hidden"
  ></iframe>
</noscript>

<ShadowComponent />

<mozg-service-worker></mozg-service-worker>
<mozg-web-worker></mozg-web-worker>
<mozg-web-share></mozg-web-share>
<mozg-monitor-connectivity></mozg-monitor-connectivity>
<mozg-change-favicon></mozg-change-favicon>

<mozg-google-sign-in></mozg-google-sign-in>
<mozg-macosx-dock></mozg-macosx-dock>
<mozg-my-vitepress></mozg-my-vitepress>

<ClientOnly>
</ClientOnly>

<mozg-squircle></mozg-squircle>
