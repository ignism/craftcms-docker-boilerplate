import { CoreModule, CoreEventListener, CoreScrollScene, eventBus } from '../core'

class Header extends CoreModule {
  init(options) {
    this.element = options.element

    if (this.element) {
      let events = []
      events.push(
        new CoreEventListener('pin-header', () => {
          this.pin()
        })
      )
      events.push(
        new CoreEventListener('unpin-header', () => {
          this.unpin()
        })
      )
      super.events = events

      let scenes = []
      scenes.push(
        new CoreScrollScene({
          offset: () => {
            return 20
          },
          enter: (event) => {
            eventBus.$emit('pin-header')
          },
          leave: (event) => {
            eventBus.$emit('unpin-header')
          }}
        )
      )
      super.scrollScenes = scenes
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
