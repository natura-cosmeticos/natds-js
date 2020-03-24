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
  colorTokens: { theBodyShopDarkColorTokens }
} = tokens;

export const theBodyShopDark: ITheme = {
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
      disabled: hexToRgba(theBodyShopDarkColorTokens.colorOnSecondary, 0.24)
    },
    primary: {
      main: theBodyShopDarkColorTokens.colorPrimary,
      light: theBodyShopDarkColorTokens.colorPrimaryLight,
      dark: theBodyShopDarkColorTokens.colorPrimaryDark,
      contrastText: theBodyShopDarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: theBodyShopDarkColorTokens.colorSecondary,
      light: theBodyShopDarkColorTokens.colorSecondaryLight,
      dark: theBodyShopDarkColorTokens.colorSecondaryDark,
      contrastText: theBodyShopDarkColorTokens.colorOnSecondary
    },
    error: {
      main: theBodyShopDarkColorTokens.colorAlert,
      contrastText: theBodyShopDarkColorTokens.colorOnAlert
    },
    success: {
      main: theBodyShopDarkColorTokens.colorSuccess,
      contrastText: theBodyShopDarkColorTokens.colorOnSuccess
    },
    background: {
      paper: theBodyShopDarkColorTokens.colorOnPrimary,
      default: theBodyShopDarkColorTokens.colorBackground,
      paperContrastText: theBodyShopDarkColorTokens.colorOnBackground,
      defaultContrastText: theBodyShopDarkColorTokens.colorOnBackground
    },
    text: {
      primary: theBodyShopDarkColorTokens.colorHighEmphasis,
      secondary: theBodyShopDarkColorTokens.colorMediumEmphasis,
      disabled: theBodyShopDarkColorTokens.colorLowEmphasis,
      hint: theBodyShopDarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: theBodyShopDarkColorTokens.colorHighlight,
      link: theBodyShopDarkColorTokens.colorLink,
      linkContrastText: theBodyShopDarkColorTokens.colorOnLink,
      warning: theBodyShopDarkColorTokens.colorWarning,
      warningContrastText: theBodyShopDarkColorTokens.colorOnSecondary
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
        color: theBodyShopDarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis
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
        color: theBodyShopDarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
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
          borderColor: theBodyShopDarkColorTokens.colorPrimary
        },
        "&$disabled": {
          backgroundColor: theBodyShopDarkColorTokens.colorSurface,
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
          background: hexToRgba(
            theBodyShopDarkColorTokens.colorSecondary,
            0.16
          ),
          "&:hover": {
            backgroundColor: hexToRgba(
              theBodyShopDarkColorTokens.colorOnSecondary,
              0.04
            )
          }
        }
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(
            theBodyShopDarkColorTokens.colorOnSecondary,
            0.04
          )
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
        backgroundColor: hexToRgba(
          theBodyShopDarkColorTokens.colorOnBackground,
          0.12
        ),
        color: theBodyShopDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(
            theBodyShopDarkColorTokens.colorOnBackground,
            0.24
          ),
          color: theBodyShopDarkColorTokens.colorOnBackground
        },
        "&$disabled": {
          opacity: 0.4
        }
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(
            theBodyShopDarkColorTokens.colorOnBackground,
            0.16
          )
        },
        "&:focus": {
          backgroundColor: hexToRgba(
            theBodyShopDarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: theBodyShopDarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: theBodyShopDarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(
          theBodyShopDarkColorTokens.colorOnBackground,
          0.12
        ),
        color: theBodyShopDarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: theBodyShopDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: theBodyShopDarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: theBodyShopDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: theBodyShopDarkColorTokens.colorSecondary
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
        color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: theBodyShopDarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: theBodyShopDarkColorTokens.colorOnBackground
        }
      }
    },
    MuiTextField: {
      "& .MuiInputLabel": {
        marginTop: "20px"
      }
    },
    MuiInputBase: {
      root: {
        color: theBodyShopDarkColorTokens.colorOnPrimaryDark,
        "&:hover": {
          boxShadow: `${theBodyShopDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&.Mui-focused": {
          boxShadow: `${theBodyShopDarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        "&.MuiInput-underline:before": {
          borderBottom: "none"
        },
        "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "none"
        },
        "&.MuiInput-underline:after": {
          borderBottom: "none"
        },
        padding: "12px",
        borderRadius: "4px",
        boxShadow: `${theBodyShopDarkColorTokens.colorLowEmphasis} 0 0 0 1px`
      },
      input: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis
      }
    },
    MuiInputLabel: {
      formControl: {
        transform: "none",
        marginTop: "-4px"
      },
      shrink: {
        transform: "none",
        marginTop: "-4px"
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: fontSize.subtitle2.fontSize,
        "&.Mui-focused": {
          fontSize: fontSize.subtitle2.fontSize,
          color: theBodyShopDarkColorTokens.colorMediumEmphasis
        },
        "&.Mui-error": {
          color: theBodyShopDarkColorTokens.colorHighEmphasis
        }
      },
      formControl: {
        transform: "none"
      }
    },
    MuiFormHelperText: {
      root: {
        "&.Mui-error": {
          color: theBodyShopDarkColorTokens.colorMediumEmphasis
        }
      }
    }
  }
};
