import { themes as styleThemes } from "@naturacosmeticos/natds-styles";
import { IThemesWeb } from "./IThemesWeb";
import { IThemeWeb } from "./IThemeWeb";
import { ThemeBrandName } from "./ThemeBrandName";

export const createThemesObject = (): IThemesWeb<keyof typeof styleThemes> => {
  const keys = Object.keys(styleThemes),
    newThemes: IThemesWeb<keyof typeof styleThemes> = {} as IThemesWeb<
      keyof typeof styleThemes
      >;

  keys.forEach((key) => {

    newThemes[key as ThemeBrandName] = {
      dark: {} as IThemeWeb,
      light: {} as IThemeWeb,
    };

    return newThemes[key as ThemeBrandName];
  });

  return newThemes;
};

export default createThemesObject;
