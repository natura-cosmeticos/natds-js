import { IconName } from '@naturacosmeticos/natds-icons'
import { Color, Size } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'

export type IconSize = keyof Size
export type IconColor = keyof Color
export interface IconProps {
  /**
   * Removes the entire element from the accessibility tree
   * when the Icon is purely decorative
   * @default true
   */
  ariaHidden?: boolean

  brand?: BrandTypes

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
   * Override or extend the styles applied to the component
   */
  className?: string

  /**
   * Set the icon to be rendered.
   * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
   * @default outlined-default-mockup
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
