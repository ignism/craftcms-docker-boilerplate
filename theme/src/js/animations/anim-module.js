import { CoreModule } from '../core'

class AnimModule extends CoreModule {
  getOptionsFromAttributes(element) {
    let options = {
      trigger:
        element.getAttribute('data-anim-trigger') != null && element.getAttribute('data-anim-trigger') != ''
          ? element.getAttribute('data-anim-trigger')
          : element,
      hook:
        element.getAttribute('data-anim-hook') > 0
          ? element.getAttribute('data-anim-hook')
          : 75,
      once: 
        element.getAttribute('data-anim-once') == 'false'
          ? false
          : true,
      delay:
        element.getAttribute('data-anim-delay') > 0
          ? element.getAttribute('data-anim-delay')
          : 0,
      duration:
        element.getAttribute('data-anim-duration') > 0
          ? element.getAttribute('data-anim-duration')
          : 800,
      distance:
        element.getAttribute('data-anim-distance') > 0
          ? element.getAttribute('data-anim-distance')
          : 32,
      direction:
        element.getAttribute('data-anim-direction') != null && element.getAttribute('data-anim-direction') != ''
          ? element.getAttribute('data-anim-direction')
          : 'up'
    }

    return options
  }
}

export { AnimModule }
