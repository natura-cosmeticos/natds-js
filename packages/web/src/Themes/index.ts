/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import { createMuiTheme } from "@material-ui/core/styles";
import { Shadows as IShadows } from "@material-ui/core/styles/shadows";
import {
  IElevation,
  IFont,
  ITheme,
  themes as styleThemes,
} from "@naturacosmeticos/natds-styles";

export interface IThemeWeb
  extends Pick<ITheme,
    | "avatarSizes"
    | "palette"
    | "shape"
    | "sizes"
    | "spacing"
    > {
  shadows?: IShadows;
  typography: {
    body1?: IFont;
    body2?: IFont;
    button?: IFont;
    caption?: IFont;
    fontFamily?: string;
    fontFamilyBrand1?: string;
    fontFamilyBrand2?: string;
    fontFamilyBrand3?: string;
    fontWeightBold?: number;
    fontWeightLight?: number;
    fontWeightMedium?: number;
    fontWeightRegular?: number;
    h1?: IFont;
    h2?: IFont;
    h3?: IFont;
    h4?: IFont;
    h5?: IFont;
    h6?: IFont;
    overline?: IFont;
    subtitle1?: IFont;
    subtitle2?: IFont;
  };
}

const parseShadows = (shadows: IElevation): IShadows => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const outShadows: any = [];

    createMuiTheme({}).shadows.forEach((shadow, index) => {

      if (shadows[index.toString()]) {
        outShadows.push(shadows[index.toString()]);
      } else {
        outShadows.push(shadow);
      }
    });

    return outShadows;
  },

  // @todo refactor(web): refactor parseTheme function
  parseTheme = (theme: ITheme): IThemeWeb => {
    const { shadows } = theme;

    return {
      ...theme,
      shadows: parseShadows(shadows),
      typography: {
        body1: theme.typography.body1,
        body2: theme.typography.body2,
        button: theme.typography.button,
        caption: theme.typography.caption,
        fontFamily: theme.typography.fontFamily,
        fontFamilyBrand1: theme.typography.fontFamilyBrand1,
        fontFamilyBrand2: theme.typography.fontFamilyBrand2,
        fontFamilyBrand3: theme.typography.fontFamilyBrand3,
        fontWeightBold: theme.typography.fontWeightBold,
        fontWeightLight: theme.typography.fontWeightLight,
        fontWeightMedium: theme.typography.fontWeightMedium,
        fontWeightRegular: theme.typography.fontWeightRegular,
        h1: theme.typography.h1,
        h2: theme.typography.h2,
        h3: theme.typography.h3,
        h4: theme.typography.h4,
        h5: theme.typography.h5,
        h6: theme.typography.h6,
        overline: theme.typography.overline,
        subtitle1: theme.typography.subtitle1,
        subtitle2: theme.typography.subtitle2,
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
  const keys = Object.keys(styleThemes),
    newThemes: IThemesWeb<keyof typeof styleThemes> = {} as IThemesWeb<
    keyof typeof styleThemes
  >;

  keys.forEach((key) => {
    newThemes[key] = {
      dark: {} as IThemeWeb,
      light: {} as IThemeWeb,
    };

    return newThemes[key];
  });

  return newThemes;
};

/**
 * @todo fix(web): avoid assignment to property of function parameter 'result'
 */
export const themes = Object.keys(styleThemes).reduce((result, key) => {
  // eslint-disable-next-line no-param-reassign
  result[key].light = parseTheme(styleThemes[key].light);
  // eslint-disable-next-line no-param-reassign
  result[key].dark = parseTheme(styleThemes[key].dark);

  return result;
}, createThemesObject());
