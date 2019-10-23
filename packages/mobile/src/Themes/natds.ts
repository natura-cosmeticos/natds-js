import { themes } from '@naturacosmeticos/natds-styles';
import { DefaultTheme, ThemeShape } from 'react-native-paper';

const { natds } = themes;

const natdsTheme: ThemeShape =  {
  ...DefaultTheme,
  ...natds
};

export default natdsTheme;
