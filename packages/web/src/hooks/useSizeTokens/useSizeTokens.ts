import { ISizes } from "@naturacosmeticos/natds-styles";
import useTheme from "@material-ui/core/styles/useTheme";
import { IThemeWeb } from "../../Themes";
import { getSizeTokens } from "./getSizeTokens";

export const useSizeTokens: () => ISizes = () => {
  const theme : IThemeWeb = useTheme();

  return getSizeTokens(theme);
};

export default useSizeTokens;
