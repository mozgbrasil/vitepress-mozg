// @ts-nocheck

export class Program {
  constructor() {}

  execute() {
    this.appendPwa()
  }

  appendPwa() {
    // Seleciona o contêiner destino
    const target = document.querySelector('#local-search')

    if (target instanceof HTMLElement) {
      target.style.display = 'contents'
    } else {
      console.error('Elemento não é um HTMLElement ou não foi encontrado.')
    }

    // console.log({ target })

    // Verifica se o contêiner existe antes de tentar criar o elemento
    if (target) {
      // Cria o elemento <mozg-pwa>
      const el = document.createElement('mozg-pwa')
      // const el = document.querySelector('mozg-pwa')

      // console.log({ el })

      // Adiciona propriedades ou atributos, se necessário (opcional)
      el.setAttribute('data-atributo', 'valor')

      // Insere o elemento <mozg-pwa> dentro do <div id="local-search">
      target.appendChild(el)

      // console.log('<mozg-pwa> foi criado e adicionado ao #local-search')
    } else {
      console.error(
        'Não foi possível encontrar o contêiner #local-search no DOM.'
      )
    }
  }
}

window.onload = () => {
  console.log('onload')
  const programInstance = new Program()
  programInstance.execute()
}

window.addEventListener('load', () => {
  console.log('load')
})

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
})

console.log({ readyState: document.readyState })
if (document.readyState === 'complete') {
  const programInstance = new Program()
  programInstance.execute()
}
