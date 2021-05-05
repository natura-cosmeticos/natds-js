import { Size } from '@naturacosmeticos/natds-themes'

export type InputSize = keyof Pick<Size, 'medium' | 'mediumX'>
export type InputType = 'text' | 'password' | 'multiline'

export interface InputProps {
  disabled?: boolean,
  minRows?: number,
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  onFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  placeholder?: string,
  readOnly?: boolean,
  isResizable?: boolean,
  size?: InputSize,
  testId?: string,
  type?: InputType,
  value?: string,
}
