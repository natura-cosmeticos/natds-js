import {
  themes as styleThemes,
  ITheme,
  IFont,
  IElevation
} from '@naturacosmeticos/natds-styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows as IShadows } from '@material-ui/core/styles/shadows';

export interface IThemeWeb
  extends Pick<ITheme, 'shape' | 'palette' | 'avatarSizes' | 'sizes'> {
  shadows?: IShadows;
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
}

const parseShadows = (shadows: IElevation): IShadows => {
  const outShadows: any = [];

  createMuiTheme({}).shadows.forEach((shadow, index) => {
    /**
     * @todo Fix TSLint error: unused expression, expected an assignment or function call(no-unused-expression)
     */
    // tslint:disable-next-line:no-unused-expression
    if (shadows[index.toString()]) {
      outShadows.push(shadows[index.toString()]);
    }
    else {
      outShadows.push(shadow);
    }
  });

  return outShadows;
};

const parseTheme = (theme: ITheme): IThemeWeb => {
  const { shadows } = theme;

  return {
    ...theme,
    shadows: parseShadows(shadows),
    typography: {
      fontFamily: theme.typography.fontFamily,
      fontFamilyBrand1: theme.typography.fontFamilyBrand1,
      fontFamilyBrand2: theme.typography.fontFamilyBrand2,
      fontFamilyBrand3: theme.typography.fontFamilyBrand3,
      fontWeightLight: theme.typography.fontWeightLight,
      fontWeightRegular: theme.typography.fontWeightRegular,
      fontWeightMedium: theme.typography.fontWeightMedium,
      fontWeightBold: theme.typography.fontWeightBold,
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
};

type IThemesWeb<K extends keyof typeof styleThemes> = {
  [P in K]: {
    light: IThemeWeb;
    dark: IThemeWeb;
  };
};

const createThemesObject = (): IThemesWeb<keyof typeof styleThemes> => {
  const keys = Object.keys(styleThemes);
  const newThemes: IThemesWeb<keyof typeof styleThemes> = {} as IThemesWeb<
    keyof typeof styleThemes
  >;
  keys.forEach(
    key => (newThemes[key] = { light: {} as IThemeWeb, dark: {} as IThemeWeb })
  );
  return newThemes;
};

export const themes = Object.keys(styleThemes).reduce((result, key) => {
  result[key].light = parseTheme(styleThemes[key].light);
  result[key].dark = parseTheme(styleThemes[key].dark);
  return result;
}, createThemesObject());
