/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { SpotIconProps } from './SpotIcon.props'

type SpotIconStyleProps = Pick<SpotIconProps, 'size' | 'color' | 'customColor'>

/**
 * Resolve a cor do ícone com prioridade para customColor
 * Se customColor for fornecida, ela sobrepõe a cor do tema
 */
const getIconColor = (theme: Theme) => ({ color, customColor }: SpotIconStyleProps) => {
  // Se customColor for fornecida, usa ela diretamente
  if (customColor) {
    return customColor
  }

  // Caso contrário, usa a cor do tema (comportamento padrão)
  return color && theme.color[color]
}

const styles = createUseStyles((theme: Theme) => ({
  spotIcon: {
    '&&': {
      color: ({ color, customColor }: SpotIconStyleProps) => getIconColor(theme)({ color, customColor }),
      fontFamily: 'natds-icons',
      fontSize: ({ size }: SpotIconStyleProps) => size && theme.size[size],
      pointerEvents: 'none',
      userSelect: 'none'
    }
  }
}))

export default styles
