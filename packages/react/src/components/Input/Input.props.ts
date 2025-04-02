import { Size } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'

export type InputSize = keyof Pick<Size, 'medium' | 'mediumX'>
export type InputType = 'text' | 'password' | 'multiline'
export type Feedback = 'success' | 'error'
export type InputAccessibilityProps = {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-required'?: boolean;
  'aria-invalid'?: boolean;
  'aria-disabled'?: boolean;
  'aria-autocomplete'?: 'inline' | 'list' | 'both' | 'none';
  'aria-activedescendant'?: string;
  tabIndex?: number;
};

export interface BaseProps {

  accessibility?: InputAccessibilityProps;
  /**
   * Specify an optional className to be added to your Input
   */
  className?: string
  /**
   * Specify an optional className to be added to your Input
   */
  brand?: BrandTypes

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
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,

  /**
   * The onChange event occurs when the value of an element has been changed.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,

  /**
   * The onFocus event occurs when an element gets focus and is the opposite of the onblur event.
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>

  /**
   * The onKeyDown event occurs when an element press downkeyboard.
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>

  /**
   * The onKeyUp event occurs when an element press upkeyboard.
   */
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>

  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string,

  /**
   * If `true`, the label is displayed as required with a `*` character
   * and the `input` element is required.
   * @default false
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
  /**
   * The Icon Leading of the `input` element
   */
  iconLeading?: React.ReactElement
}

export type InputActionIcon = BaseProps & ({
  /**
   * If `icon`, will display an iconButton inside the input, on the left
   */
  action: 'icon'

  /**
   * Element to be rendered inside the IconButton.
   */
  IconComponent: React.ReactElement;

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
   * If `image`, will display an image inside the input, on the left
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
