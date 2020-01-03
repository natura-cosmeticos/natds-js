import tokens from "../../tokens";
import { ITheme } from "../ITheme";
import { typography } from "./typography";
import { fontSize } from "../../tokens/fontSize";
import { spacing } from "../../tokens/spacing";
import { avatarSizes } from "../../tokens/avatarSizes";
import { buttonSizes } from "../../tokens/buttonSizes";
import { elevation } from "../../tokens/elevation";
import { iconSizes } from "../../tokens/iconSizes";
import { sizes } from "../../tokens/sizes";

const { natura } = tokens.colors;

export const naturaDark: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  sizes,
  avatarSizes,
  buttonSizes,
  iconSizes,
  spacing: spacing.spacing,
  palette: {
    type: "light",
    action: {
      disabled: "rgba(0, 0, 0, .24)"
    },
    primary: {
      main: natura.primary.colorBrdNatPrimaryYellow,
      light: "#FEFDE8",
      dark: "#EF8426",
      contrastText: natura.grayscale.colorBrdNatGray
    },
    secondary: {
      main: natura.primary.colorBrdNatPrimaryOrange,
      light: "#FFF8E1",
      dark: '#FF5808',
      contrastText: natura.grayscale.colorBrdBlack
    },
    error: {
      main: natura.complementary.colorBrdNatCpRed2,
      contrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    success: {
      main: natura.complementary.colorBrdNatCpGreen1,
      contrastText: natura.primary.colorBrdNatPrimaryWhite,
    },
    background: {
      paper: natura.grayscale.colorBrdNatGray,
      default: '#222222',
      paperContrastText: natura.primary.colorBrdNatPrimaryWhite,
      defaultContrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    text: {
      primary: '#FAFAFA',
      secondary: natura.grayscale.colorBrdNatGray2,
      disabled: '#222222',
      hint: natura.grayscale.colorBrdNatGray1
    },
    complementary: {
      link: natura.complementary.colorBrdNatCpBlue1,
      linkContrastText: natura.primary.colorBrdNatPrimaryWhite,
      warning: natura.complementary.colorBrdNatCpOrange4,
      warningContrastText: natura.grayscale.colorBrdNatGray
    }
  },
  typography: {
    ...typography,
    ...fontSize
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: '#FAFAFA'
      },
      outlinedSecondary: {
        color: '#FAFAFA'
      },
      sizeSmall: {
        fontSize: "0.875rem",
        minHeight: "32px"
      },
      root: {
        fontSize: "0.875rem",
        minHeight: "40px",
        padding: "8px 16px"
      },
      sizeLarge: {
        fontSize: "0.875rem",
        minHeight: "48px"
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: '#FAFAFA'
      }
    },
    MuiIconButton: {
      root: {
        padding: "8px"
      },
      sizeSmall: {
        padding: "4px"
      }
    }
  }
};
