import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import * as React from 'react';
import { themes } from '../Themes';
import { ITheme } from '@naturacosmeticos/natds-styles';

export interface IProvider {
  children: React.ReactNode;
  theme?: ITheme;
}

export const Provider:React.FunctionComponent<IProvider> = (props:IProvider) => {
  const theme: ThemeOptions = props.theme ? { ...props.theme } : { ...themes.natura.light };

  return(
    <MuiThemeProvider {...props} theme={createMuiTheme(theme)} />
  );
};
