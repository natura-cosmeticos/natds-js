import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { SpotIconProps } from './SpotIcon.props'

type SpotIconStyleProps = Pick<SpotIconProps, 'size'> & {
  /**
   * Cor hexadecimal do Growth Plan vinda do Provider
   */
  growthPlanColor?: string;
}

/**
 * Estilos do SpotIcon
 *
 * Este arquivo aplica cores do Growth Plan através de CSS override,
 * sobrescrevendo as cores padrão do componente Icon base.
 *
 * A especificidade alta (&&) garante que as cores do Growth Plan
 * sejam aplicadas corretamente.
 */
const styles = createUseStyles((theme: Theme) => ({
  spotIcon: {
    // Alta especificidade para sobrescrever Icon base
    '&&': {
      color: ({ growthPlanColor }: SpotIconStyleProps) => growthPlanColor || 'inherit',
      fontFamily: 'natds-icons',
      fontSize: ({ size }: SpotIconStyleProps) => size && theme.size[size],
      pointerEvents: 'none',
      userSelect: 'none'
    }
  }
}))

export default styles
