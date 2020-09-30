import { ISizes } from "@naturacosmeticos/natds-styles";
import useTheme from "@material-ui/core/styles/useTheme";
import { IThemeWeb } from "../../Themes";
import { getSizeTokenValue } from "../useSizeTokenValue";

export type SizePropValue = keyof ISizes | "auto" | number;

type GetSizeStylePropArgs = {
  theme: IThemeWeb,
  value?: SizePropValue
}

type GetSizeStylePropFunc = ({ theme, value }: GetSizeStylePropArgs) => string | number

export const getSizeStyleProp : GetSizeStylePropFunc = ({ theme, value }) => {

  const nullValue = "";

  if (typeof value === "undefined") {
    return nullValue;
  }
  if (typeof value === "number" || value === "auto") {
    return value;
  }

  const tokenValue = getSizeTokenValue({ name: value, theme });

  if (typeof tokenValue === "number") {
    return tokenValue;
  }

  return nullValue;
};

export const useSizeStyleProp: (value: SizePropValue) => string | number = (value: SizePropValue) => {
  const theme : IThemeWeb = useTheme();

  return getSizeStyleProp({ theme, value });
};

export default useSizeStyleProp;
