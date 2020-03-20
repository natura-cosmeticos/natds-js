import { IColorThemeTokens } from "../IColorThemeTokens";
import { natura } from "../../natura";

export const naturaDarkColorTokens: IColorThemeTokens = {
  colorPrimary: natura.primary.colorBrdNatPrimaryYellow,
  colorOnPrimary: natura.grayscale.colorBrdNatGray,
  colorPrimaryLight: "#FEFDE8",
  colorOnPrimaryLight: natura.grayscale.colorBrdNatGray,
  colorPrimaryDark: "#EF8426",
  colorOnPrimaryDark: natura.grayscale.colorBrdNatGray,
  colorSecondary: natura.primary.colorBrdNatPrimaryOrange,
  colorOnSecondary: natura.grayscale.colorBrdBlack,
  colorSecondaryLight: "#FFF8E1",
  colorOnSecondaryLight: natura.grayscale.colorBrdBlack,
  colorSecondaryDark: "#FF5808",
  colorOnSecondaryDark: natura.grayscale.colorBrdBlack,
  colorBackground: "#121212",
  colorOnBackground: natura.primary.colorBrdNatPrimaryWhite,
  colorSurface: natura.grayscale.colorBrdNatGray,
  colorOnSurface: natura.primary.colorBrdNatPrimaryWhite,
  colorHighlight: natura.primary.colorBrdNatPrimaryWhite,
  colorHighEmphasis: "#FAFAFA",
  colorMediumEmphasis: natura.grayscale.colorBrdNatGray2,
  colorLowEmphasis: natura.grayscale.colorBrdNatGray1,
  colorLink: natura.complementary.colorBrdNatCpBlue1,
  colorOnLink: natura.primary.colorBrdNatPrimaryWhite,
  colorSuccess: natura.complementary.colorBrdNatCpGreen1,
  colorOnSuccess: natura.primary.colorBrdNatPrimaryWhite,
  colorWarning: natura.complementary.colorBrdNatCpOrange4,
  colorOnWarning: natura.grayscale.colorBrdNatGray,
  colorAlert: natura.complementary.colorBrdNatCpRed2,
  colorOnAlert: natura.primary.colorBrdNatPrimaryWhite
};
