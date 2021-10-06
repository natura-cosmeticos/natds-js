export interface CheckboxProps {
  /**
   * If `true`, the component is checked
   * @default false
   */
  checked?: boolean

  /**
   * If `true`, the Checkbox will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * The id of the Checkbox element. Must be the same as label
   */
  id?: string

  /**
   * If `true`, indicates that the value of the checkbox is indeterminate
   * rather than true or false
   * @default false
   */
  indeterminate?: boolean

  /**
   * Specify the text that will appear next to component
   */
  label?: string
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
