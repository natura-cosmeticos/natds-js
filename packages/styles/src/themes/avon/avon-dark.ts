
import hexToRgba from "hex-to-rgba";
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
const SECONDARY_DARK = "#B7B7B7";
const SECONDARY_LIGHT = "#FFFFFF";
const SECONDARY_CONTRAST = "#000000";

const GRAY_DARK = "#121212";
const GRAY_LIGHT = "#FAFAFA";

export const avonDark: ITheme = {
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
      paper: natura.grayscale.colorBrdNatGray,
      default: GRAY_DARK,
      paperContrastText: natura.primary.colorBrdNatPrimaryWhite,
      defaultContrastText: natura.primary.colorBrdNatPrimaryWhite
    },
    text: {
      primary: GRAY_LIGHT,
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
        color: GRAY_LIGHT
      },
      outlinedSecondary: {
        color: GRAY_LIGHT
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
        color: GRAY_LIGHT
      }
    },
    MuiIconButton: {
      root: {
        color: GRAY_LIGHT,
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
          backgroundColor: natura.grayscale.colorBrdNatGray,
          opacity: 0.32
        }
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        alignItems: "flex-start",
        marginTop: "8px",
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
          background: hexToRgba(natura.primary.colorBrdNatPrimaryOrange, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(natura.grayscale.colorBrdBlack, 0.04)
          }
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
        padding: "0 4px"
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
        color: natura.primary.colorBrdNatPrimaryWhite,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.24),
          color: natura.primary.colorBrdNatPrimaryWhite
        },
        "&$disabled": {
          opacity: .4
        },
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.16),
        },
        "&:focus": {
          backgroundColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.16),
        }
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
        borderColor: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.12),
        color: natura.primary.colorBrdNatPrimaryWhite
      },
      outlinedPrimary: {
        color: natura.primary.colorBrdNatPrimaryWhite,
        "& $avatar": {
          backgroundColor: natura.primary.colorBrdNatPrimaryYellow,
        },
      },
      outlinedSecondary: {
        color: natura.primary.colorBrdNatPrimaryWhite,
        "& $avatar": {
          backgroundColor: natura.primary.colorBrdNatPrimaryOrange,
        },
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
        color: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.8),
        "&:hover": {
          color: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.6),
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
      },
      deleteIconColorPrimary: {
        color: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.8),
        "&:hover": {
          color: natura.primary.colorBrdNatPrimaryWhite
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(natura.primary.colorBrdNatPrimaryWhite, 0.8),
        "&:hover": {
          color: natura.primary.colorBrdNatPrimaryWhite
        }
      }
    }
  }
};
