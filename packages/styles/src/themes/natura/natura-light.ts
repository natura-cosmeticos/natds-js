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

export const naturaLight: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  avatarSizes,
  buttonSizes,
  iconSizes,
  sizes,
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
      paper: natura.primary.colorBrdNatPrimaryWhite,
      default: "#FAFAFA",
      paperContrastText: natura.grayscale.colorBrdNatGray,
      defaultContrastText: natura.grayscale.colorBrdNatGray
    },
    text: {
      primary: natura.grayscale.colorBrdNatGray,
      secondary: natura.grayscale.colorBrdNatGray1,
      disabled: natura.grayscale.colorBrdNatGray2,
      hint: natura.grayscale.colorBrdNatGray2
    },
    complementary: {
      highlight: natura.grayscale.colorBrdBlack,
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
    },
    MuiIconButton: {
      root: {
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
        backgroundColor: hexToRgba(natura.grayscale.colorBrdBlack, 0.12),
        color: natura.grayscale.colorBrdNatGray,
        "& $avatar": {
          backgroundColor: hexToRgba(natura.grayscale.colorBrdBlack, 0.24)
        },
      },
      outlined: {
        borderColor: hexToRgba(natura.grayscale.colorBrdBlack, 0.12),
        color: natura.grayscale.colorBrdBlack
      },
      outlinedPrimary: {
        color: natura.grayscale.colorBrdBlack,
      },
      outlinedSecondary: {
        color: natura.grayscale.colorBrdBlack,
      },
      icon: {
        fontSize: `${sizes.standard}px`,
      },
      iconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
        marginTop: "1px"
      },
      deleteIcon: {
        width: `${sizes.standard}px`,
        height: `${sizes.standard}px`,
        fontSize: `${sizes.standard}px`,
        color: hexToRgba(natura.grayscale.colorBrdBlack, 0.8),
        '&:hover': {
          color: hexToRgba(natura.grayscale.colorBrdBlack, 0.6),
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
      },
      deleteIconColorPrimary: {
        color: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.8),
        '&:hover': {
          color: natura.primary.colorBrdNatPrimaryWhite
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.8),
        '&:hover': {
          color: natura.primary.colorBrdNatPrimaryWhite
        }
      }
    }
  }
};
