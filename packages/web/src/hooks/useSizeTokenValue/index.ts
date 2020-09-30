import useTheme from "@material-ui/core/styles/useTheme";
import { ISizes } from "@naturacosmeticos/natds-styles";
import { IThemeWeb } from "../../Themes";
import { getSizeTokens } from "../useSizeTokens";

type SizeTokenName = keyof ISizes;

type GetSizeTokenValueArgs = {
  name?: SizeTokenName,
  theme: IThemeWeb
}

type GetSizeTokenValueFn = ({ name, theme }: GetSizeTokenValueArgs) => number | null;

export const getSizeTokenValue: GetSizeTokenValueFn = ({ name, theme }) => {
  if (typeof name !== "string") {
    return null;
  }
  const sizeTokens = getSizeTokens(theme);

  if (typeof sizeTokens === "undefined") {
    return null;
  }

  return sizeTokens[name];
};

export const useSizeTokenValue: (sizeTokenName?: SizeTokenName) => number | null = (sizeTokenName) => {
  const theme : IThemeWeb = useTheme();

  return getSizeTokenValue({ name: sizeTokenName, theme });
};
