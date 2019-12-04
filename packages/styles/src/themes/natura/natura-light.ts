import tokens from "../../tokens";
import { ITheme } from "../ITheme";
import { typography } from "./typography";
import { fontSize } from "../../tokens/fontSize/fontSize";
import { spacing } from "../../tokens/spacing/spacing";
import { avatarSizes } from "../../tokens/avatarSizes/avatarSizes";
import { buttonSize } from "../../tokens/buttonSize/buttonSize";

const { natura } = tokens.colors;

export const naturaLight: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  avatarSizes,
  buttonSize,
  spacing: spacing.spacing,
  palette: {
    type: "light",
    primary: {
      main: natura.primary.colorBrdNatPrimaryYellow,
      light: "#FEFDE8",
      dark: "#EF8426",
      contrastText: natura.grayscale.colorBrdNatGray
    },
    secondary: {
      main: natura.primary.colorBrdNatPrimaryOrange,
      light: "#FFF8E1",
      dark: natura.primary.colorBrdNatPrimaryOrange,
      contrastText: natura.grayscale.colorBrdNatGray
    },
    error: {
      main: natura.complementary.colorBrdNatCpRed2,
      contrastText: natura.grayscale.colorBrdNatGray
    },
    success: {
      main: natura.complementary.colorBrdNatCpGreen1
    },
    background: {
      paper: "#FAFAFA",
      default: natura.primary.colorBrdNatPrimaryWhite
    },
    text: {
      primary: natura.grayscale.colorBrdNatGray,
      secondary: natura.grayscale.colorBrdNatGray1,
      disabled: natura.grayscale.colorBrdNatGray3,
      hint: natura.grayscale.colorBrdNatGray2
    },
    complementary: {
      link: natura.complementary.colorBrdNatCpBlue1,
      warning: natura.complementary.colorBrdNatCpOrange4
    }
  },
  typography: {
    ...typography,
    ...fontSize
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: natura.grayscale.colorBrdNatGray
      },
      outlinedSecondary: {
        color: natura.grayscale.colorBrdNatGray
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
        color: natura.grayscale.colorBrdNatGray
      }
    }
  }
};
