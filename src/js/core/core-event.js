import { eventBus } from './event-bus'

class CoreEvent {
  constructor(name, callback) {
    this.name = name
    this.callback = callback

    eventBus.$on(this.name, this.callback)
  }
}

export { CoreEvent }
