import { IconName } from '@naturacosmeticos/natds-icons'
import { Size } from '@naturacosmeticos/natds-themes'

export type InputSize = keyof Pick<Size, 'medium' | 'mediumX'>
export type InputType = 'text' | 'password' | 'multiline'
export type Feedback = 'success' | 'error'

export interface BaseProps {
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean,
  /**
   * The type of feedback to the user
   */
  feedback?: Feedback
  /**
   * The id of the `input` element, shared with label.
   */
  id: string
  /**
   * The helper text content.
   */
  helperText?: string
  /**
   * If filled, will appear above the field.
   */
  label?: string
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
   * If `true`, the label is displayed as required with a `*` character
   * and the `input` element is required.
   */
  required?: boolean
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

export type InputActionIcon = BaseProps & ({
  /**
   * If `icon`, will display an Icon Button to the right of Input
   */
  action: 'icon'
  /**
   * Set the icon to be rendered.
   * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
   * @default outlined-default-mockup
   */
  iconName: IconName
  /**
   * Use to define a text that explains the expected action
   */
  ariaLabel: string
  /**
   * Click handler
   */
  onClick: () => void
})

export type InputActionImage = BaseProps & ({
  /**
   * If `image`, will display an image to the right of Input
   */
  action: 'image'
  /**
   * Provides alternative information for an image if a user for some reason cannot view it
   */
  alt: string
  /**
   * The path for the image
   */
  src: string
})

export type InputProps = BaseProps & { action?: never }
  | InputActionIcon
  | InputActionImage
