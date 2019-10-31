import { MuiThemeProvider, Theme } from '@material-ui/core';
import * as React from 'react';
import * as themes from '../Themes';

export interface IProvider {
  children: React.ReactNode;
  theme?: Theme;
}

export const Provider:React.FunctionComponent<IProvider> = (props:IProvider) => {
  const { theme } = props;

  return(
    <MuiThemeProvider
      {...props}
      theme={theme ? theme : themes.natura.light}
    />
  );
};
