// @ts-nocheck

export class Program {
  constructor() {}

  execute() {
    this.appendPwa()
  }

  appendPwa() {
    // Seleciona o contêiner destino
    const target = document.querySelector('#local-search')
    // const target = document.querySelector('.VPNavBarMenu')

    if (target instanceof HTMLElement) {
      target.style.display = 'contents'
    } else {
      console.error('Elemento não é um HTMLElement ou não foi encontrado.')
    }

    // console.log({ target })

    let el = ''

    el = document.createElement('mozg-pwa')
    el.setAttribute('data-atributo', 'valor')
    target.appendChild(el)

    // el = document.createElement('mozg-google-sign-in')
    // target.appendChild(el)
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
