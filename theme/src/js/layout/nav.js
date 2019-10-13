import { eventBus } from '../core'
import { CoreModule } from '../core/core-module'
import { CoreEventListener } from '../core/core-event'

class Nav extends CoreModule {
  init(options) {
    this.element = options.element
    this.addEventListeners()

    this.toggles = document.querySelectorAll('.toggle-menu')
    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', this.onToggle)
    })

    this.closers = document.querySelectorAll('.nav-menu-item')
    this.closers.forEach((closer) => {
      closer.addEventListener('click', this.onClose)
    })

    return super.init()
  }

  destroy() {
    super.destroy()

    this.toggles.forEach((toggle) => {
      toggle.removeEventListener('click', this.onToggle)
    })

    this.closers.forEach((closer) => {
      closer.removeEventListener('click', this.onClose)
    })
  }

  onToggle(event) {
    eventBus.$emit('toggle-menu', event)
  }

  onClose(event) {
    eventBus.$emit('close-menu', event)
  }

  addEventListeners() {
    let events = []
    
    events.push(
      new CoreEventListener('toggle-menu', () => {
        this.toggleMenu()
      })
    )

    
    events.push(
      new CoreEventListener('close-menu', () => {
        this.closeMenu()
      })
    )

    
    events.push(
      new CoreEventListener('window-resized', () => {
        if (window.innerWidth >= 1024) {
          this.closeMenu()
        }
      })
    )

    super.events = events
  }

  closeMenu() {
    if (this.element.classList.contains('animating')) {
      return
    }

    if (this.element.classList.contains('active')) {
      this.element.classList.remove('active')
      this.element.classList.add('animating')
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    }
  }

  toggleMenu() {
    if (this.element.classList.contains('animating')) {
      return
    }

    if (this.element.classList.contains('active')) {
      this.element.classList.remove('active')
      this.element.classList.add('animating')
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    } else {
      this.element.classList.add('active')
      this.element.classList.add('animating')
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    }
  }
}

export const nav = new Nav()
