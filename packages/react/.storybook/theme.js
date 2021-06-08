import { create } from '@storybook/theming';
import themes from '@naturacosmeticos/natds-themes';

const BASE_URL = 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets'

export const buildTheme = (theme, mode) => create({
  appBg: theme.color.surface,
  appContentBg: theme.color.background,
  barBg: theme.color.surface,
  barTextColor: theme.color.highEmphasis,
  base: mode,
  brandImage: `${BASE_URL}/${theme.asset.brand.neutral.a}.svg`,
  brandTitle: 'Natura Design System',
  colorPrimary: theme.color.primary,
  colorSecondary: theme.color.secondary,
  textColor: theme.color.highEmphasis,
  textInverseColor: theme.color.lowEmphasis,
})

export const dark = buildTheme(themes.natura.dark, 'dark');
export const light = buildTheme(themes.natura.light, 'light');
