import { getTokens, IToken } from './getTokens';
import themes from './themes';

export interface ITheme {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
  };
  fonts?: {
    regular: string;
    medium: string;
    light: string;
    thin: string;
  };
}

export const getTheme = (themeName: string):ITheme => {
  const tokens:IToken = getTokens(themes[themeName]);

  const theme:ITheme = {
    // TODO implement dark theme based on on the flag below
    dark: false,
    roundness: 4,
    colors: {
      primary: tokens.primary["primary-800-default"],
      accent: tokens.secondary["secondary-900-default"],
      background: tokens["surface-and-background"].light,
      surface: tokens["surface-and-background"].white,
      error: tokens.feedback.error,
      text: tokens.content.black,
      disabled: tokens.content["gray-tertiary"],
      placeholder: tokens.content["gray-secondary"],
      backdrop: tokens["surface-and-background"].dark
    }
  };
  return theme;
};

