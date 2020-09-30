import useTheme from "@material-ui/core/styles/useTheme";
import { IThemeWeb } from "../../Themes";

export const getTypographyTokens : (theme: IThemeWeb) => IThemeWeb["typography"] = (theme) => theme.typography;

export const useTypographyTokens : () => IThemeWeb["typography"] = () => {
  const theme : IThemeWeb = useTheme();

  return getTypographyTokens(theme);
};
