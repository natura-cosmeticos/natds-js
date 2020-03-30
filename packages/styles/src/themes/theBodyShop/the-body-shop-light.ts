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

const { colorTokens: { theBodyShopLightColorTokens } } = tokens;

export const theBodyShopLight: ITheme = {
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
      disabled: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.24)
    },
    primary: {
      main: theBodyShopLightColorTokens.colorPrimary,
      light: theBodyShopLightColorTokens.colorPrimaryLight,
      dark: theBodyShopLightColorTokens.colorPrimaryDark,
      contrastText: theBodyShopLightColorTokens.colorOnPrimary
    },
    secondary: {
      main: theBodyShopLightColorTokens.colorSecondary,
      light: theBodyShopLightColorTokens.colorSecondaryLight,
      dark: theBodyShopLightColorTokens.colorSecondaryDark,
      contrastText: theBodyShopLightColorTokens.colorOnSecondary
    },
    error: {
      main: theBodyShopLightColorTokens.colorAlert,
      contrastText: theBodyShopLightColorTokens.colorOnAlert
    },
    success: {
      main: theBodyShopLightColorTokens.colorSuccess,
      contrastText: theBodyShopLightColorTokens.colorOnSuccess
    },
    background: {
      paper: theBodyShopLightColorTokens.colorSurface,
      default: theBodyShopLightColorTokens.colorBackground,
      paperContrastText: theBodyShopLightColorTokens.colorOnSurface,
      defaultContrastText: theBodyShopLightColorTokens.colorOnBackground
    },
    text: {
      primary: theBodyShopLightColorTokens.colorHighEmphasis,
      secondary: theBodyShopLightColorTokens.colorMediumEmphasis,
      disabled: theBodyShopLightColorTokens.colorLowEmphasis,
      hint: theBodyShopLightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: theBodyShopLightColorTokens.colorHighlight,
      link: theBodyShopLightColorTokens.colorLink,
      linkContrastText: theBodyShopLightColorTokens.colorOnLink,
      warning: theBodyShopLightColorTokens.colorWarning,
      warningContrastText: theBodyShopLightColorTokens.colorOnWarning
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
        color: theBodyShopLightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: theBodyShopLightColorTokens.colorHighEmphasis
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
        color: theBodyShopLightColorTokens.colorHighEmphasis
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
          borderColor: theBodyShopLightColorTokens.colorPrimary
        },
        "&$disabled": {
          backgroundColor: theBodyShopLightColorTokens.colorOnPrimary,
          opacity: 0.32
        }
      },
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
            theBodyShopLightColorTokens.colorOnSurface,
            0.04
          )
        },
        "&$selected": {
          backgroundColor: hexToRgba(theBodyShopLightColorTokens.colorSecondary, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.04)
          },
          "&:focus": {
            outline: "none"
          }
        },
        "&.Mui-disabled": {
          opacity: 0.32
        },
      },
      gutters: {
        "&:focus": {
          outline: "none"
        }
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.04)
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
        backgroundColor: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.12),
        color: theBodyShopLightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.24),
          color: theBodyShopLightColorTokens.colorHighEmphasis,
        },
        "&$disabled": {
          opacity: .4
        },
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: theBodyShopLightColorTokens.colorPrimary
        }
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: theBodyShopLightColorTokens.colorSecondary
        }
      },
      outlined: {
        borderColor: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.12),
        color: theBodyShopLightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: theBodyShopLightColorTokens.colorHighlight,
      },
      outlinedSecondary: {
        color: theBodyShopLightColorTokens.colorHighlight,
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
        color: hexToRgba(theBodyShopLightColorTokens.colorHighlight, 0.8),
        "&:hover": {
          color: theBodyShopLightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
      },
      deleteIconColorPrimary: {
        color: hexToRgba(theBodyShopLightColorTokens.colorOnPrimary, 0.8),
        "&:hover": {
          color: theBodyShopLightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(theBodyShopLightColorTokens.colorOnSecondary, 0.8),
        "&:hover": {
          color: theBodyShopLightColorTokens.colorOnSecondary
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
        color: theBodyShopLightColorTokens.colorOnPrimaryLight,
        "&:hover": {
          boxShadow: `${theBodyShopLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
        },
        "&.Mui-focused": {
          boxShadow: `${theBodyShopLightColorTokens.colorPrimary} 0 0 0 2px`
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
          boxShadow: `${theBodyShopLightColorTokens.colorLowEmphasis} 0 0 0 1px`
        },
        padding: "12px",
        borderRadius: "4px",
        boxShadow: `${theBodyShopLightColorTokens.colorLowEmphasis} 0 0 0 1px`
      },
      input: {
        color: theBodyShopLightColorTokens.colorHighEmphasis
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
          color: theBodyShopLightColorTokens.colorMediumEmphasis
        },
        "&.Mui-error": {
          color: theBodyShopLightColorTokens.colorAlert
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
          color: theBodyShopLightColorTokens.colorLowEmphasis
        }
      }
    },
    MuiSvgIcon: {
      root: {

      }
    }
  }
};
