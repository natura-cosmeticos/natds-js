/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */

/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */

import hexToRgba from "hex-to-rgba";
import merge from "lodash.merge";
import tokens from "../../tokens";

import { ITheme } from "../ITheme";
import { getBaseTheme } from "../base";

const {
  colorTokens: { naturaDarkColorTokens },
} = tokens;

export const naturaDark: ITheme = merge(getBaseTheme(), {
  palette: {
    action: {
      disabled: hexToRgba(naturaDarkColorTokens.colorOnSecondary, 0.24),
    },
    primary: {
      main: naturaDarkColorTokens.colorPrimary,
      light: naturaDarkColorTokens.colorPrimaryLight,
      dark: naturaDarkColorTokens.colorPrimaryDark,
      contrastText: naturaDarkColorTokens.colorOnPrimary,
    },
    secondary: {
      main: naturaDarkColorTokens.colorSecondary,
      light: naturaDarkColorTokens.colorPrimaryLight,
      dark: naturaDarkColorTokens.colorPrimaryDark,
      contrastText: naturaDarkColorTokens.colorOnSecondary,
    },
    error: {
      main: naturaDarkColorTokens.colorAlert,
      contrastText: naturaDarkColorTokens.colorOnAlert,
    },
    success: {
      main: naturaDarkColorTokens.colorSuccess,
      contrastText: naturaDarkColorTokens.colorOnSuccess,
    },
    background: {
      paper: naturaDarkColorTokens.colorSurface,
      default: naturaDarkColorTokens.colorBackground,
      paperContrastText: naturaDarkColorTokens.colorOnSurface,
      defaultContrastText: naturaDarkColorTokens.colorOnBackground,
    },
    text: {
      primary: naturaDarkColorTokens.colorHighEmphasis,
      secondary: naturaDarkColorTokens.colorMediumEmphasis,
      disabled: naturaDarkColorTokens.colorLowEmphasis,
      hint: naturaDarkColorTokens.colorLowEmphasis,
    },
    complementary: {
      highlight: naturaDarkColorTokens.colorHighlight,
      link: naturaDarkColorTokens.colorLink,
      linkContrastText: naturaDarkColorTokens.colorOnLink,
      warning: naturaDarkColorTokens.colorWarning,
      warningContrastText: naturaDarkColorTokens.colorOnSecondary,
    },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: naturaDarkColorTokens.colorHighEmphasis,
      },
      outlinedSecondary: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
        },
      },
      text: {
        "&.Mui-disabled": {
          color: `${naturaDarkColorTokens.colorHighlight}3D`,
          borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
        },
      },
      contained: {
        "&.Mui-disabled": {
          color: `${naturaDarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${naturaDarkColorTokens.colorHighlight}14`,
        },
      },
      outlined: {
        borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
        "&.Mui-disabled": {
          color: `${naturaDarkColorTokens.colorHighlight}3D`,
          borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
        },
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: naturaDarkColorTokens.colorHighEmphasis,
      },
    },
    MuiIconButton: {
      root: {
        color: naturaDarkColorTokens.colorHighEmphasis,
      },
    },
    MuiExpansionPanel: {
      root: {
        border: "transparent 1px solid",
        "&$expanded": {
          borderColor: naturaDarkColorTokens.colorPrimary,
        },
        "&$disabled": {
          backgroundColor: naturaDarkColorTokens.colorSurface,
          opacity: 0.32,
        },
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        "&$disabled": {
          opacity: 1,
        },
      },
    },
    MuiListItem: {
      root: {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorHighEmphasis,
            0.04,
          ),
        },
        "&$selected": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorSecondary,
            0.16,
          ),
          "&:hover": {
            backgroundColor: hexToRgba(
              naturaDarkColorTokens.colorOnSecondary,
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
            naturaDarkColorTokens.colorOnSecondary,
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
          naturaDarkColorTokens.colorOnBackground,
          0.12,
        ),
        color: naturaDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorOnBackground,
            0.24,
          ),
          color: naturaDarkColorTokens.colorOnBackground,
        },
        "&$disabled": {
          opacity: 0.4,
        },
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorOnBackground,
            0.16,
          ),
        },
        "&:focus": {
          backgroundColor: hexToRgba(
            naturaDarkColorTokens.colorOnBackground,
            0.16,
          ),
        },
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: naturaDarkColorTokens.colorPrimaryDark,
        },
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: naturaDarkColorTokens.colorPrimaryDark,
        },
      },
      outlined: {
        borderColor: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.12),
        color: naturaDarkColorTokens.colorOnBackground,
      },
      outlinedPrimary: {
        color: naturaDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: naturaDarkColorTokens.colorPrimary,
        },
      },
      outlinedSecondary: {
        color: naturaDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: naturaDarkColorTokens.colorSecondary,
        },
      },
      deleteIcon: {
        color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.6),
        },
      },
      deleteIconColorPrimary: {
        color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: naturaDarkColorTokens.colorOnBackground,
        },
      },
      deleteIconColorSecondary: {
        color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: naturaDarkColorTokens.colorOnBackground,
        },
      },
    },
    MuiInputBase: {
      root: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        "&:hover": {
          boxShadow: `${naturaDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
        },
        "&.MuiError": {
          boxShadow: `${naturaDarkColorTokens.colorAlert} 0 0 0 2px`,
          "&:hover": {
            boxShadow: `${naturaDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${naturaDarkColorTokens.colorAlert} 0 0 0 2px`,
          },
        },
        "&.MuiSuccess": {
          boxShadow: `${naturaDarkColorTokens.colorSuccess} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${naturaDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${naturaDarkColorTokens.colorSuccess} 0 0 0 1px`,
          },
        },
        "&.Mui-focused:not(.MuiError):not(.MuiSuccess)": {
          boxShadow: `${naturaDarkColorTokens.colorPrimary} 0 0 0 2px`,
        },
        "&.MuiFilled:not(.Mui-focused)": {
          boxShadow: `${naturaDarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${naturaDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
        },
        "&:hover.Mui-disabled": {
          boxShadow: `${naturaDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        },
        boxShadow: `${naturaDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
      },
      input: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          opacity: 0.24,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&.Mui-focused": {
          color: naturaDarkColorTokens.colorMediumEmphasis,
        },
        "&.Mui-error": {
          color: naturaDarkColorTokens.colorHighEmphasis,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        "&.Mui-error": {
          color: naturaDarkColorTokens.colorMediumEmphasis,
        },
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
        "&.Mui-disabled": {
          color: naturaDarkColorTokens.colorLowEmphasis,
        },
      },
    },
    MuiButtonGroup: {
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderColor: naturaDarkColorTokens.colorPrimaryDark,
          "&.Mui-disabled": {
            borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderColor: naturaDarkColorTokens.colorSecondaryDark,
          "&.Mui-disabled": {
            borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${naturaDarkColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedTextPrimary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextSecondary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${naturaDarkColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${naturaDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fill: naturaDarkColorTokens.colorMediumEmphasis,
      },
    },
    MuiAlert: {
      standardSuccess: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaDarkColorTokens.colorSuccess, 0.16),
      },
      outlinedSuccess: {
        color: naturaDarkColorTokens.colorHighEmphasis,
      },
      standardError: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaDarkColorTokens.colorAlert, 0.16),
      },
      outlinedError: {
        color: naturaDarkColorTokens.colorHighEmphasis,
      },
      standardWarning: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaDarkColorTokens.colorWarning, 0.16),
        "& .MuiAlert-icon": {
          color: naturaDarkColorTokens.colorWarning,
        },
      },
      outlinedWarning: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        borderColor: naturaDarkColorTokens.colorWarning,
        "& .MuiAlert-icon": {
          color: naturaDarkColorTokens.colorWarning,
        },
      },
      filledWarning: {
        color: naturaDarkColorTokens.colorOnWarning,
        backgroundColor: naturaDarkColorTokens.colorWarning,
      },
      standardInfo: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaDarkColorTokens.colorLink, 0.16),
        "& .MuiAlert-icon": {
          color: naturaDarkColorTokens.colorLink,
        },
      },
      outlinedInfo: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        borderColor: naturaDarkColorTokens.colorLink,
        "& .MuiAlert-icon": {
          color: naturaDarkColorTokens.colorLink,
        },
      },
      filledInfo: {
        backgroundColor: naturaDarkColorTokens.colorLink,
      },
    },
  },
});
