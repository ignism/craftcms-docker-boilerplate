import debounce from 'lodash/debounce'
import shortid from 'shortid'
//
import { CoreModule } from './core-module'
import { CoreEventListener } from './core-event'
import { CoreScrollScene } from './core-scroll-scene'
import { config } from './config'
import { eventBus } from './event-bus'
import { scrollController } from './scroll-controller'
import throttle from 'lodash/throttle'

class Core {
  constructor() {
    this.modules = []
    this.scenes = []
  }

  init() {
    this.modules.forEach((module) => {
      let init = module.init(module.options)
      
      if (!init.status) {
        console.error(init)
      }
    })

    eventBus.$on('barba-before-enter', () => {
      this.modules.forEach((module) => {
        if (module.reinit) {
          module.destroy()
          module.init()
        }
      })

      this.scenes.forEach((scene) => {
        if (scene.reinit) {
          scene.destroy()
          scene.init()
        }
      })
    })

    window.addEventListener('resize', throttle((event) => {
      eventBus.$emit('window-resized', event)
    }, 250))
  }

  attach(module, options = {}, reinit = false) {
    let id = shortid.generate()
    module.id = id
    module.reinit = reinit
    module.options = options

    this.modules.push(module)

    return id
  }

  detach(id) {
    if (shortid.isValid(id)) {
      this.modules.forEach((module) => {
        if (module.id === id) {
          module.destroy()
        }
      })
    }
  }
}

const core = new Core()

export { core, config, eventBus, scrollController, CoreEventListener, CoreScrollScene, CoreModule }
