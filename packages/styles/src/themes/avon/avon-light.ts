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

const PRIMARY_MAIN = "#F091C9";
const PRIMARY_DARK = "#890A6C";
const PRIMARY_LIGHT = "#FAE5F2";
const PRIMARY_CONTRAST = "#FFFFFF";

const SECONDARY_MAIN = "#E9E9E9";
const SECONDARY_DARK = "#1B1B1B";
const SECONDARY_LIGHT = "#F9F9F9";
const SECONDARY_CONTRAST = "#1B1B1B";

const GRAY_LIGHT = "#FAFAFA";

export const avonLight: ITheme = {
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
      disabled: hexToRgba(natura.grayscale.colorBrdBlack, 0.24),
    },
    primary: {
      main: PRIMARY_MAIN,
      light: PRIMARY_LIGHT,
      dark: PRIMARY_DARK,
      contrastText: PRIMARY_CONTRAST
    },
    secondary: {
      main: SECONDARY_MAIN,
      light: SECONDARY_LIGHT,
      dark: SECONDARY_DARK,
      contrastText: SECONDARY_CONTRAST
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
      default: GRAY_LIGHT,
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
      highlight: SECONDARY_CONTRAST,
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
    MuiExpansionPanel: {
      root: {
        border: `transparent 1px solid`,
        "&$expanded": {
          borderColor: natura.primary.colorBrdNatPrimaryYellow
        },
        "&$disabled": {
          backgroundColor: natura.primary.colorBrdNatPrimaryWhite,
          opacity: 0.32
        }
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        alignItems: 'flex-start',
        marginTop: '8px',
        "&$disabled": {
          opacity: 1
        }
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
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryOrange, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(natura.grayscale.colorBrdBlack, 0.04)
          }
        },
        '&.Mui-disabled': {
          opacity: 0.32
        },
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(natura.grayscale.colorBrdBlack, 0.04)
        }
      }
    },
    MuiBadge: {
      badge: {
        padding: '0 4px'
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
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(natura.grayscale.colorBrdBlack, 0.24),
          color: natura.grayscale.colorBrdNatGray,
        },
        "&$disabled": {
          opacity: .4
        },
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: PRIMARY_DARK
        }
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: PRIMARY_DARK
        }
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
          color: natura.grayscale.colorBrdBlack
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
