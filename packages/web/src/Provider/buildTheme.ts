import themes, { BrandThemes, Themes } from '@naturacosmeticos/natds-themes'

export type ThemeMode = keyof BrandThemes
export type Brand = keyof Themes
export type CustomOption = 'typography'

const buildTheme = (brand: Brand, mode: ThemeMode, customOption: CustomOption) => {
  if (!themes) throw new Error('Unable to load tokens dependency. Check the installation logs for errors')

  const theme = themes[brand][mode]

  if (customOption === 'typography') {
    return {
      ...theme,
      typography: {
        ...theme.typography,
        fontFamily: theme.typography.body.regular.fontFamily,
        fontWeight: theme.typography.body.regular.fontWeight
      }
    }
  }

  return theme
}

export default buildTheme
