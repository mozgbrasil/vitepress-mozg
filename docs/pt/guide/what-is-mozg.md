---
title: Mozg
titleTemplate: O que é Mozg
description: Meu nome é Marcio, venho desenvolvendo software desde 1999, estou sempre me mantendo atualizado a fim de adotar as melhores práticas e oferecer um excelente serviço prezando por desenvolver tecnologia que agreguem valor, automação e lucratividade.
---

# O que é Mozg?

Se trata de um projeto criado em Fevereiro de 2016 por <a href="https://mozg.com.br/jekyll/curriculum.pdf">Marcio dos Santos Amorim</a>

<style>
  .container-grid {
    /* background-color:red; */
    display: grid; /* Define o container como um grid */
    grid-template-columns: repeat(
      auto-fit,
      minmax(150px, 1fr)
    ); /* Configura colunas responsivas */
    gap: 16px; /* Espaçamento entre os elementos */
    padding: 16px; /* Espaçamento interno do container */
  }  

  .item-grid {
    background-color: #f0f0f0; /* Cor de fundo dos itens */
    border: 1px solid #ddd; /* Borda opcional */
    padding: 16px; /* Espaçamento interno dos itens */
    border-radius: 8px; /* Bordas arredondadas */
    display: flex; /* Define Flexbox no item */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    text-align: center; /* Alinhamento do texto */
  }

  .item-grid iframe {
    max-width: 100%; /* Limita a largura do iframe para não ultrapassar o contêiner */
    /* height: auto; Ajusta a altura proporcionalmente */
    /* display: block; Remove qualquer espaçamento extra ao redor do iframe */
  }
</style>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/mozgbrasil.png',
    name: 'Marcio',
    title: '@mozgbrasil',
    links: [
      { icon: 'github', link: 'https://github.com/mozgbrasil' },
      { icon: 'twitter', link: 'https://twitter.com/mozgbrasil' },
       { icon: 'linkedin', link: 'https://br.linkedin.com/in/mozgbrasil?trk=profile-badge' },
    ]
  },
 
]
</script>

<div class="container-grid">
  <div class="item-grid">
    <VPTeamMembers size="small" :members="members" />
  </div>
  <div class="item-grid">
    <div
      class="badge-base LI-profile-badge"
      data-locale="pt_BR"
      data-size="medium"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="mozgbrasil"
      data-version="v1"
    >
     &nbsp;
    </div>
  </div>
</div>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  
// Função para carregar o script do LinkedIn
function loadLinkedInBadge() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://platform.linkedin.com/badges/js/profile.js';
  script.async = true;
  script.defer = true;
  document.head.appendChild(script); // Adiciona o script ao <head>
}

// Chama a função para carregar o script
loadLinkedInBadge();

});
</script>
