import { themes as styleThemes } from "@naturacosmeticos/natds-styles";
import { IThemeOptions } from "./IThemeWeb";

export type IThemesWeb<K extends keyof typeof styleThemes> = {
  [P in K]: {
    light: IThemeOptions;
    dark: IThemeOptions;
  };
};
