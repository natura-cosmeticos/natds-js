import tokens from '../../tokens';
import { ITheme } from '../ITheme';

const { natura } = tokens.colors;

export const naturaLight: ITheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: natura.primary.colorBrdNatPrimaryYellow,
    accent: natura.primary.colorBrdNatPrimaryOrange,
    background: "#FAFAFA",
    surface: natura.primary.colorBrdNatPrimaryWhite,
    error: natura.complementary.colorBrdNatCpRed2,
    text: natura.primary.colorBrdBlack,
    disabled: natura.primary.colorBrdNatGray2,
    placeholder: natura.primary.colorBrdNatGray1,
    backdrop: natura.primary.colorBrdNatGray3
  }
};
