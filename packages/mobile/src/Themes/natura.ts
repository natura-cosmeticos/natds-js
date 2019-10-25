import { themes, tokens } from '@naturacosmeticos/natds-styles';
import { DefaultTheme } from 'react-native-paper';
import { IThemeShape } from 'Provider/IThemeShape';

const { naturaLight } = themes;
const { spacing } = tokens.spacing;

const natdsTheme: IThemeShape = {
  ...DefaultTheme,
  ...naturaLight,
  spacing
};

export default natdsTheme;
