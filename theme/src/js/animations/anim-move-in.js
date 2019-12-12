import anime from 'animejs'
import { CoreScrollScene, CoreEventListener } from '../core'
import { AnimModule } from './anim-module'

class AnimMoveIn extends AnimModule {
  init(options) {
    this.target = options.target ? options.target : '.anim-move-in'

    this.initScenes()

    this.initEvents()

    return super.init()
  }

  initEvents() {
    let events = []
    events.push(
      new CoreEventListener(
        'anim-reinit',
        (event) => {
          this.destroy()
          this.initScenes()
          this.initEvents()
          super.init()
        }
      )
    )
    super.eventListeners = events
  }

  initScenes() {
    let elements = document.querySelectorAll(this.target)
    let scenes = []

    elements.forEach((element) => {
      let options = this.getOptionsFromAttributes(element)

      if (!element.classList.contains('anim-complete')) {
        element.style.opacity = 0
      }

      scenes.push(
        new CoreScrollScene({
          triggerElement: options.trigger,
          triggerHook: options.hook / 100,
          enter: (event) => {
            if (!element.classList.contains('anim-complete')) {
              if (options.direction === 'up' || options.direction === 'down') {
                anime({
                  targets: element,
                  translateY: [options.distance * (options.direction === 'up' ? 1 : -1), 0],
                  opacity: [0, 1],
                  easing: 'easeOutCirc',
                  duration: options.duration,
                  delay: options.delay,
                  complete: () => {
                    element.classList.add('anim-complete')
                  }
                })
              } else {
                anime({
                  targets: element,
                  translateX: [distance * (direction === 'left' ? 1 : -1), 0],
                  opacity: [0, 1],
                  easing: 'easeOutCirc',
                  duration: duration,
                  delay: delay,
                  complete: () => {
                    element.classList.add('anim-complete')
                  }
                })
              }
            }
          },
          once: options.once
        })
      )
    })

    super.scrollScenes = scenes
  }
}

export const animMoveIn = new AnimMoveIn()
