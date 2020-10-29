import { themes as styleThemes } from "@naturacosmeticos/natds-styles";
import { IThemesWeb } from "./IThemesWeb";
import { ThemeBrandName } from "./ThemeBrandName";
import { parseTheme } from "./parseTheme";
import { createThemesObject } from "./createThemesObject";

export const themes = Object.keys(styleThemes).reduce((value: IThemesWeb<ThemeBrandName>, key: string) => {

  const result = value;

  result[key as ThemeBrandName].dark = parseTheme(styleThemes[key as ThemeBrandName].dark);
  result[key as ThemeBrandName].light = parseTheme(styleThemes[key as ThemeBrandName].light);

  return result;
}, createThemesObject());

export default themes;
