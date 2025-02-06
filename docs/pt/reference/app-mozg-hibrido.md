---
title: Mozg
titleTemplate: Mozg Híbrido
description: Sistemas e informação
---

[checkmark]: https://mozg.com.br/logo-mini.png 'MOZG'

![valid XHTML][checkmark]

# Mozg Híbrido

## O que é um Aplicativo Híbrido?

Um **aplicativo híbrido** combina tecnologias web com funcionalidades nativas para oferecer uma experiência multiplataforma. Ele é desenvolvido usando **HTML, CSS e JavaScript**, mas pode ser instalado em dispositivos móveis como um app nativo.

No caso do nosso aplicativo, utilizamos **Angular** para a estrutura e lógica do app, **Ionic** para a interface responsiva e otimizada para mobile, e **Capacitor** para acessar recursos nativos do dispositivo, como câmera, GPS e notificações.

Essa abordagem garante um desenvolvimento ágil, menor custo de manutenção e compatibilidade com **Android e iOS**, proporcionando uma experiência fluida e moderna para os usuários.

🚀 A combinação de **Ionic, Angular e Capacitor** permite criar aplicativos potentes e flexíveis, unindo o melhor do web e do mobile!

## **Sobre o aplicativo**

<style>
.video-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 320px; /* Ajuste para móviles */
  aspect-ratio: 9 / 16;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}

.video-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  z-index: 2;
}

.video-iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  background: black;
  z-index: 1;
}
</style>

<div class="video-container">
  <div class="video-wrapper"  >
  <iframe class="video-iframe" src="https://www.youtube.com/embed/OSTmbnGMKj8?autoplay=1&mute=1&controls=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

## **Onde encontrar?**

https://play.google.com/store/apps/details?id=com.mozg.android.fizzy&hl=pt_BR
