import { themes, getTheme } from '@naturacosmeticos/natds-styles';
import { DefaultTheme, ThemeShape } from 'react-native-paper';

const naturaTheme = getTheme(themes.natura);

export const natura: ThemeShape =  {
  ...DefaultTheme,
  ...naturaTheme
};
