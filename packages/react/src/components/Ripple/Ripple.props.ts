import { Color } from '@naturacosmeticos/natds-themes'

type RippleColors = keyof Pick<Color, 'primary' | 'highlight'>

export interface RippleProps {
  /**
   * The animation duration
   */
  animationDuration?: number
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
  disabled?: boolean
  /**
   *
   */
  fullWidth?: boolean
  /**
   * If `true`, the ripple exceeds the element
   */
  hideOverflow?: boolean
  /**
   * If `true`, align the ripple in the center of element
   */
  isCentered?: boolean
  /**
   *
   */
  showHover?: boolean
  /**
   *
   */
  focus?: boolean
}
