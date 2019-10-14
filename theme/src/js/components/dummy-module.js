import { CoreModule, CoreScrollScene, CoreEventListener, eventBus } from '../core'

class DummyModule extends CoreModule {
  init() {
    const scenes = []
    const events = []

    scenes.push(
      new CoreScrollScene({
        offset: () => {
          return 1
        },
        triggerElement: null,
        triggerHook: 0,
        enter: (event) => {
          console.log('dummy enter')
          eventBus.$emit('dummy-trigger', { message: 'test' })
        },
        leave: (event) => {
          console.log('dummy leave')
        }
      })
    )
    super.scrollScenes = scenes

    events.push(
      new CoreEventListener(
        'dummy-trigger',
        (event) => {
          console.log("DummyModule -> init -> event", event)
        }
      )
    )
    super.eventListeners = events

    return super.init()
  }

  destroy() {
    return super.destroy()
  }
}

export const dummyModule = new DummyModule()
