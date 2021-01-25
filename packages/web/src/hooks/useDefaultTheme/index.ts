import { isEqual } from "lodash";
import { ThemeOptions, createMuiTheme } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import { IThemeWeb, themes } from "../../Themes";

export const getDefaultTheme = (providerTheme : IThemeWeb) => {
  const parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme)),
    parsedDefaultTheme = JSON.parse(JSON.stringify(createMuiTheme({})));

  if (isEqual(parsedProviderTheme, parsedDefaultTheme)) {
    return createMuiTheme(themes.natura.light as ThemeOptions) as unknown as IThemeWeb;
  }

  return providerTheme;

};

export const useDefaultTheme = () => {
  const providerTheme = useTheme() as IThemeWeb;

  return getDefaultTheme(providerTheme);
};

export default useDefaultTheme;
