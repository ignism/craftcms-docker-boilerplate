import { eventBus } from './event-bus'
import { Promise } from 'q'

class CoreModule {
  constructor() {
    this._id = 0
    this._reinit = false
    this._eventListeners = []
    this._scrollScenes = []
    this._options = {}
  }
  
  init(options = {}) {
    this._scrollScenes.forEach((scene) => {
      scene.init()
    })

    return {
      id: this._id,
      status: true,
      message: 'initialized',
      options: this._options,
      scrollScenes: this._scrollScenes,
      eventListeners: this._eventListeners
    }
  }

  destroy() {
    this._eventListeners.forEach((event) => {
      eventBus.off(event.name, event.callback)
    })

    this._scrollScenes.forEach((scene) => {
      scene.destroy()
    })

    return {
      id: this._id,
      status: true,
      message: 'destroyed',
      options: this._options,
      scrollScenes: this._scrollScenes,
      eventListeners: this._eventListeners
    }
  }

  set eventListeners (events) {
    this._eventListeners = events
  }

  set scrollScenes (scenes) {
    this._scrollScenes = scenes
  }
}

export { CoreModule }
