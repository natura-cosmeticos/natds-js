import { IconName } from '@naturacosmeticos/natds-icons'
import { Color, Size } from '@naturacosmeticos/natds-themes'

export type IconButtonColors = keyof Pick<Color, 'highEmphasis' | 'primary' | 'surface'>
export type IconButtonSize = keyof Pick<Size, 'semi' | 'medium' | 'semiX'>

export interface IconButtonProps {
  /**
   * Use to define a text that explains the expected action
   */
  ariaLabel: string,
  /**
   * Set a background-style
   * @default none
   */
  backgroundStyle?: 'none' | 'float' | 'overlay'

  /**
   * The icon color
   * @default highEmphasis
   */
  color?: IconButtonColors

  /**
   * If `true`, the icon button will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Set the icon to be rendered.
   * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
   * @default outlined-default-mockup
   */
  iconName: IconName

  /**
   * The click handler
   */
  onClick: () => void

  /**
   * The icon button size
   * @default semi
   */
  size?: IconButtonSize

  /**
   * Optional ID for testing
   */
  testID?: string;
}
