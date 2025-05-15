import { BrandTypes } from '../../brandTypes/brandTypes'

export interface RadioButtonProps {

  /**
   * Specifies a description to your radio.
   * Use it in cases where a text label is not visible on the screen.
   */
  ariaLabel?: string
  /**
   * If `true`, the RadioButton is checked
   * @default false
   */
  checked?: boolean

  /**
   * Specify an optional className to be added to your Badge
   */
  className?: string
  /**
   * Specify an optional Brand to be added to your Badge
   */
  brand?: BrandTypes

  /**
   * If `true`, the RadioButton will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * The id of the RadioButton element.
   * If you are using the 'labelText' attribute, this value it will automatically pass to it
   * Otherwise, remember to provide the same value for your own label
   */
  id: string

  /**
   * Label that appears to the right of the component
   */
  label?: string

  /**
   * Name attribute of the RadioButton element.
   */
  name?: string

  /**
  * The onBlur event occurs the element loses focus.
  */
  onBlur?: React.ChangeEventHandler<HTMLInputElement>

  /**
  * The onChange event occurs when the checked state has been changed.
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>

  /**
  * The onFocus event occurs the element gets focus.
  */
  onFocus?: React.ChangeEventHandler<HTMLInputElement>

  /**
   * If `true`, the RadioButton will be required.
   * @default false
   */
  required?: boolean;

  /**
   * Optional ID for testing
   */
  testID?: string,

  /**
   * The string to use as the value of the RadioButton when submitting the form,
   * if the RadioButton is currently toggled on
   */
  value: string
}
