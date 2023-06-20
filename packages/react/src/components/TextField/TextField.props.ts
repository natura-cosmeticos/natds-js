import { BrandTypes } from '../../brandTypes/brandTypes'
import { InputProps } from '../Input'

type BaseProps = InputProps & {
  /**
   * Specify an optional className to be added to your TextField
   */
  className?: string
  /**
   * Specify an optional className to be added to your TextField
   */
  brand?: BrandTypes

  /**
   * Optional ID for testing
   */
  testID?: string
}

export type TextFieldProps = BaseProps
