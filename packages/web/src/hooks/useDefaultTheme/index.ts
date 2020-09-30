import { isEqual } from "lodash";
import { ThemeOptions, createMuiTheme, Theme } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import { IThemeWeb, themes } from "../../Themes";

export const getDefaultTheme : (providerTheme: IThemeWeb | unknown) => Theme = (providerTheme) => {
  const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme)),
    parsedDefaultTheme = JSON.parse(JSON.stringify(createMuiTheme({})));

  if (isEqual(parsedProviderTheme, parsedDefaultTheme)) {
    return createMuiTheme(themes.natura.light as ThemeOptions);
  }

  return providerTheme as Theme;

};

export const useDefaultTheme: () => Theme = () => {
  const providerTheme = useTheme();

  return getDefaultTheme(providerTheme);
};

export default useDefaultTheme;
