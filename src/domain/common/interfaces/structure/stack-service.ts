import type { IStructureService } from '@domain/common/interfaces/structure/structure-service'

interface IStackService<Item> extends IStructureService<Item> {
  push (item: Item): void
  pop (): Item | undefined
}

export type { IStackService }
