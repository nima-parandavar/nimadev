export interface Item {
  key: string | number,
  slot?: string,
  icon?: string,
  avatar?: string,
  label?: string,
  disabled?: boolean,
  postfix?: string,
  click?: Function
}

export interface Group {
  label?: string,
  items: Item[]
}

export type Items = Array<Group>