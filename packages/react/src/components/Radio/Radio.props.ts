export interface RadioProps {

  /**
   * If `true`, the component is checked
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
   * Must be the same as label
   */
  id?: string

  /**
   * Name attribute of the `input` element.
   */
  name?: string

  /**
  * The onchange event occurs when the checked state has been changed.
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>,

  /**
   * Pass a ref to the `input` element.
   */
  ref?: React.Ref<never>

  /**
   * If `true`, the `input` element will be required.
   * @default false
   */
  required?: boolean;

  /**
   * Optional ID for testing
   */
  testID?: string,

  /**
   * The string to use as the value of the checkbox when submitting the form,
   * if the checkbox is currently toggled on
   */
  value: string
}
