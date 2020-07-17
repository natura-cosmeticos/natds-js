/**
 * @todo Review/re-enable `jsx-no-string-ref` tslint rule
 * @todo Review/re-enable `no-unused-expression` tslint rule
 * @todo Review/re-enable `use-isnan` tslint rule
 * @todo Review/re-enable `triple-equals` tslint rule
 */
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import * as React from 'react';

import { IThemeWeb, themes } from '../Themes';

export interface IProvider {
  children: React.ReactNode;
  theme?: IThemeWeb;
}

export const Provider:React.FunctionComponent<IProvider> = (props:IProvider) => {

  /**
   * @todo fix(web): TS2322 - Type is not assignable to type 'ThemeOptions'. Types of some properties are incompatible.
   */
  // @ts-ignore
  const theme: ThemeOptions = props.theme ? { ...props.theme } : { ...themes.natura.light },
    newTheme = createMuiTheme(theme);


  return (
    <MuiThemeProvider {...props} theme={newTheme} />
  );
};
