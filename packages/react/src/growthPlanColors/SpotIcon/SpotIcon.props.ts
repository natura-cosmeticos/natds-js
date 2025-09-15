import { Size } from '@naturacosmeticos/natds-themes'
import { IconProps } from '../../components/Icon/Icon.props'

/**
 * Tamanhos permitidos para o SpotIcon - limitado do medium ao hugeX
 */
export type SpotIconSize = keyof Pick<Size, 'medium' | 'mediumX' | 'large' | 'largeX' | 'largeXX' | 'largeXXX' | 'huge' | 'hugeX'>

export type SpotIconName = 'outlined-default-mockup' | 'spoticon-growthplan-crystal' | 'spoticon-growthplan-laurelwreath' | 'spoticon-growthplan-flowertulip' | 'spoticon-growthplan-graphic' | 'spoticon-growthplan-trophyaward' | 'spoticon-growthplan-diamondgem' | 'spoticon-growthplan-trophy' | 'spoticon-growthplan-trophysapphire' | 'spoticon-growthplan-trophydiamond'

/**
 * Props do componente SpotIcon
 * Estende todas as propriedades do Icon, mas restringe os tamanhos disponíveis
 */
export interface SpotIconProps extends Omit<IconProps, 'size' | 'brand' | 'name'> {
  /**
   * O tamanho do ícone
   * Limitado aos tamanhos entre medium (48px) e hugeX (128px)
   * @default "medium"
   */
  size?: SpotIconSize;
  name: SpotIconName;
  /**
   * Cor personalizada do ícone
   * Quando fornecida, sobrepõe a cor do tema definida pela prop 'color'
   * Aceita qualquer valor CSS válido (hex, rgb, rgba, named colors, etc.)
   */
  customColor?: string;
}
