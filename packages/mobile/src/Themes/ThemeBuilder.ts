import { IThemeShape } from '../Provider/IThemeShape';
import { DefaultTheme } from 'react-native-paper';
import { ITheme } from '@naturacosmeticos/natds-styles';

export function ThemeBuilder(theme: ITheme | undefined, defaultTheme?: ITheme) {
  if (!theme && !defaultTheme) {
    return {};
  }

  const provider = theme ? theme : (defaultTheme || {});
  const { palette = {}, shape } = provider;

  const {
    primary: { main: primary } = { main: undefined },
    secondary: { main: secondary } = { main: undefined },
    error: { main: error } = { main: undefined },
    background = {},
    text = {}
  } = palette;

  const colors = {
    primary,
    accent: secondary,
    secondary,
    error,
    background: background.default,
    surface: background.paper,
    text: text.primary,
    onBackground: text.primary,
    onSurface: text.secondary,
    disabled: text.disabled,
    placeholder: text.hint
  };

  const roundness = shape && shape.borderRadius
    ? shape.borderRadius
    : DefaultTheme.roundness;

  const isDarkMode = palette.type === 'dark';

  const newTheme: IThemeShape = {
    ...DefaultTheme,
    dark: isDarkMode,
    roundness,
    colors: {
      ...DefaultTheme.colors,
      ...colors
    }
  };

  return newTheme;
}
