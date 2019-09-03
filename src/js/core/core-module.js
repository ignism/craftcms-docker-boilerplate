import { eventBus } from './event-bus'
import { Promise } from 'q'

class CoreModule {
  constructor() {
    this.id = 0
    this.reinit = false
    this.events = []
    this.options = {}
  }

  init(options = {}) {
    return { id: this.id, status: true, message: 'initialized' }
  }

  destroy() {
    this.events.forEach((event) => {
      eventBus.off(event.name, event.callback)
    })

    return { id: this.id, status: true,  message: 'destroyed events' }
  }
}

export { CoreModule }
