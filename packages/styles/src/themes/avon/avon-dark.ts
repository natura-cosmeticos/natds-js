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
const {
  colorTokens: { avonDarkColorTokens }
} = tokens;

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
      disabled: hexToRgba(avonDarkColorTokens.colorOnSecondary, 0.24)
    },
    primary: {
      main: avonDarkColorTokens.colorPrimary,
      light: avonDarkColorTokens.colorPrimaryLight,
      dark: avonDarkColorTokens.colorPrimaryDark,
      contrastText: avonDarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: avonDarkColorTokens.colorSecondary,
      light: avonDarkColorTokens.colorSecondaryLight,
      dark: avonDarkColorTokens.colorSecondaryDark,
      contrastText: avonDarkColorTokens.colorOnSecondaryLight
    },
    error: {
      main: avonDarkColorTokens.colorAlert,
      contrastText: avonDarkColorTokens.colorOnAlert
    },
    success: {
      main: avonDarkColorTokens.colorSuccess,
      contrastText: avonDarkColorTokens.colorOnSuccess
    },
    background: {
      paper: avonDarkColorTokens.colorOnPrimary,
      default: avonDarkColorTokens.colorBackground,
      paperContrastText: avonDarkColorTokens.colorOnBackground,
      defaultContrastText: avonDarkColorTokens.colorOnBackground
    },
    text: {
      primary: avonDarkColorTokens.colorHighEmphasis,
      secondary: avonDarkColorTokens.colorMediumEmphasis,
      disabled: avonDarkColorTokens.colorLowEmphasis,
      hint: avonDarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: avonDarkColorTokens.colorHighlight,
      link: avonDarkColorTokens.colorLink,
      linkContrastText: avonDarkColorTokens.colorOnLink,
      warning: avonDarkColorTokens.colorWarning,
      warningContrastText: avonDarkColorTokens.colorOnSecondary
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
        color: avonDarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: avonDarkColorTokens.colorHighEmphasis
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
        color: avonDarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: avonDarkColorTokens.colorHighEmphasis,
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
          borderColor: avonDarkColorTokens.colorPrimary
        },
        "&$disabled": {
          backgroundColor: avonDarkColorTokens.colorSurface,
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
          background: hexToRgba(avonDarkColorTokens.colorSecondary, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(
              avonDarkColorTokens.colorOnSecondary,
              0.04
            )
          }
        }
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(avonDarkColorTokens.colorOnSecondary, 0.04)
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
        }
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
        backgroundColor: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.12),
        color: avonDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.24
          ),
          color: avonDarkColorTokens.colorOnBackground
        },
        "&$disabled": {
          opacity: 0.4
        }
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.16
          )
        },
        "&:focus": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: avonDarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: avonDarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.12),
        color: avonDarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: avonDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: avonDarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: avonDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: avonDarkColorTokens.colorSecondary
        }
      },
      icon: {
        fontSize: `${sizes.standard}px`
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
        color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: avonDarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: avonDarkColorTokens.colorOnBackground
        }
      }
    }
  }
};
