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
  colorTokens: { naturaDarkColorTokens }
} = tokens;

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
      disabled: hexToRgba(naturaDarkColorTokens.colorOnSecondary, 0.24)
    },
    primary: {
      main: naturaDarkColorTokens.colorPrimary,
      light: naturaDarkColorTokens.colorPrimaryLight,
      dark: naturaDarkColorTokens.colorPrimaryDark,
      contrastText: naturaDarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: naturaDarkColorTokens.colorSecondary,
      light: naturaDarkColorTokens.colorPrimaryLight,
      dark: naturaDarkColorTokens.colorPrimaryDark,
      contrastText: naturaDarkColorTokens.colorOnSecondary
    },
    error: {
      main: naturaDarkColorTokens.colorAlert,
      contrastText: naturaDarkColorTokens.colorOnAlert
    },
    success: {
      main: naturaDarkColorTokens.colorSuccess,
      contrastText: naturaDarkColorTokens.colorOnSuccess
    },
    background: {
      paper: naturaDarkColorTokens.colorOnPrimary,
      default: naturaDarkColorTokens.colorBackground,
      paperContrastText: naturaDarkColorTokens.colorOnBackground,
      defaultContrastText: naturaDarkColorTokens.colorOnBackground
    },
    text: {
      primary: naturaDarkColorTokens.colorHighEmphasis,
      secondary: naturaDarkColorTokens.colorMediumEmphasis,
      disabled: naturaDarkColorTokens.colorLowEmphasis,
      hint: naturaDarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: naturaDarkColorTokens.colorHighlight,
      link: naturaDarkColorTokens.colorLink,
      linkContrastText: naturaDarkColorTokens.colorOnLink,
      warning: naturaDarkColorTokens.colorWarning,
      warningContrastText: naturaDarkColorTokens.colorOnSecondary
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
        color: naturaDarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: naturaDarkColorTokens.colorHighEmphasis
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
        color: naturaDarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: naturaDarkColorTokens.colorHighEmphasis,
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
          borderColor: naturaDarkColorTokens.colorPrimary
        },
        "&$disabled": {
          backgroundColor: naturaDarkColorTokens.colorSurface,
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
          background: hexToRgba(naturaDarkColorTokens.colorSecondary, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(
              naturaDarkColorTokens.colorOnSecondary,
              0.04
            )
          }
        }
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorOnSecondary,
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
          naturaDarkColorTokens.colorOnBackground,
          0.12
        ),
        color: naturaDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorOnBackground,
            0.24
          ),
          color: naturaDarkColorTokens.colorOnBackground
        },
        "&$disabled": {
          opacity: 0.4
        }
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorOnBackground,
            0.16
          )
        },
        "&:focus": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: naturaDarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: naturaDarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.12),
        color: naturaDarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: naturaDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: naturaDarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: naturaDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: naturaDarkColorTokens.colorSecondary
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
        color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: naturaDarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: naturaDarkColorTokens.colorOnBackground
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
        color: naturaDarkColorTokens.colorOnPrimaryDark,
        "&.MuiInput-underline:before": {
          borderBottom: "none"
        },
        "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "none"
        },
        "&.MuiInput-underline:after": {
          borderBottom: "none"
        }
      },
      input: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        minHeight: "24px",
        padding: "16px 35px 16px 16px",
        borderRadius: "4px",
        boxShadow: `${naturaDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        "&:not(:placeholder-shown)": {
          boxShadow: `${naturaDarkColorTokens.colorHighEmphasis} 0 0 0 1px`
        },
        "&:placeholder-shown": {
          boxShadow: `${naturaDarkColorTokens.colorLowEmphasis} 0 0 0 1px`
        },
        "&:hover": {
          boxShadow: `${naturaDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&:hover:not(:placeholder-shown)": {
          boxShadow: `${naturaDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&:focus": {
          boxShadow: `${naturaDarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        "&:focus:not(:read-only)": {
          boxShadow: `${naturaDarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        "&:hover:not(:read-only):not(:disabled):not(:focus)": {
          boxShadow: `${naturaDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
        }
      }
    },
    MuiInputAdornment: {
      root: {
        position: "absolute",
        right: "0"
      },
      positionEnd: {
        marginRight: spacing.spacingTiny
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
          color: naturaDarkColorTokens.colorMediumEmphasis
        },
        "&.Mui-error": {
          color: naturaDarkColorTokens.colorHighEmphasis
        }
      },
      formControl: {
        transform: "none"
      }
    },
    MuiFormHelperText: {
      root: {
        "&.Mui-error": {
          color: naturaDarkColorTokens.colorMediumEmphasis
        }
      }
    }
  }
};
