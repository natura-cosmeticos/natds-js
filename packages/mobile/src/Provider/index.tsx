import { Provider as PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { natura } from '../Themes';
import { ITheme } from '@naturacosmeticos/natds-styles';

interface IProvider {
  children: React.ReactNode;
  theme?: ITheme;
}

const Provider: React.FunctionComponent<IProvider> = (props) => {
  const { theme } = props;
  return <PaperProvider {...props} theme={theme ? theme : natura} />;
};

export default Provider;
