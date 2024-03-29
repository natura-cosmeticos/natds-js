import themes from '../Themes/themes'
import { ThemeBrandName } from '../Themes/ThemeBrandName'

export type ThemeMode = 'light' | 'dark'
export type Brand = ThemeBrandName
export type CustomOption = 'typography'

export const buildTheme = (brand: Brand, mode: ThemeMode, customOption?: CustomOption) => {
  const theme = themes[brand][mode]

  if (customOption === 'typography') {
    return {
      ...theme,
      typography: {
        ...theme.typography,
        fontFamily: theme.typography.body?.regular.fontFamily,
        fontWeightRegular: theme.typography.body?.regular.fontWeight
      }
    }
  }

  return theme
}
