export interface RadioButtonProps {

  /**
   * If `true`, the component is checked
   * @default false
   */
  checked?: boolean

  /**
   * If `true`, the RadioButton will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * The id of the RadioButton element. Must be the same as label
   */
  id: string

  /**
  * The onchange event occurs when the checked state has been changed.
  */
  onChange: React.ChangeEventHandler<HTMLInputElement>,

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
