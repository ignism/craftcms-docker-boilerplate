import { CoreModule } from '../core/core-module'
import { CoreEvent } from '../core/core-event'

class Header extends CoreModule {
  init(options) {
    this.element = options.element

    if (this.element) {
      this.events.push(
        new CoreEvent('scrolled-from-top', () => {
          this.pin()
        })
      )

      this.events.push(
        new CoreEvent('scrolled-to-top', () => {
          this.unpin()
        })
      )
    } else {
      return { id: this.id, status: false, message: 'no .header-main element' }
    }

    return super.init()
  }

  pin() {
    this.element.classList.add('pinned')
  }

  unpin() {
    this.element.classList.remove('pinned')
  }
}

export const header = new Header()
