import { Provider as PaperProvider, ThemeShape } from 'react-native-paper';
import * as React from 'react';
import { natura } from '../Themes';

interface IProvider {
  children: React.ReactNode;
  theme?: ThemeShape;
}

const Provider: React.FunctionComponent<IProvider> = (props) => {
  const { theme } = props;
  return <PaperProvider {...props} theme={theme ? theme : natura} />;
};

export default Provider;
