import isEqual from 'lodash/isEqual';
import {createMuiTheme, ThemeOptions} from '@material-ui/core/styles';
import { themes } from '../Themes';

export const getDefaultTheme = (providerTheme: any) => {
  const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme)),
    parsedDefaultTheme = JSON.parse(JSON.stringify(createMuiTheme({})));

  if (isEqual(parsedProviderTheme, parsedDefaultTheme)) {
    return createMuiTheme(themes.natura.light as ThemeOptions);
  }

  return providerTheme;

};
