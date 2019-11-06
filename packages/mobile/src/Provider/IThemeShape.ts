import { Theme } from "react-native-paper";
import { Fonts } from "react-native-paper/lib/typescript/src/types";

export interface IThemeShape extends Theme {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    onSurface: string;
    onBackground: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
  };
  fonts: Fonts;
  spacing?: number;
}
