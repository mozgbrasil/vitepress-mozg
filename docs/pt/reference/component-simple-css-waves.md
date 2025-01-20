[checkmark]: https://raw.githubusercontent.com/mozgbrasil/mozgbrasil.github.io/refs/heads/main/docs/logo-mini.png 'MOZG'

![valid XHTML][checkmark]

# Simple Css Wave

<!-- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) -->

<!-- ::: tip
🍀
::: -->

## **Como usar?**

Importe via [NPM](https://www.npmjs.com/package/@mozgbrasil/web-components) ou [CDN](https://en.wikipedia.org/wiki/JSDelivr) e utilize o elemento [HTML](https://pt.wikipedia.org/wiki/HTML)

### **NPM**

::: code-group

```sh [npm]
$ npm i @mozgbrasil/web-components
```

:::

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@mozgbrasil/web-components"></script>
```

### Elemento HTML

```html
<mozg-simple-css-waves></mozg-simple-css-waves>
```

## **Veja o resultado**

<mozg-simple-css-waves></mozg-simple-css-waves>

<script client>
  console.log('client side JavaScript!')
document.querySelector('h1').addEventListener('click', () => {
  console.log('client side JavaScript!')
})

// 
</script>

<style>
mozg-core::part(custom-button) {
  background-color: red;  /* Altera o fundo da parte 'custom-button' */
  border-radius: 10px;     /* Modifica a borda */
}

mozg-core::part(custom-button) button {
  color: yellow;  /* Altera a cor do texto do botão */
}
</style>

<mozg-core></mozg-core>
