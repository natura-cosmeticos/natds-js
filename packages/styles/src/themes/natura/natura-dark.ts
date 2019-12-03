import tokens from "../../tokens";
import { ITheme } from "../ITheme";
import { typography } from "./typography";
import { fontSize } from "../../tokens/fontSize/fontSize";
import { spacing } from "../../tokens/spacing/spacing";
import { avatarSizes } from "../../tokens/avatarSizes/avatarSizes";
import { buttonSize } from "../../tokens/buttonSize/buttonSize";

const { natura } = tokens.colors;

export const naturaDark: ITheme = {
  shape: {
    borderRadius: 4,
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
      contrastText: '#FAFAFA'
    },
    secondary: {
      main: natura.primary.colorBrdNatPrimaryOrange,
      light: "#FFF8E1",
      dark: natura.primary.colorBrdNatPrimaryOrange,
      contrastText: '#FAFAFA'
    },
    error: {
      main: natura.complementary.colorBrdNatCpRed2,
      contrastText: '#FAFAFA'
    },
    success: {
      main: natura.complementary.colorBrdNatCpGreen1
    },
    background: {
      paper: "#222222",
      default: natura.primary.colorBrdNatPrimaryWhite
    },
    text: {
      primary: '#FAFAFA',
      secondary: natura.grayscale.colorBrdNatGray2,
      disabled: '#222222',
      hint: natura.grayscale.colorBrdNatGray1
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
    }
  }
};
