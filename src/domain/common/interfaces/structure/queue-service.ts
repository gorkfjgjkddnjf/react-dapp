import type { IStructureService } from '@domain/common/interfaces/structure/structure-service'

interface IQueueService<Item> extends IStructureService<Item> {
  enqueue (item: Item): void
  dequeue (): Item | undefined
}

export type { IQueueService }
