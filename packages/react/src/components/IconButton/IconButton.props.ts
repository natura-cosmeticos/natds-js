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
   * Specify an optional className to be added to your IconButton
   */
  className?: string

  /**
   * If `true`, the icon button will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * Element to be rendered inside the IconButton.
   */
  IconComponent: React.ReactElement;

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
