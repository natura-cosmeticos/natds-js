import { Size } from '@naturacosmeticos/natds-themes'

type LogoColors = 'primary' | 'secondary' | 'highlight' | 'surface' | 'neutral'
type LogoSizes = keyof Omit<Size, 'none' | 'micro' | 'small' | 'standard' | 'semi' | 'semix'>
type LogoVariants = 'aesop' | 'natura' | 'avon' | 'thebodyshop'
type LogoModels = 'primary' | 'secondary'

export interface LogoProps {
  /**
   *
   * @default neutral
   */
  color?: LogoColors;

  /**
   *
   * @default a
   */
  model?: LogoModels;

  /**
   *
   * @default veryhuge
   */
  size?: LogoSizes

  /**
   *
   * @default Natura&Co
   */
  brand: LogoVariants

}
