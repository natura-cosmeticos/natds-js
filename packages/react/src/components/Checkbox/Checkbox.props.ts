type CheckboxVariant = 'standard' | 'indeterminate'

export interface CheckboxProps {

  /**
   * If `true`, the component is checked
   * @default false
   */
  checked: boolean
  /**
   * If `true`, the Checkbox will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * The Checkbox variant
   * @default standard
   */
  variant?: CheckboxVariant

  /**
   * The id of the Checkbox element
   */
  id: string

  /**
   * The onChange event occurs when the element is checked.
   *
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>,
}
