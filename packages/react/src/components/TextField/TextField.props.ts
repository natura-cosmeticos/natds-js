import { IconName } from '@naturacosmeticos/natds-icons'
import { InputProps } from 'components/Input'

export type TextFieldFeedback = 'success' | 'error'

type BaseProps = InputProps & {
  /**
   * The type of feedback to the user
   */
  feedback?: TextFieldFeedback
  /**
   * The helper text content.
   */
  helperText?: string
  /**
   * If `filled`, will appear above the field
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

export type TextFieldActionIcon = BaseProps & ({
  /**
   * If `icon`, will display an Icon Button to the right of TextField
   */
  action: 'icon'
  /**
   * Set the icon to be rendered.
   * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
   * @default outlined-default-mockup
   */
  iconName: IconName
  /**
   * Use to define a text that explains the expected action
   */
  ariaLabel: string
  /**
   * Click handler
   */
  onClick: () => void
})

export type TextFieldActionImage = BaseProps & ({
  /**
   * If `image`, will display an image to the right of TextField
   */
  action: 'image'
  /**
   * Provides alternative information for an image if a user for some reason cannot view it
   */
  alt: string
  /**
   * The path for the image
   */
  src: string
})

export type TextFieldProps = BaseProps
  & { action?: never }
  | TextFieldActionIcon
  | TextFieldActionImage
