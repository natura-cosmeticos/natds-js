import { themes, tokens } from '@naturacosmeticos/natds-styles';
import { DefaultTheme } from 'react-native-paper';
import { IThemeShape } from 'Provider/IThemeShape';

const { natura: { light } } = themes;
const { spacing } = tokens.spacing;

const natdsTheme: IThemeShape = {
  ...DefaultTheme,
  ...light,
  spacing
};

export default natdsTheme;
