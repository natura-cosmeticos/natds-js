/* eslint-disable complexity */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LogoProps } from './Logo.props'
import { buildTheme } from '../../ThemeProvider'
// try trigger pipeline jenks update logo CB1
type LogoStyleProps = Pick<LogoProps, 'size' | 'color' | 'brand' | 'mode'>

const getColorTheme = (theme: Theme) => ({ brand, color, mode }: LogoStyleProps) => {
  const themeColor = buildTheme(brand, mode)

  if (brand) {
    return color !== 'neutral' && color && themeColor.color[color]
  }

  return color !== 'neutral' && color && theme.color[color]
}

const styles = createUseStyles((theme: Theme) => ({
  root: {
    '& svg': {
      height: '100%',
      width: ({ size }: LogoStyleProps) => size && theme.size[size],
      '& path': {
        fill: ({
          color, brand, size, mode
        }: LogoStyleProps) => (
          getColorTheme(theme)({
            color, brand, size, mode
          }))
      },
      '& path#id-avonV2-b-custom': {
        fill: ({ color }: LogoStyleProps) => (color !== 'surface' ? '#fff' : '#000')
      }
    }
  }
}))

export default styles
