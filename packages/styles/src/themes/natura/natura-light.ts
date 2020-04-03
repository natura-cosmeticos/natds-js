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
  colorTokens: { naturaLightColorTokens }
} = tokens;

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
      disabled: hexToRgba(naturaLightColorTokens.colorOnPrimaryLight, 0.24)
    },
    primary: {
      main: naturaLightColorTokens.colorPrimary,
      light: naturaLightColorTokens.colorPrimaryLight,
      dark: naturaLightColorTokens.colorPrimaryDark,
      contrastText: naturaLightColorTokens.colorOnPrimary
    },
    secondary: {
      main: naturaLightColorTokens.colorSecondary,
      light: naturaLightColorTokens.colorSecondaryLight,
      dark: naturaLightColorTokens.colorSecondaryDark,
      contrastText: naturaLightColorTokens.colorOnSecondary
    },
    error: {
      main: naturaLightColorTokens.colorAlert,
      contrastText: naturaLightColorTokens.colorOnAlert
    },
    success: {
      main: naturaLightColorTokens.colorSuccess,
      contrastText: naturaLightColorTokens.colorOnSuccess
    },
    background: {
      paper: naturaLightColorTokens.colorSurface,
      default: naturaLightColorTokens.colorBackground,
      paperContrastText: naturaLightColorTokens.colorOnSurface,
      defaultContrastText: naturaLightColorTokens.colorOnBackground
    },
    text: {
      primary: naturaLightColorTokens.colorHighEmphasis,
      secondary: naturaLightColorTokens.colorMediumEmphasis,
      disabled: naturaLightColorTokens.colorLowEmphasis,
      hint: naturaLightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: naturaLightColorTokens.colorHighlight,
      link: naturaLightColorTokens.colorLink,
      linkContrastText: naturaLightColorTokens.colorOnLink,
      warning: naturaLightColorTokens.colorWarning,
      warningContrastText: naturaLightColorTokens.colorOnWarning
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
        color: naturaLightColorTokens.colorOnPrimary
      },
      outlinedSecondary: {
        color: naturaLightColorTokens.colorOnPrimary
      },
      textPrimary: {
        color: naturaLightColorTokens.colorOnPrimary
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
        color: naturaLightColorTokens.colorOnPrimary
      }
    },
    MuiIconButton: {
      root: {
        padding: "8px",
        color: naturaLightColorTokens.colorHighEmphasis
      },
      sizeSmall: {
        padding: "4px"
      }
    },
    MuiExpansionPanel: {
      root: {
        border: `transparent 1px solid`,
        "&$expanded": {
          borderColor: naturaLightColorTokens.colorPrimary
        },
        "&$disabled": {
          backgroundColor: naturaLightColorTokens.colorSurface,
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
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorSecondary,
            0.16
          ),
          "&:hover": {
            backgroundColor: hexToRgba(
              naturaLightColorTokens.colorOnSecondary,
              0.04
            )
          }
        },
        "&.Mui-disabled": {
          opacity: 0.32
        }
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorOnSecondary,
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
          naturaLightColorTokens.colorOnSecondary,
          0.12
        ),
        color: naturaLightColorTokens.colorOnPrimary,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorOnSecondary,
            0.24
          ),
          color: naturaLightColorTokens.colorOnPrimary
        },
        "&$disabled": {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: naturaLightColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: naturaLightColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(naturaLightColorTokens.colorOnSecondary, 0.12),
        color: naturaLightColorTokens.colorOnSecondary
      },
      outlinedPrimary: {
        color: naturaLightColorTokens.colorOnSecondary
      },
      outlinedSecondary: {
        color: naturaLightColorTokens.colorOnSecondary
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
        color: hexToRgba(naturaLightColorTokens.colorOnSecondary, 0.8),
        "&:hover": {
          color: naturaLightColorTokens.colorOnSecondary
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(naturaLightColorTokens.colorSurface, 0.8),
        "&:hover": {
          color: naturaLightColorTokens.colorSurface
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(naturaLightColorTokens.colorSurface, 0.8),
        "&:hover": {
          color: naturaLightColorTokens.colorSurface
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
        color: naturaLightColorTokens.colorOnPrimaryLight,
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
        color: naturaLightColorTokens.colorOnPrimaryLight,
        minHeight: "24px",
        padding: "16px 35px 16px 16px",
        borderRadius: "4px",
        boxShadow: `${naturaLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        "&:hover": {
          boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&:hover:not(:placeholder-shown)": {
          boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&:focus": {
          boxShadow: `${naturaLightColorTokens.colorPrimary} 0 0 0 2px`
        },
        "&:focus:not(:read-only)": {
          boxShadow: `${naturaLightColorTokens.colorPrimary} 0 0 0 2px`
        },
        "&:hover:not(:read-only):not(:disabled):not(:focus)": {
          boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&:not(:placeholder-shown)": {
          boxShadow: `${naturaLightColorTokens.colorHighEmphasis} 0 0 0 1px`
        },
        "&:placeholder-shown": {
          boxShadow: `${naturaLightColorTokens.colorLowEmphasis} 0 0 0 1px`
        }
      }
    },
    MuiInputAdornment: {
      root: {
        position: "absolute",
        right: "0"
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
          color: naturaLightColorTokens.colorMediumEmphasis
        }
      },
      formControl: {
        transform: "none",
        marginTop: "-4px"
      }
    }
  }
};
