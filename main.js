function mozgVitepressMargin() {
  const jsPath = document.querySelector('#VPContent > div')
  jsPath.style.margin = 0
}

function mozgPwa() {
  const jsPath = document.querySelector('#local-search')
  // const target = document.querySelector('.VPNavBarMenu')

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

// Objeto JavaScript com os elementos
const elements = [
  'mozg-interactive-grid-effect',
  'mozg-simple-css-waves',
  'mozg-snowy-procedural-landscape',
  'mozg-web-gl-mouse-controlled-snow',
  'mozg-embers',
  'mozg-film-grain',
  'mozg-confetti-party',
  'mozg-filter-image-gradient-backgrounds',
  'mozg-confetti',
  'mozg-animate'
]

// Função para obter o valor de um cookie
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

// Função para definir o valor de um cookie
function setCookie(name, value, days) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = `${name}=${value};${expires};path=/`
}

// Função para exibir o próximo elemento
function displayNextElement() {
  let currentIndex = getCookie('currentIndex')

  if (currentIndex === null) {
    currentIndex = 0
  } else {
    currentIndex = parseInt(currentIndex, 10)
    if (isNaN(currentIndex)) {
      currentIndex = 0
    } else {
      currentIndex = (currentIndex + 1) % elements.length
    }
  }

  // Exibir o elemento atual
  const elementTagName = elements[currentIndex]
  const element = document.createElement(elementTagName)

  // Armazenar o índice atual no cookie
  setCookie('currentIndex', currentIndex, 365)

  // append next element

  const jsPath = document.querySelector('.VPContent')

  if (jsPath instanceof HTMLElement) {
    // // Clona a imagem para mover para dentro do novo elemento
    // const clonedImage = jsPath.cloneNode(true)
    // // Adiciona a imagem clonada ao novo elemento
    // element.appendChild(clonedImage)
    // // Substitui a imagem original pelo novo elemento
    // jsPath.parentNode.replaceChild(element, jsPath)
  } else {
    console.error('jsPath não foi encontrado.')
  }

  // Verifique se o contêiner tem filhos
  if (jsPath.firstChild) {
    // Insira o novo elemento antes do primeiro filho
    jsPath.insertBefore(element, jsPath.firstChild)
  } else {
    // Se o contêiner não tiver filhos, use appendChild
    jsPath.appendChild(element)
  }

  //
}

function isHomePage() {
  console.log(window.location.pathname)
  const homePath = '/' // Caminho relativo da página inicial
  return window.location.pathname === homePath
}

function getIn(status) {
  console.log({ name: '🟢 js', status, url: window.location.href })

  displayNextElement()
  mozgVitepressMargin()
  mozgPwa()
}

if (document.readyState === 'complete') {
  getIn('complete')
}

window.onload = () => {
  getIn('window.onload')
}

window.addEventListener('load', () => {
  getIn('addEventListener load')
})

document.addEventListener('DOMContentLoaded', () => {
  getIn('DOMContentLoaded')
})
