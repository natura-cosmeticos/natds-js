import themes, { BrandThemes, Themes, Theme } from '@naturacosmeticos/natds-themes'

export type ThemeMode = keyof BrandThemes
export type Brand = keyof Omit<Themes, 'natdsTest'>

const buildTheme = (brand: Brand = 'natura', mode: ThemeMode = 'light'): Theme => {
  if (!themes) throw new Error('Unable to load tokens dependency. Check the installation logs for errors')

  return themes[brand][mode]
}

export default buildTheme
