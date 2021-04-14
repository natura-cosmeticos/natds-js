import { IconName } from '@naturacosmeticos/natds-icons'
import { Color, Size } from '@naturacosmeticos/natds-themes'

export type IconButtonColors = keyof Pick<Color, 'highEmphasis' | 'primary'>
export type IconButtonSize = keyof Pick<Size, 'semi' | 'medium' | 'semiX'>

export interface IconButtonProps {
  /**
   * Use to define a text that explains the expected action
   */
  ariaLabel?: string,
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
  * The Icon name to be used
   * @default "filled-default-mockup"
   */
  iconName?: IconName

  /**
   * The click handler
   */
  onClick: () => void

  /**
   * The size of icon button
   * @default semi
   */
  size?: IconButtonSize
}
