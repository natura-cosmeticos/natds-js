import { Size } from '@naturacosmeticos/natds-themes'
import { IconProps } from '../../components/Icon/Icon.props'
import { GrowthPlanColor } from '../growthPlanColors'

/**
 * Tamanhos permitidos para o SpotIcon - limitado do medium ao hugeX
 */
export type SpotIconSize = keyof Pick<Size, 'medium' | 'mediumX' | 'large' | 'largeX' | 'largeXX' | 'largeXXX' | 'huge' | 'hugeX'>

export type SpotIconName = 'outlined-default-mockup' | 'spoticon-growthplan-crystal' | 'spoticon-growthplan-laurelwreath' | 'spoticon-growthplan-flowertulip' | 'spoticon-growthplan-graphic' | 'spoticon-growthplan-trophyaward' | 'spoticon-growthplan-diamondgem' | 'spoticon-growthplan-trophy' | 'spoticon-growthplan-trophysapphire' | 'spoticon-growthplan-trophydiamond'

export type SpotIconColor = keyof GrowthPlanColor;
/**
 * Props do componente SpotIcon
 * Estende todas as propriedades do Icon, mas restringe os tamanhos disponíveis
 */
export interface SpotIconProps extends Omit<IconProps, 'size' | 'brand' | 'name' | 'color'> {
  /**
   * O tamanho do ícone
   * Limitado aos tamanhos entre medium (48px) e hugeX (128px)
   * @default "medium"
   */
  size?: SpotIconSize;
  name: SpotIconName;
  /**
   * Cor semântica do tema quando usado com GrowthPlanProviderColors
   * Valores aceitos: main, mainLight, mainDark, etc.
   */
  color?: SpotIconColor;
}
