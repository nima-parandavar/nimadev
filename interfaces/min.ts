export type Variant = 'solid' | 'link' | 'soft'
export type Color = 'red' | 'blue' | 'green' | 'yellow' | 'cream' | 'purple'
export type size = 'xs' | 'sm' | 'lg' | 'xl'

// avatar
export interface Avatar {
  label?: string;
  src?: string
}


// dropdown
export interface DropdownItem {
  key: string | number;
  label: string;
  icon?: string;
  avatar?: Avatar,
  to?: string | object;
  click?: Function;
  badge?: string | number,
  slot?: string
}

export type DropdownMenu = (DropdownItem[])[]

// field
export type fieldTypes = 'text' | 'password' | 'search' | 'url' | 'email' | 'number' | 'checkbox'

export interface Field {
  name: string;
  label?: string;
  icon?: string;
  as?: fieldTypes;
  required?: boolean;
  description?: string;
  helper?: string;
  optional?: string;
  rules?: any;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}