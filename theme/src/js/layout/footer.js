import { CoreModule } from '../core/core-module'

class Footer extends CoreModule {
  init() {
    this.toggles = document.querySelectorAll('.toggle-footer')

    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', this.onToggle)
    })

    return super.init()
  }

  destroy() {
    super.destroy()

    this.toggles.forEach(toggle => {
      toggle.removeEventListener('click', this.onToggle)
    })
  }

  onToggle() {

  }
}

export const footer = new Footer()
