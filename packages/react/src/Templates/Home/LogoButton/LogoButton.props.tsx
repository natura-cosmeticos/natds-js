import { Color, Size } from '@naturacosmeticos/natds-themes'
import { BrandProps } from '../../GlobalTypes'

type LogoColors = 'neutral' | keyof Pick<Color, 'primary' | 'secondary' | 'highlight' | 'surface'>
type LogoSizes = keyof Omit<Size, 'none' | 'micro' | 'tiny' | 'small' | 'standard' | 'semi' | 'semiX'>
type LogoModels = 'a' | 'b'

export interface LogoButtonProps {
    isActive: boolean
    brand?: BrandProps
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

  onClick?: () => void
}
