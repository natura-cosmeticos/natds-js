import useTheme from "@material-ui/core/styles/useTheme";

/**
 * @todo migrate from deprecated IFont to `natds-themes` type
 */
import { IFont } from "@naturacosmeticos/natds-styles";
import { getTypographyTokens } from "../useTypographyTokens";
import { IThemeWeb } from "../../Themes";

type Typography = IThemeWeb["typography"];
type TypographyKey = keyof Typography;
type TypographyValue = string | number | IFont | undefined;

type GetArgs = {
  name: TypographyKey,
  theme: IThemeWeb
}

export const getTypographyTokenValue : ({ name, theme }: GetArgs) => TypographyValue = ({ name, theme }) => {
  if (typeof name === "string") {
    return getTypographyTokens(theme)[name];
  }

  return "";
};

export const useTypographyTokenValue : (name: TypographyKey) => TypographyValue = (name) => {
  const theme : IThemeWeb = useTheme();

  return getTypographyTokenValue({ name, theme });
};
