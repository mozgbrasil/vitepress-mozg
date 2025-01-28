// https://platform.linkedin.com/badges/js/profile.js

;(function (window) {
  const CALLBACK_NAME = 'LIBadgeCallback'
  const BADGE_NAMES = '.LI-profile-badge, .LI-entity-badge'
  const TRACKING_PARAM = 'profile-badge'

  let responsesReceived = 0
  let expectedResponses = 0
  let scripts = []
  let childScripts = {}
  let badges = []

  function isCNDomain() {
    if (typeof window !== 'undefined') {
      const hostName = (window.location && window.location.hostname) || ''
      return /linkedin(-ei)?.cn$/.test(hostName)
    }
    return false
  }

  function generateUrl(isEI) {
    const domainPrefix = isEI
      ? 'https://badges.linkedin-ei'
      : 'https://badges.linkedin'
    return isCNDomain() ? `${domainPrefix}.cn/` : `${domainPrefix}.com/`
  }

  function getBadgeKeyQueryParams(badge) {
    return Array.prototype.slice
      .call(badge.attributes)
      .filter((attr) => attr.name.lastIndexOf('data-key-', 0) !== -1)
      .map(
        (attr) =>
          encodeURIComponent(attr.name.replace('data-', '').toLowerCase()) +
          '=' +
          encodeURIComponent(attr.value)
      )
  }

  function renderBadge(badge) {
    let size = badge.getAttribute('data-size')
    let locale = badge.getAttribute('data-locale')
    let type = badge.getAttribute('data-type')
    let theme = badge.getAttribute('data-theme')
    let vanity = badge.getAttribute('data-vanity')
    let version = badge.getAttribute('data-version')
    let isEI = badge.hasAttribute('data-ei')
    let entity = badge.getAttribute('data-entity')
    let isCreatePage = badge.hasAttribute('data-iscreate')
    let uid = Math.round(1000000 * Math.random())
    let baseUrl = generateUrl(isEI)
    let queryParams = [
      `locale=${encodeURIComponent(locale)}`,
      `badgetype=${encodeURIComponent(type)}`,
      `badgetheme=${encodeURIComponent(theme)}`,
      `uid=${encodeURIComponent(uid)}`,
      `version=${encodeURIComponent(version)}`
    ]

    if (version === 'v2') {
      baseUrl += 'view'
      queryParams.push(`badgesize=${encodeURIComponent(size)}`)
      queryParams.push(`entity=${encodeURIComponent(entity)}`)
      queryParams = queryParams.concat(getBadgeKeyQueryParams(badge))
    } else {
      baseUrl += 'profile'
      queryParams.push(`maxsize=${encodeURIComponent(size)}`)
      queryParams.push(`trk=${encodeURIComponent(TRACKING_PARAM)}`)
      queryParams.push(`vanityname=${encodeURIComponent(vanity)}`)
    }

    if (isCreatePage) {
      queryParams.push('fromCreate=true')
    }

    const url = `${baseUrl}?${queryParams.join('&')}`
    badge.setAttribute('data-uid', uid)

    // jsonp(url) // Faz a requisição JSONP
  }

  function responseHandler(badgeHtml, badgeUid) {
    responsesReceived++

    const defaultWidth = 330
    const defaultHeight = 300

    badges.forEach((badge) => {
      const isCreate = badge.getAttribute('data-iscreate')
      const uid = parseInt(badge.getAttribute('data-uid'), 10)
      // if (uid === badgeUid) {
      const badgeMarkup = `<body>${badgeHtml}</body>`
      const iframe = document.createElement('iframe')
      iframe.onload = function () {
        const iframeBody = iframe.contentWindow.document.body
        iframe.setAttribute(
          'height',
          (iframeBody.scrollHeight || defaultHeight) + 5
        )
        iframe.setAttribute(
          'width',
          (iframeBody.scrollWidth || defaultWidth) + 5
        )
      }
      iframe.setAttribute('frameBorder', '0')
      iframe.style.display = 'block'
      badge.appendChild(iframe)
      iframe.contentWindow.document.open()
      iframe.contentWindow.document.write(badgeMarkup)
      iframe.contentWindow.document.close()
      replaceScriptTags(badge, isCreate)
      // }
    })
    tryClean()
  }

  function replaceScriptTags(node, isCreate) {
    if (shouldReplaceNode(node, isCreate)) {
      node.parentNode.replaceChild(cloneScriptNode(node), node)
      childScripts[node.src] = true
    } else {
      Array.prototype.slice
        .call(node.childNodes)
        .forEach((child) => replaceScriptTags(child, isCreate))
    }
  }

  function shouldReplaceNode(node, isCreate) {
    return (
      isScriptNode(node) &&
      !childScripts[node.src] &&
      (!isCreate || (isCreate && !node.getAttribute('data-isartdeco')))
    )
  }

  function isScriptNode(node) {
    return node.tagName === 'SCRIPT'
  }

  function cloneScriptNode(node) {
    const script = document.createElement('script')
    Array.prototype.slice
      .call(node.attributes)
      .forEach((attr) => script.setAttribute(attr.name, attr.value))
    return script
  }

  function tryClean() {
    const done =
      (responsesReceived >= expectedResponses && expectedResponses > 0) ||
      responsesReceived >= badges.length
    if (done) {
      delete window[CALLBACK_NAME]
      scripts.forEach((script) => document.body.removeChild(script))
    }
  }

  function jsonp(url) {
    const script = document.createElement('script')
    // https://badges.linkedin.com/profile?locale=pt_BR&badgetype=VERTICAL&badgetheme=light&uid=231182&version=v1&maxsize=medium&trk=profile-badge&vanityname=mozgbrasil
    script.src = url
    script.type = 'text/javascript'
    script.nonce = 'abc123' // Adicione o nonce aqui
    scripts.push(script)
    document.body.appendChild(script)
  }

  function init() {
    badges = Array.prototype.slice.call(document.querySelectorAll(BADGE_NAMES))
    badges.forEach((badge) => {
      const rendered = badge.getAttribute('data-rendered')
      if (!rendered) {
        expectedResponses++
        badge.setAttribute('data-rendered', true)
        renderBadge(badge)
      }
    })
    window[CALLBACK_NAME] = responseHandler // Define o responseHandler como a função de callback

    // Simula o retorno do LinkedIn Badge
    simulateLinkedInResponse()
  }

  if (document.readyState === 'complete') {
    init()
  } else {
    window.addEventListener('load', init, false)
  }

  // Simula o retorno do LinkedIn Badge
  function simulateLinkedInResponse() {
    const badgeHtml = `
      <link rel="stylesheet" href="https://static.licdn.com/sc/h/2lgytu9f1z9n54epparouqzhy">
      <div class="profile-badge profile-badge--width-250 profile-badge--light" dir="ltr">
        <div class="profile-badge__header profile-badge__header--light">
          <span class="sr-only">LinkedIn</span>
          <icon class="profile-badge__header-logo-icon profile-badge__header-logo-icon--light" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 84 21" preserveaspectratio="xMinYMin meet" version="1.1" focusable="false">
              <!-- SVG content here -->
            </svg>
          </icon>
        </div>
        <div class="profile-badge__content">
          <img class="artdeco-entity-image artdeco-entity-image--circle-4 profile-badge__content-profile-image" alt="Marcio dos Santos Amorim" src="https://www.github.com/mozgbrasil.png">
          <h3 class="profile-badge__content-profile-name">
            <a class="profile-badge__content-profile-name-link profile-badge__content-profile-name-link--light" href="https://br.linkedin.com/in/mozgbrasil?trk=public-profile-badge-profile-badge-profile-name" data-tracking-control-name="public-profile-badge-profile-badge-profile-name" data-tracking-will-navigate>
              Marcio dos Santos Amorim
            </a>
          </h3>
          <h4 class="profile-badge__content-profile-headline">
            Software Engineer | Full Stack Developer | Dev Backend | Node.js, PHP, Ruby, Python, Perl | Dev Frontend | React, Angular, Ionic | DevOps
          </h4>
        </div>
        <a class="profile-badge__cta-btn profile-badge__cta-btn--light" href="https://br.linkedin.com/in/mozgbrasil?trk=public-profile-badge-profile-badge-view-profile-cta" target="_blank" data-tracking-control-name="public-profile-badge-profile-badge-view-profile-cta" data-tracking-will-navigate>
          Ver perfil
        </a>
      </div>
    `
    const badgeUid = 231182
    responseHandler(badgeHtml, badgeUid) // Chama o responseHandler com o retorno simulado
  }
})(window)
