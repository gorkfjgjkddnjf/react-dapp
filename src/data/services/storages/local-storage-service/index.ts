import { StorageService } from '@data/services/storages/storage-service'

import type { LocalStorageValues } from '@data/enums'
import type { IStorage } from '@data/interfaces'

class LocalStorageService
  extends StorageService<LocalStorageValues>
  implements IStorage<LocalStorageValues> {

  constructor () {
    super(localStorage)
  }

}

export default new LocalStorageService()
