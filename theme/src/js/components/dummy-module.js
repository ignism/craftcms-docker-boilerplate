import { CoreModule, CoreScrollScene } from '../core'

class DummyModule extends CoreModule {
  init() {
    let scenes = []
    // console.log(this.scenes)

    scenes.push(
      new CoreScrollScene(
        () => {
          return 20
        },
        (event) => {
          console.log('dummy: scrolled-from-top')
        },
        (event) => {
          console.log('dummy: scrolled-to-top')
        },
        false
      )
    )
    super.scrollScenes = scenes

    return super.init()
  }

  destroy() {
    return super.destroy()
  }
}

export const dummyModule = new DummyModule()
