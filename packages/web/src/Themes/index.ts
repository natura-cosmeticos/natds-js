import { themes as styleThemes, ITheme } from '@naturacosmeticos/natds-styles';

export interface IThemeWeb extends Pick<ITheme, 'shape' | 'palette'>{
  typography: {
    fontFamily?: string;
    fontFamilyBrand?: string;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
  };
}

function parseTheme(theme: ITheme):IThemeWeb {
  const { web } = theme.typography;

  return {
    ...theme,
    typography: {
      fontFamily: web.fontFamily,
      fontFamilyBrand: web.fontFamilyBrand,
      fontWeightLight: web.fontWeightLight,
      fontWeightRegular: web.fontWeightRegular,
      fontWeightMedium: web.fontWeightMedium,
      fontWeightBold: web.fontWeightBold
    }
  };
}

type IThemesWeb<K extends keyof typeof styleThemes> = {
  [P in K]: {
    light: IThemeWeb;
    dark: IThemeWeb;
  }
};

function createThemesObject(): IThemesWeb<keyof typeof styleThemes> {
  const keys = Object.keys(styleThemes);
  const newThemes: IThemesWeb<keyof typeof styleThemes> = {} as IThemesWeb<keyof typeof styleThemes>;
  keys.forEach(key => newThemes[key] = { light: {} as IThemeWeb, dark: {} as IThemeWeb } );
  return newThemes;
}

export const themes = Object.keys(styleThemes).reduce((result, key) => {
  result[key].light = parseTheme(styleThemes[key].light);
  result[key].dark = parseTheme(styleThemes[key].dark);
  return result;
}, createThemesObject());
