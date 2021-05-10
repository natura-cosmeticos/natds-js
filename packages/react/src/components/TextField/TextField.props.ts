import { InputProps } from 'components/Input'

type BaseProps = InputProps & {
  /**
   * The helper text content.
   */
  helperText?: string
  /**
   * If filled, will appear above the field.
   */
  label?: string
  /**
   * If `true`, the label is displayed as required with a `*` character
   * and the `input` element is required.
   */
  required?: boolean
  /**
   * Optional ID for testing
   */
  testID?: string
}

export type TextFieldProps = BaseProps
