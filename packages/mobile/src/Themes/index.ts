import {
  themes as styleThemes,
  ITheme,
  IFont,
} from '@naturacosmeticos/natds-styles';
import { Platform } from 'react-native';

export interface IThemeMobile extends Pick<ITheme, 'shape' | 'palette'> {
  typography: {
    fontFamily?: string;
    fontFamilyBrand1?: string;
    fontFamilyBrand2?: string;
    fontFamilyBrand3?: string;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
    h1?: IFont;
    h2?: IFont;
    h3?: IFont;
    h4?: IFont;
    h5?: IFont;
    h6?: IFont;
    subtitle1?: IFont;
    subtitle2?: IFont;
    body1?: IFont;
    body2?: IFont;
    button?: IFont;
    caption?: IFont;
    overline?: IFont;
  };
  spacing: number;
}

function parseTheme(theme: ITheme): IThemeMobile {
  const { iOS, android } = theme.typography;

  const typography = Platform.OS === 'ios' ? iOS : android;

  return {
    ...theme,
    spacing: theme.spacing,
    typography: {
      fontFamily: typography.fontFamily,
      fontFamilyBrand1: typography.fontFamilyBrand1,
      fontFamilyBrand2: typography.fontFamilyBrand2,
      fontFamilyBrand3: typography.fontFamilyBrand3,
      fontWeightLight: typography.fontWeightLight,
      fontWeightRegular: typography.fontWeightRegular,
      fontWeightMedium: typography.fontWeightMedium,
      fontWeightBold: typography.fontWeightBold,
      h1: theme.typography.h1,
      h2: theme.typography.h2,
      h3: theme.typography.h3,
      h4: theme.typography.h4,
      h5: theme.typography.h5,
      h6: theme.typography.h6,
      subtitle1: theme.typography.subtitle1,
      subtitle2: theme.typography.subtitle2,
      body1: theme.typography.body1,
      body2: theme.typography.body2,
      button: theme.typography.button,
      caption: theme.typography.caption,
      overline: theme.typography.overline,
    },
  };
}

type IThemesMobile<K extends keyof typeof styleThemes> = {
  [P in K]: {
    light: IThemeMobile;
    dark: IThemeMobile;
  };
};

function createThemesObject(): IThemesMobile<keyof typeof styleThemes> {
  const keys = Object.keys(styleThemes);
  const newThemes: IThemesMobile<keyof typeof styleThemes> = {} as IThemesMobile<
    keyof typeof styleThemes
  >;
  keys.forEach(
    key =>
      (newThemes[key] = { light: {} as IThemeMobile, dark: {} as IThemeMobile })
  );
  return newThemes;
}

export const themes = Object.keys(styleThemes).reduce((result, key) => {
  result[key].light = parseTheme(styleThemes[key].light);
  result[key].dark = parseTheme(styleThemes[key].dark);
  return result;
}, createThemesObject());
