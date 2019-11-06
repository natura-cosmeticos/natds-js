import { Provider as PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { themes, IThemeMobile } from '../Themes';
import { buildTheme } from '../Themes/buildTheme';

interface IProvider {
  children: React.ReactNode;
  theme?: IThemeMobile;
}

const Provider: React.FunctionComponent<IProvider> = (props) => {
  const theme = buildTheme(props.theme, themes.natura.light);

  return <PaperProvider {...props} theme={theme} />;
};

export default Provider;
