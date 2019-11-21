import { IAvatarSizes } from '@naturacosmeticos/natds-styles';
import { Theme } from 'react-native-paper';
import { Fonts } from 'react-native-paper/lib/typescript/src/types';

export interface IFontMobile {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
}

export interface IThemeShape extends Theme {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    secondary: string;
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
  typography: {
    fontFamily?: string;
    fontFamilyBrand1?: string;
    fontFamilyBrand2?: string;
    fontFamilyBrand3?: string;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
    h1?: IFontMobile;
    h2?: IFontMobile;
    h3?: IFontMobile;
    h4?: IFontMobile;
    h5?: IFontMobile;
    h6?: IFontMobile;
    subtitle1?: IFontMobile;
    subtitle2?: IFontMobile;
    body1?: IFontMobile;
    body2?: IFontMobile;
    button?: {
      textTransform: string;
    } & IFontMobile;
    caption?: IFontMobile;
    overline?: {
      textTransform: string;
    } & IFontMobile;
  };
  avatarSizes?: IAvatarSizes;
}
