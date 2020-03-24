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
  colorTokens: { avonLightColorTokens }
} = tokens;

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
      disabled: hexToRgba(avonLightColorTokens.colorHighlight, 0.24)
    },
    primary: {
      main: avonLightColorTokens.colorPrimary,
      light: avonLightColorTokens.colorPrimaryLight,
      dark: avonLightColorTokens.colorPrimaryDark,
      contrastText: avonLightColorTokens.colorOnPrimary
    },
    secondary: {
      main: avonLightColorTokens.colorSecondary,
      light: avonLightColorTokens.colorSecondaryLight,
      dark: avonLightColorTokens.colorSecondaryDark,
      contrastText: avonLightColorTokens.colorOnSecondary
    },
    error: {
      main: avonLightColorTokens.colorAlert,
      contrastText: avonLightColorTokens.colorOnAlert
    },
    success: {
      main: avonLightColorTokens.colorSuccess,
      contrastText: avonLightColorTokens.colorOnSuccess
    },
    background: {
      paper: avonLightColorTokens.colorSurface,
      default: avonLightColorTokens.colorBackground,
      paperContrastText: avonLightColorTokens.colorOnSurface,
      defaultContrastText: avonLightColorTokens.colorOnBackground
    },
    text: {
      primary: avonLightColorTokens.colorHighEmphasis,
      secondary: avonLightColorTokens.colorMediumEmphasis,
      disabled: avonLightColorTokens.colorLowEmphasis,
      hint: avonLightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: avonLightColorTokens.colorHighlight,
      link: avonLightColorTokens.colorLink,
      linkContrastText: avonLightColorTokens.colorOnLink,
      warning: avonLightColorTokens.colorWarning,
      warningContrastText: avonLightColorTokens.colorOnWarning
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
        color: avonLightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: avonLightColorTokens.colorHighEmphasis
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
        color: avonLightColorTokens.colorHighEmphasis
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
          borderColor: avonLightColorTokens.colorPrimary
        },
        "&$disabled": {
          backgroundColor: avonLightColorTokens.colorOnPrimary,
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
          backgroundColor: hexToRgba(avonLightColorTokens.colorSecondary, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(
              avonLightColorTokens.colorHighlight,
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
          backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.04)
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
        backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.12),
        color: avonLightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.24),
          color: avonLightColorTokens.colorHighEmphasis
        },
        "&$disabled": {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: avonLightColorTokens.colorPrimary
        }
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: avonLightColorTokens.colorSecondary
        }
      },
      outlined: {
        borderColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.12),
        color: avonLightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: avonLightColorTokens.colorHighlight
      },
      outlinedSecondary: {
        color: avonLightColorTokens.colorHighlight
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
        color: hexToRgba(avonLightColorTokens.colorHighlight, 0.8),
        "&:hover": {
          color: avonLightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonLightColorTokens.colorOnPrimary, 0.8),
        "&:hover": {
          color: avonLightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonLightColorTokens.colorOnSecondary, 0.8),
        "&:hover": {
          color: avonLightColorTokens.colorOnSecondary
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
        color: avonLightColorTokens.colorOnPrimaryLight,
        "&:hover": {
          boxShadow: `${avonLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&.Mui-focused": {
          boxShadow: `${avonLightColorTokens.colorPrimary} 0 0 0 2px`
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
        boxShadow: `${avonLightColorTokens.colorLowEmphasis} 0 0 0 1px`
      },
      input: {
        color: avonLightColorTokens.colorOnPrimaryLight
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
          color: avonLightColorTokens.colorMediumEmphasis
        }
      },
      formControl: {
        transform: "none",
        marginTop: "-4px"
      }
    }
  }
};
