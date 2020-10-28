import { fontSize } from "../tokens/fontSize";
import {
  IAvatarSizes,
  IButtonSizes,
  IElevation,
  IIconSizes, IOpacity,
  ISizes,
} from "..";

type ITypography = {
  fontFamily?: string;
  fontFamilyBrand1?: string;
  fontFamilyBrand2?: string;
  fontFamilyBrand3?: string;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
} & typeof fontSize;

/**
 * Interface with theme options
 *
 * This interface is agnostic to the styling library that will be used,
 * but was inspired by the Material UI theme options structure.
 *
 * @see https://material-ui.com/pt/customization/theming/#api
 */
export interface ITheme {
  shape?: {
    borderRadius?: number;
    badgeBorderRadius?: number;
  };
  palette?: {
    type?: "light" | "dark";
    action?: {
      active?: string;
      hover?: string;
      hoverOpacity?: number;
      selected?: string;
      disabled?: string;
      disabledBackground?: string;
    };
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
    };
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
      highlight?: string;
      link?: string;
      linkContrastText?: string;
      warning?: string;
      warningContrastText?: string;
    };
  };
  sizes: ISizes;
  typography: ITypography;
  avatarSizes: IAvatarSizes;
  iconSizes: IIconSizes;
  buttonSizes: IButtonSizes;
  spacing: number;
  shadows: IElevation;

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity: IOpacity;
  overrides: Record<string, unknown>;
}
