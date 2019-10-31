import tokens from '../../tokens';
import { ITheme } from '../ITheme';

const { natura } = tokens.colors;

export const naturaDark: ITheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: natura.primary.colorBrdNatPrimaryBrown,
    secondary: natura.primary.colorBrdNatPrimaryYellow,
    accent: natura.primary.colorBrdNatPrimaryOrange,
    background: "#222222",
    surface: natura.primary.colorBrdNatGray,
    error: natura.complementary.colorBrdNatCpRed2,
    text: natura.primary.colorBrdBlack,
    disabled: natura.primary.colorBrdNatGray1,
    placeholder: natura.primary.colorBrdNatGray,
    backdrop: natura.primary.colorBrdNatGray2
  }
};
