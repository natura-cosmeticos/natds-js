import { Color } from '@naturacosmeticos/natds-themes'

type RippleColors = keyof Pick<Color, 'primary' | 'secondary' | 'highlight'>

export interface RippleProps {
  /**
   * The element that will have the ripple effect applied
   */
  children: React.ReactNode
  /**
   * The color of ripple
   */
  color?: RippleColors
  /**
   * If `true`, the ripple effect is disabled
   */
  disabled: boolean
  /**
   *
   */
  fullWidth: boolean
  /**
   * If `true`, the ripple exceeds the element
   */
  hideOverflow?: boolean
}
