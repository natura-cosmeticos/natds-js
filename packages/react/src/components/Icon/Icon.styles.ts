// lib icon version 1.27.5
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { IconProps } from './Icon.props'
import { buildTheme } from '../../ThemeProvider'

type IconStyleProps = Pick<IconProps, 'size' | 'color' | 'brand' >

const getColorThemeIcon = (theme: Theme) => ({ brand, color }: IconStyleProps) => {
  const themeSelectIcon = buildTheme(brand, 'light')
  if (brand) {
    return color && themeSelectIcon.color[color]
  }
  return color && theme.color[color]
}

const styles = createUseStyles((theme: Theme) => ({
  icon: {
    color: ({ color, brand }: IconStyleProps) => getColorThemeIcon(theme)({ brand, color }),
    fontFamily: 'natds-icons',
    fontSize: ({ size }: IconStyleProps) => size && theme.size[size],
    pointerEvents: 'none',
    userSelect: 'none'
  }
}))

export default styles
