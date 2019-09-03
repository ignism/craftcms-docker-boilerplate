import objectFitImages from 'object-fit-images'
import { CoreModule } from '../core/core-module';

class Images extends CoreModule {
  init() {
    objectFitImages()

    return super.init()
  }
}

export const images = new Images()