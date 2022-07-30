import type { IStackService } from '@domain/common/interfaces'

class StackService<Item> implements IStackService<Item> {

  private _stack: Item[]

  constructor (stack?: Item[]) {
    this._stack = stack ?? []
  }

  get isEmpty (): boolean {
    return this._stack.length === 0
  }

  public peek (): Item | undefined {
    return this._stack[this._stack.length - 1]
  }

  public clear (): void {
    this._stack = []
  }

  public push (item: Item): void {
    this._stack.push(item)
  }

  public pop (): Item | undefined {
    return this._stack.pop()
  }

}

export { StackService }
