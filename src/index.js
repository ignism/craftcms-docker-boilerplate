import './css/style.css'

import 'zenscroll'

import { core } from './js/core'
import { header, nav, footer, barbaManager } from './js/layout'
import { images } from './js/components'

;(function() {
  core.attach(header, { element: document.querySelector('.header-main') })
  core.attach(nav, { element: document.querySelector('.nav-main') })
  // core.attach(footer, true)
  core.attach(barbaManager)

  core.attach(images, {}, true)
  core.init()
})()
