
import hexToRgba from 'hex-to-rgba';
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
      light: "#FEFDE8",
      dark: "#EF8426",
      contrastText: natura.grayscale.colorBrdBlack
    },
    error: {
      main: natura.complementary.colorBrdNatCpRed2,
      contrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    success: {
      main: natura.complementary.colorBrdNatCpGreen1,
      contrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    background: {
      paper: natura.grayscale.colorBrdNatGray,
      default: "#121212",
      paperContrastText: natura.primary.colorBrdNatPrimaryWhite,
      defaultContrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    text: {
      primary: "#FAFAFA",
      secondary: natura.grayscale.colorBrdNatGray2,
      disabled: natura.grayscale.colorBrdNatGray1,
      hint: natura.grayscale.colorBrdNatGray1
    },
    complementary: {
      highlight: natura.primary.colorBrdNatPrimaryWhite,
      link: natura.complementary.colorBrdNatCpBlue1,
      linkContrastText: natura.primary.colorBrdNatPrimaryWhite,
      warning: natura.complementary.colorBrdNatCpOrange4,
      warningContrastText: natura.grayscale.colorBrdBlack
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
        color: "#FAFAFA"
      },
      outlinedSecondary: {
        color: "#FAFAFA"
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
        color: "#FAFAFA"
      }
    },
    MuiIconButton: {
      root: {
        color: "#FAFAFA",
        padding: "8px"
      },
      sizeSmall: {
        padding: "4px"
      }
    },
    MuiToolbar: {
      root: {
        padding: "0 16px",
        "@media (min-width: 600px)": {
          padding: "0 16px"
        }
      },
      gutters: {
        padding: "0 16px",
        "@media (min-width: 600px)": {
          padding: "0 16px"
        }
      },
      regular: {
        minHeight: "56px",
        "@media (min-width: 600px)": {
          minHeight: "56px"
        }
      },
      dense: {
        minHeight: "56px",
        "@media (min-width: 600px)": {
          minHeight: "56px"
        }
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          background: hexToRgba(natura.primary.colorBrdNatPrimaryOrange, 0.16),
          "&:hover": {
            background: hexToRgba(natura.primary.colorBrdNatPrimaryOrange, 0.8)
          }
        },
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryOrange, 0.8)
        }
      }
    },
    MuiTab: {
      root: {
        "&$disabled": {
          opacity: 0.24
        },
      },
      textColorInherit: {
        "&$disabled": {
          opacity: 0.24
        }
      },
      wrapper: {
        "& > *:first-child": {
          marginBottom: "2px !important"
        }
      }
    },
    MuiChip: {
      root: {
        backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.12),
        color: natura.grayscale.colorBrdNatGray3,
        "& $avatar": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.24),
          color: natura.grayscale.colorBrdNatGray3
        },
        "& $avatarColorPrimary": {
          backgroundColor: natura.primary.colorBrdNatPrimaryYellow,
          color: natura.grayscale.colorBrdNatGray3
        },
        "& $avatarColorSecondary": {
          backgroundColor: natura.primary.colorBrdNatPrimaryOrange,
          color: natura.grayscale.colorBrdNatGray3
        },
        "&$disabled": {
          backgroundColor: natura.grayscale.colorBrdNatGray3,
          color: hexToRgba(natura.grayscale.colorBrdNatGray, 0.48),
          opacity: 1,

          "& $avatarColorPrimary": {
            backgroundColor: hexToRgba(natura.grayscale.colorBrdNatGray2, 0.48),
            color: hexToRgba(natura.grayscale.colorBrdNatGray, 0.48),
          },
          "& $avatarColorSecondary": {
            backgroundColor: hexToRgba(natura.grayscale.colorBrdNatGray2, 0.48),
            color: hexToRgba(natura.grayscale.colorBrdNatGray, 0.48),
          },
          "& $avatar": {
            backgroundColor: hexToRgba(natura.grayscale.colorBrdNatGray2, 0.48),
            color: hexToRgba(natura.grayscale.colorBrdNatGray, 0.48),
          },
          "& $icon": {
            color: hexToRgba(natura.grayscale.colorBrdNatGray, 0.48),
          },
          "& $deleteIcon": {
            color: hexToRgba(natura.grayscale.colorBrdNatGray, 0.48),
          },
        },
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.24),
        },
        "&:active": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.24),
        },
        "&:focus": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.24),
        },
      },
      colorPrimary: {
        backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryYellow, 0.64),
        color: natura.grayscale.colorBrdNatGray3,
      },
      colorSecondary: {
        backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryOrange, 0.64),
        color: natura.grayscale.colorBrdNatGray3
      },
      outlinedPrimary: {
        borderColor: natura.primary.colorBrdNatPrimaryYellow,
        color: natura.grayscale.colorBrdNatGray3
      },
      outlinedSecondary: {
        borderColor: natura.primary.colorBrdNatPrimaryOrange,
        color: natura.grayscale.colorBrdNatGray3
      },
      icon: {
        fontSize: `${sizes.standard}px`
      },
      iconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
      },
      deleteIcon: {
        width: `${sizes.standard}px`,
        height: `${sizes.standard}px`,
        fontSize: `${sizes.standard}px`,
        color: natura.grayscale.colorBrdNatGray3,
        '&:hover': {
          color: natura.grayscale.colorBrdNatGray3
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
      },
      deleteIconColorPrimary: {
        color: natura.grayscale.colorBrdNatGray3,
        '&:hover': {
          color: natura.grayscale.colorBrdNatGray3
        }
      },
      deleteIconColorSecondary: {
        color: natura.grayscale.colorBrdNatGray3,
        '&:hover': {
          color: natura.grayscale.colorBrdNatGray3
        }
      },
      deleteIconOutlinedColorPrimary: {
        color: natura.grayscale.colorBrdNatGray3,
        '&:hover': {
          color: natura.grayscale.colorBrdNatGray3
        }
      },
      deleteIconOutlinedColorSecondary: {
        color: natura.grayscale.colorBrdNatGray3,
        '&:hover': {
          color: natura.grayscale.colorBrdNatGray3
        }
      }
    }
  }
};
