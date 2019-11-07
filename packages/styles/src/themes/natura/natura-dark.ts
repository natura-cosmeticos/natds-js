import tokens from '../../tokens';
import { ITheme } from '../ITheme';
import { typography } from './typography';
import { fontSize } from '../../tokens/fontSize/fontSize';

const { natura } = tokens.colors;

export const naturaDark: ITheme = {
  shape: {
    borderRadius: 4
  },
  palette: {
    type: 'light',
    primary: {
      main: natura.primary.colorBrdNatPrimaryYellow,
      light: '#FEFDE8',
      dark: '#EF8426',
      contrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    secondary: {
      main: natura.primary.colorBrdNatPrimaryOrange,
      light: '#FFF8E1',
      dark: natura.primary.colorBrdNatPrimaryOrange,
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
  },
  typography: {
    ...typography,
    ...fontSize
  }
};
