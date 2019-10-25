import { Provider as PaperProvider, } from 'react-native-paper';
import * as React from 'react';
import { natura } from '../Themes';
import { IThemeShape } from './IThemeShape';

interface IProvider {
  children: React.ReactNode;
  theme?: IThemeShape;
}

const Provider: React.FunctionComponent<IProvider> = (props) => {
  const { theme } = props;
  return <PaperProvider {...props} theme={theme ? theme : natura} />;
};

export default Provider;
