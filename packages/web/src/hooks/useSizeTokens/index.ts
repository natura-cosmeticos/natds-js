import { ISizes } from "@naturacosmeticos/natds-styles";
import useTheme from "@material-ui/core/styles/useTheme";
import { IThemeWeb } from "../../Themes";

export const getSizeTokens: (theme: IThemeWeb) => ISizes = (theme) => theme.sizes;

export const useSizeTokens: () => ISizes = () => {
  const theme : IThemeWeb = useTheme();

  return getSizeTokens(theme);
};

export default useSizeTokens;
