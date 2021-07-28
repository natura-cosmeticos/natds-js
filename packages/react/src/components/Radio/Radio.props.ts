export interface RadioProps {

  /**
   * If `true`, the Radio is checked
   * @default false
   */
  checked?: boolean

  /**
   * If `true`, the Radio will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * The id of the Radio element.
   * If you are using the 'labelText' attribute, this value it will automatically pass to it
   * Otherwise, remember to provide the same value for your own label
   */
  id: string

  /**
   * Label that appears to the right of the component
   */
  labelText?: string

  /**
   * Name attribute of the Radio element.
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
   * Pass a ref to the Radio element.
   */
  ref?: React.Ref<never>

  /**
   * If `true`, the Radio will be required.
   * @default false
   */
  required?: boolean;

  /**
   * Optional ID for testing
   */
  testID?: string,

  /**
   * The string to use as the value of the radio when submitting the form,
   * if the radio is currently toggled on
   */
  value: string
}
