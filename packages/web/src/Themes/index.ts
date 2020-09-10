/* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-explicit-any,max-lines,max-len,max-lines-per-function,no-param-reassign */
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
    | "iconSizes"
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

    const outShadows: any = [];

    createMuiTheme({}).shadows.forEach((shadow, index) => {

      /**
       * @todo fix TS7053: Element implicitly has an 'any' type...
       */
      // @ts-ignore
      if (shadows[index.toString()]) {
        // @ts-ignore
        outShadows.push(shadows[index.toString()]);
      } else {
        outShadows.push(shadow);
      }
    });

    return outShadows;
  },

  // @todo refactor parseTheme function
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

    /**
     * @todo fix TS7053: Element implicitly has an 'any' type...
     */
    // @ts-ignore
    newThemes[key] = {
      dark: {} as IThemeWeb,
      light: {} as IThemeWeb,
    };

    /**
     * @todo TS7053: Element implicitly has an 'any' type...
     */
    // @ts-ignore
    return newThemes[key];
  });

  return newThemes;
};

/**
 * @todo fix: avoid assignment to property of function parameter 'result'
 */
export const themes = Object.keys(styleThemes).reduce((result, key) => {

  /**
   * @todo fix TS7053: Element implicitly has an 'any' type...
   */
  // @ts-ignore
  result[key].light = parseTheme(styleThemes[key].light);

  /**
   * @todo fix TS7053: Element implicitly has an 'any' type...
   */
  // @ts-ignore
  result[key].dark = parseTheme(styleThemes[key].dark);

  return result;
}, createThemesObject());
