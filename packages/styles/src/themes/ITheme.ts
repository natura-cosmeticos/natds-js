import { fontSize } from "../tokens/fontSize";
import { IAvatarSizes } from "../tokens/avatarSizes/IAvatarSizes";
import { IIconSizes } from "../tokens/iconSizes/IIconSizes";
import { IButtonSizes } from "tokens/buttonSizes/IButtonSizes";
import { IElevation } from "tokens/elevation/IElevation";

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
    badgeBorderRadius?: number;
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
      paperContrastText?: string;
      defaultContrastText?: string;
    };
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
      hint?: string;
    };
    complementary?: {
      link?: string;
      linkContrastText?: string;
      warning?: string;
      warningContrastText?: string;
    };
  };
  typography: ITypography;
  avatarSizes: IAvatarSizes;
  iconSizes: IIconSizes;
  buttonSizes: IButtonSizes;
  spacing: number;
  shadows: IElevation;
  overrides?: any;
}
