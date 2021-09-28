import { Color } from '@naturacosmeticos/natds-themes'

export type BadgeColors = keyof Pick<Color, 'primary' | 'secondary' | 'success' | 'alert'>

export interface BadgePulse {
  /**
   * If `true` will hide the badge in the accessibility tree.
   */
  ariaHidden?: boolean
  /**
   * Specify an accessible description to your Badge.
   */
  ariaLabel?: string
  /**
   * Specify an optional className to be added to your Badge
   */
  className?: string
  /**
   * Specify the color of the Badge, from a list of available colors.
   * If no color is specified, the 'alert' color will be applied as default.
   * @default 'alert'
   */
  color?: BadgeColors
  /**
   *
   */
  variant: 'pulse',
  /**
   * Optional ID for testing
   */
  testID?: string
}

export interface BadgeDot {
  /**
   * If `true` will hide the badge in the accessibility tree.
   */
  ariaHidden?: boolean
  /**
   * Specify an accessible description to your Badge.
   */
  ariaLabel?: string
  /**
   * Specify an optional className to be added to your Badge
   */
  className?: string
  /**
   * Specify the color of the Badge, from a list of available colors.
   * If no color is specified, the 'alert' color will be applied as default.
   * @default 'alert'
   */
  color?: BadgeColors
  /**
   *
   */
  variant: 'dot'
  /**
   * Optional ID for testing
   */
  testID?: string
}

export interface BadgeStandard {
  /**
   * If `true` will hide the badge in the accessibility tree.
   */
  ariaHidden?: boolean
  /**
   * Specify an accessible description to your Badge.
   */
  ariaLabel?: string
  /**
   * Specify an optional className to be added to your Badge
   */
  className?: string
  /**
   * Specify the color of the Badge, from a list of available colors.
   * If no color is specified, the 'alert' color will be applied as default.
   * @default 'alert'
   */
  color?: BadgeColors
  /**
   * Specify the limit of notification and when is equal or less than value,
   * will display a `+` sign next to the value. Only available for `standard` variant
   */
  limit?: number
  /**
   * Specify the number that will be display inside the Badge.
   * Only available for `standard` variant
   */
  value: number
  /**
   * Specify the variant of Badge you want to create.
   * Check each definition [here](https://ds.natura.design/28db352be/p/920945-badge/t/52006b)
   */
  variant: 'standard'
  /**
   * Optional ID for testing
   */
  testID?: string
}

export type BadgeProps = BadgePulse | BadgeDot | BadgeStandard
