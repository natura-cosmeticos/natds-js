import React, { useContext } from 'react'
import { Icon } from '../../components/Icon'
import { SpotIconProps } from './SpotIcon.props'
import { GrowthPlanColorsContext } from '../Provider/GrowthPlanProviderColors'
import styles from './SpotIcon.styles'

/**
 * Componente SpotIcon
 *
 * Estende o componente Icon com tamanhos limitados entre medium (48px) e hugeX (128px).
 * Este componente faz parte do Growth Plan e é ideal para casos onde você precisa de
 * ícones maiores mas com controle sobre o range de tamanhos permitidos.
 *
 * As cores são automaticamente resolvidas através do GrowthPlanProviderColors e aplicadas
 * via CSS override para sobrescrever as cores padrão do Icon base.
 *
 * @param props - Propriedades do componente SpotIcon
 * @returns Elemento JSX renderizado
 *
 * @example
 * // Uso com Provider (obrigatório para cores do Growth Plan)
 * <GrowthPlanProviderColors theme={bronze}>
 *   <SpotIcon color="primary" name="spoticon-growthplan-crystal" />
 *   <SpotIcon color="primaryLight" name="spoticon-growthplan-trophy" />
 * </GrowthPlanProviderColors>
 *
 */
const SpotIcon = React.forwardRef<HTMLElement, SpotIconProps>(({
  size = 'medium',
  color,
  className = '',
  ...props
}, ref) => {
  const context = useContext(GrowthPlanColorsContext)

  // Resolve a cor hexadecimal do Growth Plan baseada no contexto
  const growthPlanColor = React.useMemo(() => {
    // Se não há cor especificada, não aplica cor customizada
    if (!color) {
      return undefined
    }

    // Se há contexto, usa a cor do tema
    if (context) {
      return context.colors[color]
    }

    return undefined
  }, [color, context])

  // Gera className customizada com CSS override
  const { spotIcon } = styles({ size, growthPlanColor })
  const combinedClassName = `${className} ${spotIcon}`.trim()

  return (
    <Icon
      ref={ref}
      size={size}
      className={combinedClassName}
      {...props}
    />
  )
})

SpotIcon.displayName = 'SpotIcon'

export default SpotIcon
