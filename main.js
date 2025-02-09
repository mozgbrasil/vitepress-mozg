class MyApp {
  constructor() {
    console.log('MyApp inicializado!')
  }

  executeMethod(methodName) {
    if (methodName === 'Calc') {
      this.Calc()
    } else {
      console.error(`Método ${methodName} não encontrado.`)
    }
  }

  Calc() {
    console.log('Executando Calc!')
  }
}

// Expor a classe globalmente
window.MyApp = MyApp

//

const isShadowRootModeSupported =
  HTMLTemplateElement.prototype.hasOwnProperty('shadowRootMode')

// alert(isShadowRootModeSupported)

//

function getIn(status) {
  // console.log({ name: 'getIn ', status, url: window.location.href })

  new window.MyApp().executeMethod('Calc')

  // const isShadowRootModeSupported =
  //   HTMLTemplateElement.prototype.hasOwnProperty('shadowRootMode')

  // document
  //   .querySelector('p[hidden]')
  //   .toggleAttribute('hidden', isShadowRootModeSupported)
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

//

function autoIterateToggle(param) {
  console.log('autoIterateToggle', param)
  const autoIterateToggle = document
    .querySelector('mozg-popover-popup > mozg-binance')
    .shadowRoot.querySelector('#autoIterateToggle')
  autoIterateToggle.click()
}
