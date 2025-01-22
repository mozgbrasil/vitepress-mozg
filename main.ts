import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'

export class Program {
  constructor() {}

  execute() {
    this.firebase()
    this.appendPwa()
  }

  firebase() {
    // Import the functions you need from the SDKs you need
    // import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyCb3ENfGt4PxC1NALpSTm1Ht97s3X9P3_g',
      authDomain: 'mozg-project.firebaseapp.com',
      projectId: 'mozg-project',
      storageBucket: 'mozg-project.firebasestorage.app',
      messagingSenderId: '279842876766',
      appId: '1:279842876766:web:7c1641877aff36788433cf'
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)

    console.log({ app })
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
