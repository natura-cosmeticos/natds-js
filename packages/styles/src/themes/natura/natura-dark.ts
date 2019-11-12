import tokens from '../../tokens';
import { ITheme } from '../ITheme';
import { typography } from './typography';
import { fontSize } from '../../tokens/fontSize/fontSize';
import { spacing } from '../../tokens/spacing/spacing';

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
      contrastText: natura.common.colorBrdNatGray
    },
    secondary: {
      main: natura.primary.colorBrdNatPrimaryOrange,
      light: '#FFF8E1',
      dark: natura.primary.colorBrdNatPrimaryOrange,
      contrastText: natura.common.colorBrdNatGray
    },
    error: {
      main: natura.complementary.colorBrdNatCpRed2,
      contrastText: natura.common.colorBrdNatGray
    },
    background: {
      paper: '#222222',
      default: natura.primary.colorBrdNatPrimaryWhite
    },
    text: {
      primary: natura.common.colorBrdNatGray,
      secondary: natura.common.colorBrdNatGray,
      disabled: natura.common.colorBrdNatGray3,
      hint: natura.common.colorBrdNatGray2
    }
  },
  typography: {
    ...typography,
    ...fontSize
  },
  spacing: spacing.spacing
};
