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
  colorTokens: { avonDarkColorTokens },
} = tokens;

export const avonDark: ITheme = merge(getBaseTheme(), {
  palette: {
    action: {
      disabled: hexToRgba(avonDarkColorTokens.colorOnSecondary, 0.24),
    },
    primary: {
      main: avonDarkColorTokens.colorPrimary,
      light: avonDarkColorTokens.colorPrimaryLight,
      dark: avonDarkColorTokens.colorPrimaryDark,
      contrastText: avonDarkColorTokens.colorOnPrimary,
    },
    secondary: {
      main: avonDarkColorTokens.colorSecondary,
      light: avonDarkColorTokens.colorSecondaryLight,
      dark: avonDarkColorTokens.colorSecondaryDark,
      contrastText: avonDarkColorTokens.colorOnSecondaryLight,
    },
    error: {
      main: avonDarkColorTokens.colorAlert,
      contrastText: avonDarkColorTokens.colorOnAlert,
    },
    success: {
      main: avonDarkColorTokens.colorSuccess,
      contrastText: avonDarkColorTokens.colorOnSuccess,
    },
    background: {
      paper: avonDarkColorTokens.colorSurface,
      default: avonDarkColorTokens.colorBackground,
      paperContrastText: avonDarkColorTokens.colorOnSurface,
      defaultContrastText: avonDarkColorTokens.colorOnBackground,
    },
    text: {
      primary: avonDarkColorTokens.colorHighEmphasis,
      secondary: avonDarkColorTokens.colorMediumEmphasis,
      disabled: avonDarkColorTokens.colorLowEmphasis,
      hint: avonDarkColorTokens.colorLowEmphasis,
    },
    complementary: {
      highlight: avonDarkColorTokens.colorHighlight,
      link: avonDarkColorTokens.colorLink,
      linkContrastText: avonDarkColorTokens.colorOnLink,
      warning: avonDarkColorTokens.colorWarning,
      warningContrastText: avonDarkColorTokens.colorOnSecondary,
    },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: avonDarkColorTokens.colorHighEmphasis,
      },
      outlinedSecondary: {
        color: avonDarkColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
        },
      },
      text: {
        "&.Mui-disabled": {
          color: `${avonDarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
        },
      },
      contained: {
        "&.Mui-disabled": {
          color: `${avonDarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${avonDarkColorTokens.colorHighlight}14`,
        },
      },
      outlined: {
        borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
        "&.Mui-disabled": {
          color: `${avonDarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
        },
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: avonDarkColorTokens.colorHighEmphasis,
      },
    },
    MuiIconButton: {
      root: {
        color: avonDarkColorTokens.colorHighEmphasis,
      },
    },
    MuiExpansionPanel: {
      root: {
        border: "transparent 1px solid",
        "&$expanded": {
          borderColor: avonDarkColorTokens.colorPrimary,
        },
        "&$disabled": {
          backgroundColor: avonDarkColorTokens.colorSurface,
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
        "&:hover": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorHighEmphasis,
            0.16,
          ),
        },
        "&$selected": {
          background: hexToRgba(avonDarkColorTokens.colorSecondary, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(
              avonDarkColorTokens.colorOnSecondary,
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
          backgroundColor: hexToRgba(avonDarkColorTokens.colorOnSecondary, 0.04),
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
        backgroundColor: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.12),
        color: avonDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.24,
          ),
          color: avonDarkColorTokens.colorOnBackground,
        },
        "&$disabled": {
          opacity: 0.4,
        },
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.16,
          ),
        },
        "&:focus": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.16,
          ),
        },
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: avonDarkColorTokens.colorPrimaryDark,
        },
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: avonDarkColorTokens.colorPrimaryDark,
        },
      },
      outlined: {
        borderColor: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.12),
        color: avonDarkColorTokens.colorOnBackground,
      },
      outlinedPrimary: {
        color: avonDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: avonDarkColorTokens.colorPrimary,
        },
      },
      outlinedSecondary: {
        color: avonDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: avonDarkColorTokens.colorSecondary,
        },
      },
      deleteIcon: {
        color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.6),
        },
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: avonDarkColorTokens.colorOnBackground,
        },
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: avonDarkColorTokens.colorOnBackground,
        },
      },
    },
    MuiInputBase: {
      root: {
        color: avonDarkColorTokens.colorHighEmphasis,
        "&:hover": {
          boxShadow: `${avonDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
        },
        "&.MuiError": {
          boxShadow: `${avonDarkColorTokens.colorAlert} 0 0 0 2px`,
          "&:hover": {
            boxShadow: `${avonDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${avonDarkColorTokens.colorAlert} 0 0 0 2px`,
          },
        },
        "&.MuiSuccess": {
          boxShadow: `${avonDarkColorTokens.colorSuccess} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${avonDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${avonDarkColorTokens.colorSuccess} 0 0 0 1px`,
          },
        },
        "&.Mui-focused:not(.MuiError):not(.MuiSuccess)": {
          boxShadow: `${avonDarkColorTokens.colorPrimary} 0 0 0 2px`,
        },
        "&.MuiFilled:not(.Mui-focused)": {
          boxShadow: `${avonDarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${avonDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
        },
        "&:hover.Mui-disabled": {
          boxShadow: `${avonDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        },
        boxShadow: `${avonDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
      },
      input: {
        color: avonDarkColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          opacity: 0.24,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&.Mui-focused": {
          color: avonDarkColorTokens.colorMediumEmphasis,
        },
        "&.Mui-error": {
          color: avonDarkColorTokens.colorHighEmphasis,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        "&.Mui-error": {
          color: avonDarkColorTokens.colorMediumEmphasis,
        },
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
        "&.Mui-disabled": {
          color: avonDarkColorTokens.colorLowEmphasis,
        },
      },
    },
    MuiButtonGroup: {
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderColor: avonDarkColorTokens.colorPrimaryDark,
          "&.Mui-disabled": {
            borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderColor: avonDarkColorTokens.colorSecondaryDark,
          "&.Mui-disabled": {
            borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${avonDarkColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedTextPrimary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextSecondary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${avonDarkColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${avonDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fill: avonDarkColorTokens.colorMediumEmphasis,
      },
    },
    MuiAlert: {
      standardSuccess: {
        color: avonDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonDarkColorTokens.colorSuccess, 0.16),
      },
      outlinedSuccess: {
        color: avonDarkColorTokens.colorHighEmphasis,
      },
      standardError: {
        color: avonDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonDarkColorTokens.colorAlert, 0.16),
      },
      outlinedError: {
        color: avonDarkColorTokens.colorHighEmphasis,
      },
      standardWarning: {
        color: avonDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonDarkColorTokens.colorWarning, 0.16),
        "& .MuiAlert-icon": {
          color: avonDarkColorTokens.colorWarning,
        },
      },
      outlinedWarning: {
        color: avonDarkColorTokens.colorHighEmphasis,
        borderColor: avonDarkColorTokens.colorWarning,
        "& .MuiAlert-icon": {
          color: avonDarkColorTokens.colorWarning,
        },
      },
      filledWarning: {
        color: avonDarkColorTokens.colorOnWarning,
        backgroundColor: avonDarkColorTokens.colorWarning,
      },
      standardInfo: {
        color: avonDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonDarkColorTokens.colorLink, 0.16),
        "& .MuiAlert-icon": {
          color: avonDarkColorTokens.colorLink,
        },
      },
      outlinedInfo: {
        color: avonDarkColorTokens.colorHighEmphasis,
        borderColor: avonDarkColorTokens.colorLink,
        "& .MuiAlert-icon": {
          color: avonDarkColorTokens.colorLink,
        },
      },
      filledInfo: {
        backgroundColor: avonDarkColorTokens.colorLink,
      },
    },
  },
});
