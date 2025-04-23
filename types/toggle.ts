export interface ToggleItem {
  key: string | number,
  value: string,
  icon?: string,
  active?: any,
  click: () => void
}

export type ToggleItemGroup = Array<ToggleItem>