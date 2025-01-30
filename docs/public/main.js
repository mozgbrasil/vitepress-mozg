// @ts-nocheck

export class Program {
  constructor() {}

  execute() {
    this.mozgPwa()
    this.mozgConfettiParty()
  }

  mozgPwa() {
    const jsPath = document.querySelector('#local-search')
    // const target = document.querySelector('.VPNavBarMenu')

    console.log({ jsPath })

    if (jsPath instanceof HTMLElement) {
      jsPath.style.display = 'contents'
    } else {
      console.error('jsPath não foi encontrado.')
    }

    let el = ''

    el = document.createElement('mozg-pwa')
    el.setAttribute('data-atributo', 'valor')
    jsPath.appendChild(el)
  }

  mozgConfettiParty() {
    // return

    // const jsPath = document.querySelector('#app')
    const jsPath = document.querySelector('#VPContent')

    if (jsPath instanceof HTMLElement) {
      let element = ''

      // element = document.createElement('mozg-film-grain')
      // jsPath.appendChild(element)

      // element = document.createElement('mozg-confetti-party')
      // jsPath.appendChild(element)

      // element = document.createElement('mozg-embers')
      // jsPath.insertBefore(element, jsPath.firstChild)

      // element = document.createElement('mozg-snowy-procedural-landscape')
      // jsPath.insertBefore(element, jsPath.firstChild)

      // function isHomePage() {
      //   console.log(window.location.pathname)
      //   const homePath = '/' // Caminho relativo da página inicial
      //   return window.location.pathname === homePath
      // }

      // element = document.createElement('mozg-simple-css-waves')
      // jsPath.insertBefore(element, jsPath.firstChild)

      // if (isHomePage()) {

      // }

      // element = document.createElement('mozg-web-gl-mouse-controlled-snow')
      // jsPath.insertBefore(element, jsPath.firstChild)

      element = document.createElement('mozg-interactive-grid-effect')
      jsPath.insertBefore(element, jsPath.firstChild)

      // Verifique se o contêiner tem filhos
      // if (jsPath.firstChild) {
      //   // Insira o novo elemento antes do primeiro filho
      //   jsPath.insertBefore(element, jsPath.firstChild)
      // } else {
      //   // Se o contêiner não tiver filhos, use appendChild
      //   jsPath.appendChild(element)
      // }

      // // Clona a imagem para mover para dentro do novo elemento
      // const clonedImage = jsPath.cloneNode(true)
      // // Adiciona a imagem clonada ao novo elemento
      // element.appendChild(clonedImage)
      // // Substitui a imagem original pelo novo elemento
      // jsPath.parentNode.replaceChild(element, jsPath)
    } else {
      console.error('jsPath não foi encontrado.')
    }
  }
}

function init() {
  console.log('init')

  const jsPath = document.querySelector('#VPContent > div')
  jsPath.style.margin = 0

  const programInstance = new Program()
  programInstance.execute()
}

if (document.readyState === 'complete') {
  console.log({ readyState: document.readyState })
  init()
}

window.onload = () => {
  console.log('onload')
  init()
}

window.addEventListener('load', () => {
  console.log('load')
})

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
})

console.log('****************** URL completa:', window.location.href)
console.log('Caminho da URL:', window.location.pathname)
console.log('Parâmetros de consulta:', window.location.search)
console.log('Fragmento (âncora):', window.location.hash)
