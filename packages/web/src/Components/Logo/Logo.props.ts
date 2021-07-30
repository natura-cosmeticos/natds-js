import { ISizes } from '@naturacosmeticos/natds-styles'
import { Color } from '@naturacosmeticos/natds-themes'

type LogoColors = 'neutral' | keyof Pick<Color, 'primary' | 'secondary' | 'highlight' | 'surface'>
type LogoSizes = keyof Omit<ISizes, 'none' | 'micro' | 'tiny' | 'small' | 'standard' | 'semi' | 'semiX'>
type LogoModels = 'a' | 'b'

export interface ILogoProps {
  /**
   * The Logo description
   */
  arialLabel?: string

  /**
  * The Logo color
  * @default neutral
  */
  color?: LogoColors;

  /**
   * The Logo model.
   * @default a
   */
  model?: LogoModels;

  /**
   * The Logo size
   * @default veryhuge
   */
  size?: LogoSizes
}
