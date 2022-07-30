interface IStructureService<Item> {
  isEmpty: boolean
  peek (): Item | undefined
  clear (): void
}

export type { IStructureService }
