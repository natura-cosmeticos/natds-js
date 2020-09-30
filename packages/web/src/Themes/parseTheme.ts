import { ITheme } from "@naturacosmeticos/natds-styles";
import { IThemeWeb } from "./IThemeWeb";
import { parseShadows } from "./parseShadows";

export const parseTheme = (theme: ITheme): IThemeWeb => {
  const { shadows } = theme;

  return {
    ...theme,
    shadows: parseShadows(shadows),
    typography: theme.typography,
  };
};

export default parseTheme;
