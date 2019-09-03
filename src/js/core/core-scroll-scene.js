import { scrollController } from './scroll-controller'
import ScrollMagic from 'scrollmagic'

class CoreScrollScene {
  constructor(offset = () => { return 0 }, enter = () => {}, leave = () => {}, reinit = false) {
    this.offset = offset
    this.enter = enter
    this.leave = leave
    this.reinit = reinit
  }

  init() {
    this.scene = new ScrollMagic.Scene({
      offset: this.offset()
    })
      .on('enter', this.enter)
      .on('leave', this.leave)

    scrollController.addScene(this.scene)
  }

  destroy() {
    scrollController.removeScene(this.scene)
  }
}

export { CoreScrollScene }
