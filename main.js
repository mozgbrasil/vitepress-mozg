function getIn(status) {
  console.log({ name: '🟢 js', status, url: window.location.href })
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
