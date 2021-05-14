import { InputProps } from 'components/Input'

type BaseProps = InputProps & {
  /**
   * Optional ID for testing
   */
  testID?: string
}

export type TextFieldProps = BaseProps
