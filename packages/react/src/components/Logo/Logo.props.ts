import { Color, Size } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'

type LogoColors = 'neutral' | keyof Pick<Color, 'primary' | 'secondary' | 'highlight' | 'surface'>
type LogoSizes = keyof Omit<Size, 'none' | 'micro' | 'tiny' | 'small' | 'standard' | 'semi' | 'semiX'>
type LogoModels = 'a' | 'b'
type LogoLanguages = 'default' |'pt' | 'es'
type Mode = 'light' | 'dark'

export interface LogoProps {
  /**
   * The Logo description
   */
  arialabel?: string

  /**
   * Override or extend the styles applied to the component
   */
  className?: string

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
   * The Logo model.
   * @default a
   */

  /**
   * Prop languages to set language when there is
   */
  languages?: LogoLanguages;

  /**
   * Prop brand to set fixed brand for component logo
   */
  brand?: BrandTypes

  /**
   * Prop mode to control light and dark mode when choose fixed mark
   */
  mode?: Mode

  /**
   * The Logo size
   * @default veryhuge
   */
  size?: LogoSizes
}
