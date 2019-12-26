import isEqual from 'lodash/isEqual';
import { createMuiTheme } from '@material-ui/core/styles';
import { themes } from '../Themes';

export const getDefaultTheme = (providerTheme: any) => {
  const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme));
  const parsedDefaulttheme = JSON.parse(JSON.stringify(createMuiTheme({})));
  return isEqual(parsedProviderTheme, parsedDefaulttheme)
    ? createMuiTheme(themes.natura.light)
    : providerTheme;
};
