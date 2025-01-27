---
title: Mozg
titleTemplate: O que é Mozg
description: Meu nome é Marcio, venho desenvolvendo software desde 1999, estou sempre me mantendo atualizado a fim de adotar as melhores práticas e oferecer um excelente serviço prezando por desenvolver tecnologia que agreguem valor, automação e lucratividade.
---

# O que é Mozg?

Mozg é um projeto criado em fevereiro de 2016 por [Marcio dos Santos Amorim](#sobre-marcio-dos-santos-amorim), que funciona como um laboratório para o desenvolvimento de softwares inovadores e eficientes. Seu objetivo é experimentar novas tecnologias, explorar soluções criativas e entregar ferramentas que agreguem valor aos usuários.

## Sobre Marcio dos Santos Amorim

Meu nome é Marcio dos Santos Amorim. Sou desenvolvedor de software desde 1999 e tenho uma paixão por criar soluções que promovam automação, lucratividade e inovação. Ao longo da minha carreira, busco me manter atualizado com as melhores práticas da indústria para oferecer serviços de alta qualidade e resultados que façam a diferença.

<mozg-linkedin-badges> </mozg-linkedin-badges>

<div
  class="badge-base LI-profile-badge"
  data-locale="pt_BR"
  data-size="medium"
  data-theme="light"
  data-type="VERTICAL"
  data-vanity="mozgbrasil"
  data-version="v1"
>  
</div>

<script>
// Função para verificar se o iframe está carregado
function checkIframeLoaded() {
    const iframeContainer = document.querySelector('.badge-base.LI-profile-badge iframe');
    if (iframeContainer) {
        try {
            // Tenta acessar o conteúdo do iframe
            const iframeContent = iframeContainer.contentWindow || iframeContainer.contentDocument.document || iframeContainer.contentDocument;
            if (iframeContent.document) {
                // Se o documento do iframe estiver disponível, ele está carregado
                iframeContainer.width = '100%';
                iframeContainer.style.border = 'none';

                // Injeta o estilo CSS no iframe para remover a largura do .profile-badge--width-250
                const style = iframeContent.document.createElement('style');
                style.innerHTML = `
                    .profile-badge--width-250 {
                        width: auto !important;
                    }
                `;
                iframeContent.document.head.appendChild(style);


                console.log('Iframe carregado e estilos aplicados.');
                clearInterval(intervalId); // Para o intervalo quando o iframe estiver carregado
            }
        } catch (e) {
            // Se ocorrer um erro, o iframe ainda não está carregado
            console.log('Iframe ainda não carregado.');
        }
    }
}

// Define um intervalo para verificar o carregamento do iframe a cada 1 segundo
const intervalId = setInterval(checkIframeLoaded, 1000);
</script>
