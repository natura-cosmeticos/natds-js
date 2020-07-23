/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import isEqual from "lodash/isEqual";
import {ThemeOptions, createMuiTheme} from "@material-ui/core/styles";
import { themes } from "../Themes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDefaultTheme = (providerTheme: any) => {
  const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme));
  const parsedDefaultTheme = JSON.parse(JSON.stringify(createMuiTheme({})));

  if (isEqual(parsedProviderTheme, parsedDefaultTheme)) {
    return createMuiTheme(themes.natura.light as ThemeOptions);
  }

  return providerTheme;

};
