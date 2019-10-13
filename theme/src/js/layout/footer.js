import { CoreModule, CoreScrollScene, eventBus } from '../core'

class Footer extends CoreModule {
  init() {
    this.toggles = document.querySelectorAll('.toggle-footer')

    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', this.onToggle)
    })

    let scenes = []
    scenes.push(
      new CoreScrollScene({
        offset: 16,
        triggerElement: '.footer-main',
        enter: (event) => {
          eventBus.$emit('scrolled-to-footer')
        },
        leave: (event) => {
          eventBus.$emit('scrolled-from-footer')
        },
        reinit: true
      })
    )
    super.scrollScenes = scenes

    console.log(scenes)

    return super.init()
  }

  destroy() {
    this.toggles.forEach((toggle) => {
      toggle.removeEventListener('click', this.onToggle)
    })

    return super.destroy()
  }

  onToggle() {}
}

export const footer = new Footer()
