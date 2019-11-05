import tokens from '../../tokens';
import { ITheme } from '../ITheme';

const { natura } = tokens.colors;

export const naturaDark: ITheme = {
  shape: {
    borderRadius: 4
  },
  palette: {
    type: 'light',
    primary: {
      main: natura.primary.colorBrdNatPrimaryOrange,
      light: natura.complementary.colorBrdNatCpOrange3,
      dark: natura.complementary.colorBrdNatCpOrange2,
      contrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    secondary: {
      main: natura.complementary.colorBrdNatCpOrange1,
      light: natura.complementary.colorBrdNatCpRed3,
      dark: natura.complementary.colorBrdNatCpRed2,
      contrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    error: {
      main: natura.complementary.colorBrdNatCpRed2,
      contrastText: natura.primary.colorBrdNatPrimaryWhite,
    },
    background: {
      paper: '#222222',
      default: natura.primary.colorBrdNatPrimaryWhite,
    },
    text: {
      primary: natura.primary.colorBrdBlack,
      secondary: natura.primary.colorBrdBlack,
      disabled: natura.primary.colorBrdNatGray3,
      hint: natura.primary.colorBrdNatGray2
    }
  }
};
