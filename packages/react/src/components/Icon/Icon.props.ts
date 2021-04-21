import { IconName } from '@naturacosmeticos/natds-icons'
import { Color, Size } from '@naturacosmeticos/natds-themes'

type IconSize = keyof Size
type IconColor = keyof Color
export interface IconProps {
  /**
   * Removes the entire element from the accessibility tree
   * when the Icon is purely decorative
   * @default true
   */
  ariaHidden?: boolean

  /**
   * Use to define a string that labels the current element
   * if your icon is not decorative
   */
  ariaLabel?: string,

  /**
  * The Icon color
   * @default "primary"
   */
  color?: IconColor;

  /**
  * The Icon name
   * @default "filled-default-mockup"
   */
  name: IconName;

  /**
   * @default 'img'
   */
  role?: 'img' | 'button',

  /**
  * The Icon size
   * @default "standard"
   */
  size?: IconSize;

  /**
   * Optional ID for testing
   */
  testID?: string,
}
