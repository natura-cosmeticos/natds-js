import { Size } from '@naturacosmeticos/natds-themes'

export type InputSize = keyof Pick<Size, 'medium' | 'mediumX'>
export type InputType = 'text' | 'password' | 'multiline'

export interface InputProps {
  disabled?: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
  readOnly?: boolean,
  size?: InputSize,
  type: InputType
  value?: string,
}
