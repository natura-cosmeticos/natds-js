import { ITheme } from '@naturacosmeticos/natds-styles'
import { IThemeWebBase } from './IThemeWeb'
import { parseShadows } from './parseShadows'

export const parseTheme = (theme: ITheme): IThemeWebBase => {
  const { shadows } = theme

  return {
    ...theme,
    shadows: parseShadows(shadows),
    typography: theme.typography
  }
}

export default parseTheme
