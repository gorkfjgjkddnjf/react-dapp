import { ExceptionService } from '@domain/common/services'
import { ClassValidator } from '@domain/common/utils'

import { InternalCode } from '@domain/common/enums'

import type { IEntity } from '@domain/common/interfaces'

abstract class Entity<Identifier extends string | number> implements IEntity<Identifier> {

  private readonly _id: Identifier

  protected constructor (id: Identifier) {
    this._id = id
  }

  get id (): Identifier {
    return this._id
  }

  protected async validate (): Promise<void> {
    const details = await ClassValidator.validate(this)

    if (details) {
      throw ExceptionService.new({
        status: {
          code: InternalCode.VALIDATION_ERROR,
          message: `${this.constructor.name} entity validation error`
        },
        data: details
      })
    }
  }

}

export { Entity }
