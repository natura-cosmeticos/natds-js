import { Color, Size } from '@naturacosmeticos/natds-themes'

type LogoColors = 'neutral' | keyof Pick<Color, 'primary' | 'secondary' | 'highlight' | 'surface'>
type LogoSizes = keyof Omit<Size, 'none' | 'micro' | 'tiny' | 'small' | 'standard' | 'semi' | 'semiX' >
type LogoModels = 'primary' | 'secondary'

export interface LogoProps {
  /**
   * The Logo color
   * @default neutral
   */
  color?: LogoColors;

  /**
   * The Logo model.
   * Only available for Natura and The Body Shop theme
   * @default primary
   */
  model?: LogoModels;

  /**
   * The Logo size
   * @default veryhuge
   */
  size?: LogoSizes
}
