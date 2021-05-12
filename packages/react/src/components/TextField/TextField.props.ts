import { InputProps } from 'components/Input'

type BaseProps = InputProps & {
  /**
   * The helper text content.
   */
  helperText?: string
  /**
   * Optional ID for testing
   */
  testID?: string
}

export type TextFieldProps = BaseProps
