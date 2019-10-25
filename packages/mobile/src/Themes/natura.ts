import { themes } from '@naturacosmeticos/natds-styles';
import { DefaultTheme, ThemeShape } from 'react-native-paper';

const { naturaLight } = themes;

const natdsTheme: ThemeShape = {
  ...DefaultTheme,
  ...naturaLight
};

export default natdsTheme;
