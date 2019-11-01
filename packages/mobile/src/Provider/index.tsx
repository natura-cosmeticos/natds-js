import { Provider as PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { ITheme } from '@naturacosmeticos/natds-styles';
import { themes } from '../Themes';
import { ThemeBuilder } from '../Themes/ThemeBuilder';

interface IProvider {
  children: React.ReactNode;
  theme?: ITheme;
}

const Provider: React.FunctionComponent<IProvider> = (props) => {
  const theme = ThemeBuilder(props.theme, themes.natura.light);

  return <PaperProvider {...props} theme={theme} />;
};

export default Provider;
