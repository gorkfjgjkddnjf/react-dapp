import type { IQueueService } from '@domain/common/interfaces'

class QueueService<Item> implements IQueueService<Item> {

  private _startIndex: number

  private _endIndex: number

  private _queue: Map<number, Item>

  constructor (queue?: Item[]) {
    this._startIndex = 0
    this._endIndex = 0
    this._queue = new Map<number, Item>()

    if (queue !== undefined) {
      queue.forEach((item) => {
        this.enqueue(item)
      })
    }
  }

  get isEmpty (): boolean {
    return this._queue.size === 0
  }

  public peek (): Item | undefined {
    return this._queue.get(this._startIndex)
  }

  public clear (): void {
    this._queue.clear()
    this._startIndex = 0
    this._endIndex = 0
  }

  public enqueue (item: Item): void {
    this._queue.set(this._endIndex, item)
    this._endIndex += 1
  }

  public dequeue (): Item | undefined {
    if (this._startIndex >= this._endIndex) return undefined

    const item = this._queue.get(this._startIndex)

    this._queue.delete(this._startIndex)
    this._startIndex += 1

    return item
  }

}

export { QueueService }
