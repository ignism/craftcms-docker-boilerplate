import { scrollController } from './scroll-controller'
import ScrollMagic from 'scrollmagic'

class CoreScrollScene {
  constructor(options) {
    options = options || {}
    this.triggerElement = options.triggerElement || null

    this.offset =
      options.offset ||
      (() => {
        return 0
      })
    
      if (typeof this.offset == 'number') {
        this.offset = (() => { return options.offset })
      }
    this.triggerHook = options.triggerHook || 1
    this.enter = options.enter || (() => {})
    this.leave = options.leave || (() => {})
    this.reinit = options.reinit || false
  }

  init() {
    this.scene = new ScrollMagic.Scene({
      triggerElement: this.triggerElement,
      triggerHook: this.triggerHook,
      offset: this.offset()
    })
      .on('enter', this.enter)
      .on('leave', this.leave)

      console.log(this.scene)
    scrollController.addScene(this.scene)
  }

  destroy() {
    scrollController.removeScene(this.scene)
  }
}

export { CoreScrollScene }
