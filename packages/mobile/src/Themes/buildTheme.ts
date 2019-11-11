import { IThemeShape } from '../Provider/IThemeShape';
import { DefaultTheme } from 'react-native-paper';
import { IThemeMobile } from 'Themes';

export function buildTheme(theme: IThemeMobile | undefined, defaultTheme: IThemeMobile): IThemeShape {
  const provider = theme ? theme : defaultTheme;
  const { palette = {}, shape, typography, spacing } = provider;

  const {
    primary: { main: primary } = { main: undefined },
    secondary: { main: secondary } = { main: undefined },
    error: { main: error } = { main: undefined },
    background = {},
    text = {}
  } = palette;

  const defaultColors = DefaultTheme.colors;

  const colors = {
    primary: primary ? primary : defaultColors.primary,
    accent: secondary ? secondary : defaultColors.accent,
    secondary: secondary ? secondary : defaultColors.accent,
    error: error ? error : defaultColors.error,
    background: background.default ? background.default : defaultColors.backdrop,
    surface: background.paper ? background.paper : defaultColors.surface,
    text: text.primary ? text.primary : defaultColors.text,
    onBackground: text.primary ? text.primary : defaultColors.onBackground,
    onSurface: text.secondary ? text.secondary : defaultColors.onSurface,
    disabled: text.disabled ? text.disabled : defaultColors.disabled,
    placeholder: text.hint ? text.hint : defaultColors.placeholder
  };

  const roundness = shape && shape.borderRadius
    ? shape.borderRadius
    : DefaultTheme.roundness;

  const isDarkMode = palette.type === 'dark';

  const newTheme: IThemeShape = {
    ...DefaultTheme,
    spacing,
    dark: isDarkMode,
    roundness,
    colors: {
      ...DefaultTheme.colors,
      ...colors
    },
    fonts: {
      regular: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightRegular ? typography.fontWeightRegular.toString() as '400' : '400' as '400'
      },
      medium: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightMedium ? typography.fontWeightMedium.toString() as '500' : '500' as '500'

      },
      light: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightLight ? typography.fontWeightLight.toString() as '300' : '300' as '300'
      },
      thin: {
        fontFamily: typography.fontFamily ? typography.fontFamily : 'System',
        fontWeight: typography.fontWeightLight ? typography.fontWeightLight.toString() as '100' : '100' as '100'
      }
    }
  };

  return newTheme;
}
