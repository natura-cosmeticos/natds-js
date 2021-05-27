import { Size } from '@naturacosmeticos/natds-themes'

type LogoColors = 'primary' | 'secondary' | 'highlight' | 'surface' | 'neutral'
type LogoSizes = keyof Omit<Size, 'none' | 'micro' | 'small' | 'standard' | 'semi' | 'semix'>
type LogoModels = 'primary' | 'secondary'

export interface LogoProps {
  /**
   * The logo color
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
