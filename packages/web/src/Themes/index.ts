import {
  themes as styleThemes,
} from "@naturacosmeticos/natds-styles";
import { parseTheme } from "./parseTheme";
import { ThemeBrandName } from "./ThemeBrandName";
import createThemesObject from "./createThemesObject";
import { IThemesWeb } from "./IThemesWeb";

export { IThemeWeb } from "./IThemeWeb";

export const themes = Object.keys(styleThemes).reduce((value: IThemesWeb<ThemeBrandName>, key: string) => {

  const result = value;

  result[key as ThemeBrandName].dark = parseTheme(styleThemes[key as ThemeBrandName].dark);
  result[key as ThemeBrandName].light = parseTheme(styleThemes[key as ThemeBrandName].light);

  return result;
}, createThemesObject());
