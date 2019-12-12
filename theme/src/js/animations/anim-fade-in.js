import anime from 'animejs'
import { CoreScrollScene } from '../core'
import { AnimModule } from './anim-module'

class AnimFadeIn extends AnimModule {
  init(options) {
    this.target = options.target || '.anim-fade-in'
    
    this.initScenes()

    return super.init()
  }

  initScenes() {
    const elements = document.querySelectorAll(this.target)
    const scenes = []

    elements.forEach((element) => {
      const options = this.getOptionsFromAttributes(element)

      if (!element.classList.contains('anim-complete')) {
        element.style.opacity = 0
      }

      scenes.push(
        new CoreScrollScene({
          triggerElement: options.trigger,
          triggerHook: options.hook / 100,
          enter: (event) => {
            anime({
              targets: element,
              opacity: [0, 1],
              easing: 'easeOutCirc',
              duration: options.duration,
              delay: options.delay,
              complete: () => {
                element.classList.add('anim-complete')
              }
            })
          },
          leave: (event) => {
            anime({
              targets: element,
              opacity: [1, 0],
              easing: 'easeOutCirc',
              duration: options.duration,
              delay: options.delay,
              complete: () => {
                element.classList.add('anim-complete')
              }
            })
          },
          once: options.once
        })
      )
    })

    super.scrollScenes = scenes
  }

  destroy() {
    return super.destroy()
  }
}

export const animFadeIn = new AnimFadeIn()
