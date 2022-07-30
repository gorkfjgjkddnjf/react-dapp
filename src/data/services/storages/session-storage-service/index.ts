import { StorageService } from '@data/services/storages/storage-service'

import type { SessionStorageValues } from '@data/enums'
import type { IStorage } from '@data/interfaces'

class SessionStorageService
  extends StorageService<SessionStorageValues>
  implements IStorage<SessionStorageValues> {

  constructor () {
    super(sessionStorage)
  }

}

export default new SessionStorageService()
