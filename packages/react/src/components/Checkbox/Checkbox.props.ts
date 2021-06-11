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
   * The id of the Checkbox element
   */
  id: string

  /**
   * The onChange event occurs when the element is checked.
   *
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>,

  /**
   * The string to use as the value of the checkbox when submitting the form,
   * if the checkbox is currently toggled on
   */
  value: string

  /**
   * If `true`, indicates that the value of the checkbox is indeterminate
   * rather than true or false
   * @default false
   */
  indeterminate?: boolean
}
