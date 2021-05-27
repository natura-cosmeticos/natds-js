import { create } from '@storybook/theming';
import themes from '@naturacosmeticos/natds-themes';

export const buildTheme = (theme, mode) => create({
  appBg: theme.color.surface,
  appContentBg: theme.color.background,
  barBg: theme.color.surface,
  barTextColor: theme.color.highEmphasis,
  base: mode,
  brandImage: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@0.6.0/dist/assets/natura-a-official.svg',
  brandTitle: 'Natura Design System',
  colorPrimary: theme.color.primary,
  colorSecondary: theme.color.secondary,
  textColor: theme.color.highEmphasis,
  textInverseColor: theme.color.lowEmphasis,
})

export const dark = buildTheme(themes.natura.dark, 'dark');
export const light = buildTheme(themes.natura.light, 'light');
