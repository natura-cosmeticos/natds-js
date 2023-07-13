/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LogoProps } from '../../../components/Logo'
import { BrandTypes } from '../../../brandTypes/brandTypes'
import { buildTheme } from '../../../ThemeProvider'

type LogoStyleProps = Required<Pick<LogoProps, 'size' | 'color' | 'model'>>
interface brandData {
    brand?: BrandTypes
    isActive: boolean
}
type LogoBrand = brandData & LogoStyleProps
type RuleName =
| 'container'
| 'wrapper'
| 'root'

const getThemeSelected = (theme: Theme) => (brand: BrandTypes) => {
  const themeSel = buildTheme(brand, 'light')
  if (brand) {
    return {
      primary: themeSel.color.primary,
      onPrimary: themeSel.color.onPrimary,
      secondary: themeSel.color.secondary,
      highLight: themeSel.color.highlight,
      surface: themeSel.color.surface
    }
  }
  return {
    primary: theme.color.primary,
    onPrimary: theme.color.onPrimary,
    secondary: theme.color.secondary,
    highLight: theme.color.highlight,
    surface: theme.color.surface
  }
}

const styles = createUseStyles<RuleName, LogoBrand, Theme>((theme: Theme) => ({

  container: {
    display: 'flex',
    fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
    alignItems: 'center',
    flexDirection: 'column',
    border: ' 1px solid #0000001F',
    gap: theme.size.micro,
    boxSizing: '-moz-initial',
    maxWidth: 1280,
    minWidth: 360,
    width: '100%',
    fontWeight: theme.typography.fontWeight.medium,
    fontSize: theme.typography.fontSize.level2
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 104,
    height: 50,
    border: ({ isActive }) => !isActive && `1px solid ${theme.color.mediumEmphasis}`,
    backgroundColor: ({ isActive, brand }) => (isActive ? (brand && getThemeSelected(theme)(brand).primary) : (brand && getThemeSelected(theme)(brand).surface)),
    borderRadius: '4px',
    cursor: 'pointer'
  },
  root: {
    '& svg': {
      height: '100%',
      width: ({ size }) => theme.size[size],
      '& path': {
        fill: ({ color, brand, isActive }) => (color === 'neutral' ? (isActive ? getThemeSelected(theme)(brand).onPrimary : getThemeSelected(theme)(brand).highLight) : (!isActive ? getThemeSelected(theme)(brand)[color] : getThemeSelected(theme)(brand).onPrimary))
      }
    }
  }

}))

export default styles
