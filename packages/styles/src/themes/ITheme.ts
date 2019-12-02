import { fontSize } from "../tokens/fontSize/fontSize";
import IAvatarSizes from "../tokens/avatarSizes/IAvatarSizes";
import IButtonSize from "tokens/buttonSize/IButtonSize";

type ITypography = {
  web: {
    fontFamily?: string;
    fontFamilyBrand1?: string;
    fontFamilyBrand2?: string;
    fontFamilyBrand3?: string;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
  };
  iOS: {
    fontFamily?: string;
    fontFamilyBrand1?: string;
    fontFamilyBrand2?: string;
    fontFamilyBrand3?: string;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
  };
  android: {
    fontFamily?: string;
    fontFamilyBrand1?: string;
    fontFamilyBrand2?: string;
    fontFamilyBrand3?: string;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
  };
} & typeof fontSize;

export interface ITheme {
  shape?: {
    borderRadius?: number;
  };
  palette?: {
    type?: "light" | "dark";
    primary?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    secondary?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    success?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    },
    error?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
    background?: {
      paper?: string;
      default?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
      hint?: string;
    };
    complementary?: {
      link?: string;
      warning?: string;
    };
  };
  typography: ITypography;
  avatarSizes: IAvatarSizes;
  buttonSize: IButtonSize;
  spacing: number;
  overrides?: any;
}
