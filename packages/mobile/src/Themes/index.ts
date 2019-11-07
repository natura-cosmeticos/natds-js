import { themes as styleThemes, ITheme } from '@naturacosmeticos/natds-styles';
import { Platform } from 'react-native';

export interface IThemeMobile extends Pick<ITheme, 'shape' | 'palette'>{
  typography: {
    fontFamily?: string;
    fontFamilyBrand?: string;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
  };
}

function parseTheme(theme: ITheme):IThemeMobile {
  const { iOS, android } = theme.typography;

  const typography = Platform.OS === 'ios' ? iOS : android;

  return {
    ...theme,
    typography: {
      fontFamily: typography.fontFamily,
      fontFamilyBrand: typography.fontFamilyBrand,
      fontWeightLight: typography.fontWeightLight,
      fontWeightRegular: typography.fontWeightRegular,
      fontWeightMedium: typography.fontWeightMedium,
      fontWeightBold: typography.fontWeightBold
    }
  };
}

type IThemesMobile<K extends keyof typeof styleThemes> = {
  [P in K]: {
    light: IThemeMobile;
    dark: IThemeMobile;
  }
};

function createThemesObject(): IThemesMobile<keyof typeof styleThemes> {
  const keys = Object.keys(styleThemes);
  const newThemes: IThemesMobile<keyof typeof styleThemes> = {} as IThemesMobile<keyof typeof styleThemes>;
  keys.forEach(key => newThemes[key] = { light: {} as IThemeMobile, dark: {} as IThemeMobile } );
  return newThemes;
}

export const themes = Object.keys(styleThemes).reduce((result, key) => {
  result[key].light = parseTheme(styleThemes[key].light);
  result[key].dark = parseTheme(styleThemes[key].dark);
  return result;
}, createThemesObject());
