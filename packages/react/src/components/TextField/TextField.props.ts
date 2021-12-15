import { InputProps } from '../Input'

type BaseProps = InputProps & {
  /**
   * Specify an optional className to be added to your TextField
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string
}

export type TextFieldProps = BaseProps
