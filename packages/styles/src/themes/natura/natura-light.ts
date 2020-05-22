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
        color: naturaLightColorTokens.colorOnPrimary,
        "&.Mui-disabled": {
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`
        }
      },
      sizeSmall: {
        ...buttonSizes.small,
        ...fontSize.subtitle2
      },
      root: {
        ...buttonSizes.medium,
        ...fontSize.subtitle2
      },
      sizeLarge: {
        ...buttonSizes.large,
        ...fontSize.subtitle2
      },
      text: {
        padding: null,
        "&.Mui-disabled": {
          color: `${naturaLightColorTokens.colorHighlight}3D`,
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        "&.Mui-disabled": {
          color: `${naturaLightColorTokens.colorHighlight}3D`,
          backgroundColor: `${naturaLightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
        "&.Mui-disabled": {
          color: `${naturaLightColorTokens.colorHighlight}3D`,
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`
        }
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
        cursor: "pointer",
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorOnSecondary,
            0.04
          )
        },
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
          },
          "&:focus": {
            outline: "none"
          }
        },
        "&.Mui-disabled": {
          opacity: 0.32
        }
      },
      gutters: {
        "&:focus": {
          outline: "none"
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
        color: naturaLightColorTokens.colorHighEmphasis,
        "&:hover": {
          boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&.MuiError": {
          boxShadow: `${naturaLightColorTokens.colorAlert} 0 0 0 2px`,
          "&:hover": {
            boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
          },
          "&.Mui-focused": {
            boxShadow: `${naturaLightColorTokens.colorAlert} 0 0 0 2px`
          }
        },
        "&.MuiSuccess": {
          boxShadow: `${naturaLightColorTokens.colorSuccess} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
          },
          "&.Mui-focused": {
            boxShadow: `${naturaLightColorTokens.colorSuccess} 0 0 0 1px`
          }
        },
        "&.Mui-focused:not(.MuiError):not(.MuiSuccess)": {
          boxShadow: `${naturaLightColorTokens.colorPrimary} 0 0 0 2px`
        },
        "&.MuiFilled:not(.Mui-focused)": {
          boxShadow: `${naturaLightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
          }
        },
        "&.MuiInput-underline:before": {
          borderBottom: "none"
        },
        "&.MuiInput-underline.Mui-disabled:before": {
          borderBottomStyle: "none"
        },
        "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "none"
        },
        "&.MuiInput-underline:after": {
          borderBottom: "none"
        },
        "&:hover.Mui-disabled": {
          boxShadow: `${naturaLightColorTokens.colorLowEmphasis} 0 0 0 1px`
        },
        padding: "12px",
        borderRadius: "4px",
        boxShadow: `${naturaLightColorTokens.colorLowEmphasis} 0 0 0 1px`
      },
      input: {
        color: naturaLightColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          opacity: 0.24
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
          color: naturaLightColorTokens.colorMediumEmphasis
        },
        "&.Mui-error": {
          color: naturaLightColorTokens.colorAlert
        }
      },
      formControl: {
        transform: "none",
        marginTop: "-4px"
      }
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent"
        },
        "&.Mui-disabled": {
          color: naturaLightColorTokens.colorLowEmphasis
        }
      }
    },
    MuiButtonGroup: {
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderColor: naturaLightColorTokens.colorPrimaryDark,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderColor: naturaLightColorTokens.colorSecondaryDark,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${naturaLightColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${naturaLightColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiAlert: {
      root: {
        width: 278,
        padding: spacing.spacingSmall,
        ...fontSize.body1
      },
      icon: {
        marginRight: spacing.spacingTiny
      },
      message: {
        padding: "5px 0"
      },
      standardSuccess: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: naturaLightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: naturaLightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorWarning, 0.16),
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: naturaLightColorTokens.colorHighEmphasis,
        borderColor: naturaLightColorTokens.colorWarning,
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: naturaLightColorTokens.colorOnWarning,
        backgroundColor: naturaLightColorTokens.colorWarning
      },
      standardInfo: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorLink, 0.16),
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: naturaLightColorTokens.colorHighEmphasis,
        borderColor: naturaLightColorTokens.colorLink,
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: naturaLightColorTokens.colorLink
      }
    },
    MuiAlertTitle: {
      root: {
        ...fontSize.h6
      }
    }
  }
};
