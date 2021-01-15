import { fontSize } from "../tokens/fontSize";
import {
  IAvatarSizes,
  IButtonSizes,
  IElevation,
  IIconSizes, IOpacity,
  ISizes,
} from "..";
import { Color } from "@naturacosmeticos/natds-themes";

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

      /**
       * Active color
       *
       * Useful for ListItemIcon icon color, for example.
       * Since it is required since 0.24, every theme must implement it.
       */
      active: string;
      hover?: string;
      hoverOpacity?: number;
      selected?: string;
      disabled?: string;
      disabledBackground?: string;
    };
    background?: {
      paper?: string;
      default?: string;
      paperContrastText?: string;
      defaultContrastText?: string;
    };
    complementary?: {
      highlight?: string;
      link?: string;
      linkContrastText?: string;
      warning?: string;
      warningContrastText?: string;
    };

    /**
     * Divider color
     *
     * Useful for DrawerFooter border top color, for example.
     *
     * @since 0.24
     */
    divider: string;
    error?: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
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
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
      hint?: string;
    };
  };
  sizes: ISizes;
  typography: ITypography;
  avatarSizes: IAvatarSizes;
  iconSizes: IIconSizes;
  buttonSizes: IButtonSizes;
  spacing: number;
  color: Color;
  shadows: IElevation;

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity: IOpacity;
  overrides: Record<string, unknown>;
}
