import { themes, tokens } from '@naturacosmeticos/natds-styles';
import { DefaultTheme } from 'react-native-paper';
import { IThemeShape } from 'Provider/IThemeShape';

const { natura: { light, dark } } = themes;
const { spacing } = tokens.spacing;

function createTheme(theme: any) {
  const newTheme: IThemeShape = {
    ...DefaultTheme,
    ...theme,
    spacing
  };

  return newTheme;
}

export default {
  light: createTheme(light),
  dark: createTheme(dark)
};
