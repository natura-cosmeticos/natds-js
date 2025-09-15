import React from 'react'
import { Icon } from '../../components/Icon'
import { SpotIconProps } from './SpotIcon.props'
import styles from './SpotIcon.styles'

/**
 * Componente SpotIcon
 *
 * Estende o componente Icon com tamanhos limitados entre medium (48px) e hugeX (128px).
 * Este componente faz parte do Growth Plan e é ideal para casos onde você precisa de
 * ícones maiores mas com controle sobre o range de tamanhos permitidos.
 *
 * @param props - Propriedades do componente SpotIcon
 * @returns Elemento JSX renderizado
 */
const SpotIcon = React.forwardRef<HTMLElement, SpotIconProps>(({
  size = 'medium',
  customColor,
  className = '',
  ...props
}, ref) => {
  // Se customColor for fornecida, usa nossos estilos personalizados
  if (customColor) {
    const { spotIcon } = styles({ size, color: props.color, customColor })
    const iconClassName = `${className} ${spotIcon}`.trim()

    return (
      <Icon
        ref={ref}
        size={size}
        className={iconClassName}
        {...props}
      />
    )
  }

  // Caso contrário, usa o comportamento padrão do Icon
  return (
    <Icon
      ref={ref}
      size={size}
      className={className}
      {...props}
    />
  )
})

SpotIcon.displayName = 'SpotIcon'

export default SpotIcon
