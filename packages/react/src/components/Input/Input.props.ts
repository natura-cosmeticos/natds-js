import { Size } from '@naturacosmeticos/natds-themes'

export type InputSize = keyof Pick<Size, 'medium' | 'mediumX'>
export type InputType = 'text' | 'password' | 'multiline'

export interface InputProps {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean,
  /**
   * The id of the `input` element, shared with label.
   */
  id: string
  /**
   * Minimum number of rows to display when input type option is set to multiline.
   * @default 3
   */
  minRows?: number,
  /**
   * The onBlur attribute fires the moment that the element loses focus.
   */
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  /**
   * The onChange event occurs when the value of an element has been changed.
   */
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  /**
   * The onFocus event occurs when an element gets focus and is the opposite of the onblur event.
   */
  onFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string,
  /**
   * If `true`, the user cannot change the value of the field
   * @default false
   */
  readOnly?: boolean,
  /**
   * If `true`, the user can expand the text field multiline area
   * @default false
   */
  isResizable?: boolean,
  /**
   * The height of the input
   * @default mediumX
   */
  size?: InputSize,
  /**
   * The type of the input
   * @default text
   */
  type?: InputType,
  /**
   * The value of the `input` element
   */
  value?: string,
}
