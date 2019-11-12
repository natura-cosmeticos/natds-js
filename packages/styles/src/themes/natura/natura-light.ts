import tokens from '../../tokens';
import { ITheme } from '../ITheme';
import { typography } from './typography';
import { fontSize } from '../../tokens/fontSize/fontSize';
import { spacing } from '../../tokens/spacing/spacing';

const { natura } = tokens.colors;

export const naturaLight: ITheme = {
  shape: {
    borderRadius: 4
  },
  palette: {
    type: 'light',
    primary: {
      main: natura.primary.colorBrdNatPrimaryYellow,
      light: '#FEFDE8',
      dark: '#EF8426',
      contrastText: natura.grayscale.colorBrdNatGray
    },
    secondary: {
      main: natura.primary.colorBrdNatPrimaryOrange,
      light: '#FFF8E1',
      dark: natura.primary.colorBrdNatPrimaryOrange,
      contrastText: natura.grayscale.colorBrdNatGray
    },
    error: {
      main: natura.complementary.colorBrdNatCpRed2,
      contrastText: natura.grayscale.colorBrdNatGray
    },
    background: {
      paper: '#FAFAFA',
      default: natura.primary.colorBrdNatPrimaryWhite
    },
    text: {
      primary: natura.grayscale.colorBrdNatGray,
      secondary: natura.grayscale.colorBrdNatGray,
      disabled: natura.grayscale.colorBrdNatGray3,
      hint: natura.grayscale.colorBrdNatGray2
    }
  },
  typography: {
    ...typography,
    ...fontSize
  },
  spacing: spacing.spacing
};
