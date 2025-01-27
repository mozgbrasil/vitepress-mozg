---
title: Mozg
titleTemplate: Firebase
description: Sistemas e informação
---

[checkmark]: https://mozg.com.br/logo-mini.png 'MOZG'

![valid XHTML][checkmark]

# Firebase

<!-- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) -->

<!-- ::: tip
🍀
::: -->

## **Como usar?**

Importe via [NPM](https://www.npmjs.com/package/@mozgbrasil/web-components) ou [CDN](https://en.wikipedia.org/wiki/JSDelivr) e utilize o elemento [HTML](https://pt.wikipedia.org/wiki/HTML)

### **NPM**

::: code-group

```sh [npm]
npm i @mozgbrasil/web-components
```

:::

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@mozgbrasil/web-components"></script>
```

### Elemento HTML

```html
<mozg-firebase-tools></mozg-firebase-tools>
```

## **Veja o resultado**

<script setup>
// import Login from '../../components/Login.vue'


// import myHtmlTemplate from './login.html';

// console.log(myHtmlTemplate)

// // Adicionar o conteúdo HTML no DOM
// const container = document.createElement('div');
// container.innerHTML = myHtmlTemplate;
// document.body.appendChild(container);

</script>

<!-- <Login /> -->

<mozg-firebase-tools></mozg-firebase-tools>

<template id="person-template">
<div class="bg-gray-100 flex items-center justify-center min-h-screen">
<div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
<h1 class="text-2xl font-bold text-center mb-6">Login</h1>

<form id="loginForm" class="space-y-4">
<div>
<label for="email" class="block text-sm font-medium text-gray-700"
>Email</label
>
<input
type="email"
id="email"
class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
required
/>
</div>
<div>
<label
for="password"
class="block text-sm font-medium text-gray-700"
>Password</label
>
<input
type="password"
id="password"
class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
required
/>
</div>
<button
id="login"
type="submit"
class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
>
Login
</button>
</form>

<div class="my-4 text-center text-sm text-gray-500">or</div>

<!-- Google Login Button -->
<div>
  <button
    id="google"
    class="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 mr-2"
      viewBox="0 0 48 48">
      <path
        fill="#EA4335"
        d="M24 9.5c3.1 0 5.9 1.1 8.1 3.3l6.1-6.1C34.9 3.1 29.7 1 24 1 14.9 1 7.2 6.9 3.9 14.6l7.3 5.6C13.2 13.1 18.2 9.5 24 9.5z" />
      <path
        fill="#34A853"
        d="M24 46c6 0 11.2-2.1 15.2-5.7l-7.3-5.7c-2.2 1.5-5 2.3-7.9 2.3-5.7 0-10.5-3.7-12.2-8.7l-7.3 5.7C7.5 41.2 15.4 46 24 46z" />
      <path
        fill="#4A90E2"
        d="M43.6 20H24v8.3h11.1c-1.1 2.9-3.3 5.2-6.1 6.7l7.3 5.7c4.5-4.2 7.3-10.3 7.3-17.7 0-1.2-.1-2.3-.3-3.3z" />
      <path
        fill="#FBBC05"
        d="M3.9 14.6C2.7 17.4 2 20.6 2 24s.7 6.6 1.9 9.4l7.3-5.7c-.6-1.7-1-3.6-1-5.7s.4-3.9 1-5.7L3.9 14.6z" />
    </svg>
    Login with Google
  </button>
</div>

<div class="mt-6 text-center">
<p class="text-sm text-gray-500">
Don't have an account?
<a
href="#"
id="toggleRegister"
class="text-blue-500 hover:underline"
>Register here</a
>
</p>
</div>
</div>
</div>
</template>

<script>
 // document.querySelector('html').addEventListener('click', (e) => {
// console.log(e.composed)
// console.log(e.composedPath())
// })
</script>
