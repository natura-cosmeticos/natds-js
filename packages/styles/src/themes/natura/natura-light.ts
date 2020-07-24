/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */

/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */

import hexToRgba from "hex-to-rgba";
import merge from "lodash.merge";
import tokens from "../../tokens";
import { ITheme } from "../ITheme";
import { getBaseTheme } from "../base";

const {
  colorTokens: { naturaLightColorTokens },
} = tokens;

export const naturaLight: ITheme = merge(getBaseTheme(), {
  palette: {
    action: {
      disabled: hexToRgba(naturaLightColorTokens.colorOnPrimaryLight, 0.24),
    },
    primary: {
      main: naturaLightColorTokens.colorPrimary,
      light: naturaLightColorTokens.colorPrimaryLight,
      dark: naturaLightColorTokens.colorPrimaryDark,
      contrastText: naturaLightColorTokens.colorOnPrimary,
    },
    secondary: {
      main: naturaLightColorTokens.colorSecondary,
      light: naturaLightColorTokens.colorSecondaryLight,
      dark: naturaLightColorTokens.colorSecondaryDark,
      contrastText: naturaLightColorTokens.colorOnSecondary,
    },
    error: {
      main: naturaLightColorTokens.colorAlert,
      contrastText: naturaLightColorTokens.colorOnAlert,
    },
    success: {
      main: naturaLightColorTokens.colorSuccess,
      contrastText: naturaLightColorTokens.colorOnSuccess,
    },
    background: {
      paper: naturaLightColorTokens.colorSurface,
      default: naturaLightColorTokens.colorBackground,
      paperContrastText: naturaLightColorTokens.colorOnSurface,
      defaultContrastText: naturaLightColorTokens.colorOnBackground,
    },
    text: {
      primary: naturaLightColorTokens.colorHighEmphasis,
      secondary: naturaLightColorTokens.colorMediumEmphasis,
      disabled: naturaLightColorTokens.colorLowEmphasis,
      hint: naturaLightColorTokens.colorLowEmphasis,
    },
    complementary: {
      highlight: naturaLightColorTokens.colorHighlight,
      link: naturaLightColorTokens.colorLink,
      linkContrastText: naturaLightColorTokens.colorOnLink,
      warning: naturaLightColorTokens.colorWarning,
      warningContrastText: naturaLightColorTokens.colorOnWarning,
    },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: naturaLightColorTokens.colorOnPrimary,
      },
      outlinedSecondary: {
        color: naturaLightColorTokens.colorOnPrimary,
        "&.Mui-disabled": {
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
        },
      },
      text: {
        "&.Mui-disabled": {
          color: `${naturaLightColorTokens.colorHighlight}3D`,
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
        },
      },
      contained: {
        "&.Mui-disabled": {
          color: `${naturaLightColorTokens.colorHighlight}3D`,
          backgroundColor: `${naturaLightColorTokens.colorHighlight}14`,
        },
      },
      outlined: {
        borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
        "&.Mui-disabled": {
          color: `${naturaLightColorTokens.colorHighlight}3D`,
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
        },
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: naturaLightColorTokens.colorOnPrimary,
      },
    },
    MuiIconButton: {
      root: {
        color: naturaLightColorTokens.colorHighEmphasis,
      },
    },
    MuiExpansionPanel: {
      root: {
        "&$expanded": {
          borderColor: naturaLightColorTokens.colorPrimary,
        },
        "&$disabled": {
          backgroundColor: naturaLightColorTokens.colorSurface,
          opacity: 0.32,
        },
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        "&$disabled": {

          /**
           * @todo replace hardcoded value with a opacity token
           */
          opacity: 1,
        },
      },
    },
    MuiListItem: {
      root: {
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorOnSecondary,
            0.04,
          ),
        },
        "&$selected": {
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorSecondary,
            0.16,
          ),
          "&:hover": {
            backgroundColor: hexToRgba(
              naturaLightColorTokens.colorOnSecondary,
              0.04,
            ),
          },
        },
        "&.Mui-disabled": {
          opacity: 0.32,
        },
      },
      button: {
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorOnSecondary,
            0.04,
          ),
        },
      },
    },
    MuiTab: {
      root: {
        "&$disabled": {
          opacity: 0.24,
        },
      },
      textColorInherit: {
        "&$disabled": {
          opacity: 0.24,
        },
      },
    },
    MuiChip: {
      root: {
        backgroundColor: hexToRgba(
          naturaLightColorTokens.colorOnSecondary,
          0.12,
        ),
        color: naturaLightColorTokens.colorOnPrimary,
        "& $avatar": {
          backgroundColor: hexToRgba(
            naturaLightColorTokens.colorOnSecondary,
            0.24,
          ),
          color: naturaLightColorTokens.colorOnPrimary,
        },
        "&$disabled": {
          opacity: 0.4,
        },
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: naturaLightColorTokens.colorPrimaryDark,
        },
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: naturaLightColorTokens.colorPrimaryDark,
        },
      },
      outlined: {
        borderColor: hexToRgba(naturaLightColorTokens.colorOnSecondary, 0.12),
        color: naturaLightColorTokens.colorOnSecondary,
      },
      outlinedPrimary: {
        color: naturaLightColorTokens.colorOnSecondary,
      },
      outlinedSecondary: {
        color: naturaLightColorTokens.colorOnSecondary,
      },
      deleteIcon: {
        color: hexToRgba(naturaLightColorTokens.colorOnSecondary, 0.8),
        "&:hover": {
          color: naturaLightColorTokens.colorOnSecondary,
        },
      },
      deleteIconColorPrimary: {
        color: hexToRgba(naturaLightColorTokens.colorSurface, 0.8),
        "&:hover": {
          color: naturaLightColorTokens.colorSurface,
        },
      },
      deleteIconColorSecondary: {
        color: hexToRgba(naturaLightColorTokens.colorSurface, 0.8),
        "&:hover": {
          color: naturaLightColorTokens.colorSurface,
        },
      },
    },
    MuiInputBase: {
      root: {
        color: naturaLightColorTokens.colorHighEmphasis,
        "&:hover": {
          boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
        },
        "&.MuiError": {
          boxShadow: `${naturaLightColorTokens.colorAlert} 0 0 0 2px`,
          "&:hover": {
            boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${naturaLightColorTokens.colorAlert} 0 0 0 2px`,
          },
        },
        "&.MuiSuccess": {
          boxShadow: `${naturaLightColorTokens.colorSuccess} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${naturaLightColorTokens.colorSuccess} 0 0 0 1px`,
          },
        },
        "&.Mui-focused:not(.MuiError):not(.MuiSuccess)": {
          boxShadow: `${naturaLightColorTokens.colorPrimary} 0 0 0 2px`,
        },
        "&.MuiFilled:not(.Mui-focused)": {
          boxShadow: `${naturaLightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${naturaLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
        },
        "&:hover.Mui-disabled": {
          boxShadow: `${naturaLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        },
        boxShadow: `${naturaLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
      },
      input: {
        color: naturaLightColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          opacity: 0.24,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&.Mui-focused": {
          color: naturaLightColorTokens.colorMediumEmphasis,
        },
        "&.Mui-error": {
          color: naturaLightColorTokens.colorAlert,
        },
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
        "&.Mui-disabled": {
          color: naturaLightColorTokens.colorLowEmphasis,
        },
      },
    },
    MuiButtonGroup: {
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderColor: naturaLightColorTokens.colorPrimaryDark,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderColor: naturaLightColorTokens.colorSecondaryDark,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${naturaLightColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedTextPrimary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextSecondary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${naturaLightColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${naturaLightColorTokens.colorHighlight}3D`,
          },
        },
      },
    },
    MuiAlert: {
      standardSuccess: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorSuccess, 0.16),
      },
      outlinedSuccess: {
        color: naturaLightColorTokens.colorHighEmphasis,
      },
      standardError: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorAlert, 0.16),
      },
      outlinedError: {
        color: naturaLightColorTokens.colorHighEmphasis,
      },
      standardWarning: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorWarning, 0.16),
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorWarning,
        },
      },
      outlinedWarning: {
        color: naturaLightColorTokens.colorHighEmphasis,
        borderColor: naturaLightColorTokens.colorWarning,
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorWarning,
        },
      },
      filledWarning: {
        color: naturaLightColorTokens.colorOnWarning,
        backgroundColor: naturaLightColorTokens.colorWarning,
      },
      standardInfo: {
        color: naturaLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaLightColorTokens.colorLink, 0.16),
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorLink,
        },
      },
      outlinedInfo: {
        color: naturaLightColorTokens.colorHighEmphasis,
        borderColor: naturaLightColorTokens.colorLink,
        "& .MuiAlert-icon": {
          color: naturaLightColorTokens.colorLink,
        },
      },
      filledInfo: {
        backgroundColor: naturaLightColorTokens.colorLink,
      },
    },
  },
});
