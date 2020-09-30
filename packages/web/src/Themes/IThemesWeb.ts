import { themes as styleThemes } from "@naturacosmeticos/natds-styles";
import { IThemeWeb } from "./IThemeWeb";

export type IThemesWeb<K extends keyof typeof styleThemes> = {
  [P in K]: {
    light: IThemeWeb;
    dark: IThemeWeb;
  };
};
