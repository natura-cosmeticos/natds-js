import isEqual from 'lodash/isEqual';
import { createMuiTheme } from '@material-ui/core/styles';
import { themes } from '../Themes';

export const getDefaultTheme = (providerTheme: any) => {
  const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme));
  const parsedDefaultTheme = JSON.parse(JSON.stringify(createMuiTheme({})));
  /**
   * @todo fix(web): TS2345 Argument of type 'IThemeWeb' is not assignable to parameter of type 'ThemeOptions' on shared
   */
  return isEqual(parsedProviderTheme, parsedDefaultTheme)
  // @ts-ignore
    ? createMuiTheme(themes.natura.light)
    : providerTheme;
};
