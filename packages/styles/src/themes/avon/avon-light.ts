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
  colorTokens: { avonLightColorTokens },
} = tokens;

export const avonLight: ITheme = merge(getBaseTheme(), {
  palette: {
    action: {
      disabled: hexToRgba(avonLightColorTokens.colorHighlight, 0.24),
    },
    primary: {
      main: avonLightColorTokens.colorPrimary,
      light: avonLightColorTokens.colorPrimaryLight,
      dark: avonLightColorTokens.colorPrimaryDark,
      contrastText: avonLightColorTokens.colorOnPrimary,
    },
    secondary: {
      main: avonLightColorTokens.colorSecondary,
      light: avonLightColorTokens.colorSecondaryLight,
      dark: avonLightColorTokens.colorSecondaryDark,
      contrastText: avonLightColorTokens.colorOnSecondary,
    },
    error: {
      main: avonLightColorTokens.colorAlert,
      contrastText: avonLightColorTokens.colorOnAlert,
    },
    success: {
      main: avonLightColorTokens.colorSuccess,
      contrastText: avonLightColorTokens.colorOnSuccess,
    },
    background: {
      paper: avonLightColorTokens.colorSurface,
      default: avonLightColorTokens.colorBackground,
      paperContrastText: avonLightColorTokens.colorOnSurface,
      defaultContrastText: avonLightColorTokens.colorOnBackground,
    },
    text: {
      primary: avonLightColorTokens.colorHighEmphasis,
      secondary: avonLightColorTokens.colorMediumEmphasis,
      disabled: avonLightColorTokens.colorLowEmphasis,
      hint: avonLightColorTokens.colorLowEmphasis,
    },
    complementary: {
      highlight: avonLightColorTokens.colorHighlight,
      link: avonLightColorTokens.colorLink,
      linkContrastText: avonLightColorTokens.colorOnLink,
      warning: avonLightColorTokens.colorWarning,
      warningContrastText: avonLightColorTokens.colorOnWarning,
    },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: avonLightColorTokens.colorHighEmphasis,
      },
      outlinedSecondary: {
        color: avonLightColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          borderColor: `${avonLightColorTokens.colorHighlight}3D`,
        },
      },
      text: {
        "&.Mui-disabled": {
          color: `${avonLightColorTokens.colorHighlight}3D`,
          borderColor: `${avonLightColorTokens.colorHighlight}3D`,
        },
      },
      contained: {
        "&.Mui-disabled": {
          color: `${avonLightColorTokens.colorHighlight}3D`,
          backgroundColor: `${avonLightColorTokens.colorHighlight}14`,
        },
      },
      outlined: {
        borderColor: `${avonLightColorTokens.colorHighlight}3D`,
        "&.Mui-disabled": {
          color: `${avonLightColorTokens.colorHighlight}3D`,
          borderColor: `${avonLightColorTokens.colorHighlight}3D`,
        },
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: avonLightColorTokens.colorHighEmphasis,
      },
    },
    MuiIconButton: {
      root: {
        color: avonLightColorTokens.colorHighEmphasis,
      },
    },
    MuiExpansionPanel: {
      root: {
        border: "transparent 1px solid",
        "&$expanded": {
          borderColor: avonLightColorTokens.colorPrimary,
        },
        "&$disabled": {
          backgroundColor: avonLightColorTokens.colorOnPrimary,
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
            avonLightColorTokens.colorOnSecondary,
            0.04,
          ),
        },
        "&$selected": {
          backgroundColor: hexToRgba(avonLightColorTokens.colorSecondary, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(
              avonLightColorTokens.colorHighlight,
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
          backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.04),
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
        backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.12),
        color: avonLightColorTokens.colorHighEmphasis,
        "& $avatar": {
          backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.24),
          color: avonLightColorTokens.colorHighEmphasis,
        },
        "&$disabled": {
          opacity: 0.4,
        },
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: avonLightColorTokens.colorPrimary,
        },
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: avonLightColorTokens.colorSecondary,
        },
      },
      outlined: {
        borderColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.12),
        color: avonLightColorTokens.colorHighlight,
      },
      outlinedPrimary: {
        color: avonLightColorTokens.colorHighlight,
      },
      outlinedSecondary: {
        color: avonLightColorTokens.colorHighlight,
      },
      deleteIcon: {
        color: hexToRgba(avonLightColorTokens.colorHighlight, 0.8),
        "&:hover": {
          color: avonLightColorTokens.colorHighlight,
        },
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonLightColorTokens.colorOnPrimary, 0.8),
        "&:hover": {
          color: avonLightColorTokens.colorOnPrimary,
        },
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonLightColorTokens.colorOnSecondary, 0.8),
        "&:hover": {
          color: avonLightColorTokens.colorOnSecondary,
        },
      },
    },
    MuiInputBase: {
      root: {
        color: avonLightColorTokens.colorHighEmphasis,
        "&:hover": {
          boxShadow: `${avonLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
        },
        "&.MuiError": {
          boxShadow: `${avonLightColorTokens.colorAlert} 0 0 0 2px`,
          "&:hover": {
            boxShadow: `${avonLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${avonLightColorTokens.colorAlert} 0 0 0 2px`,
          },
        },
        "&.MuiSuccess": {
          boxShadow: `${avonLightColorTokens.colorSuccess} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${avonLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${avonLightColorTokens.colorSuccess} 0 0 0 1px`,
          },
        },
        "&.Mui-focused:not(.MuiError):not(.MuiSuccess)": {
          boxShadow: `${avonLightColorTokens.colorPrimary} 0 0 0 2px`,
        },
        "&.MuiFilled:not(.Mui-focused)": {
          boxShadow: `${avonLightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${avonLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
        },
        "&:hover.Mui-disabled": {
          boxShadow: `${avonLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        },
        boxShadow: `${avonLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
      },
      input: {
        color: avonLightColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          opacity: 0.24,
        },
      },
    },
    MuiFormLabel: {
      root: {
        "&.Mui-focused": {
          color: avonLightColorTokens.colorMediumEmphasis,
        },
        "&.Mui-error": {
          color: avonLightColorTokens.colorAlert,
        },
      },
    },
    MuiButtonGroup: {
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderColor: avonLightColorTokens.colorPrimaryDark,
          "&.Mui-disabled": {
            borderColor: `${avonLightColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderColor: avonLightColorTokens.colorSecondaryDark,
          "&.Mui-disabled": {
            borderColor: `${avonLightColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${avonLightColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${avonLightColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedTextPrimary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${avonLightColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextSecondary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${avonLightColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${avonLightColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${avonLightColorTokens.colorHighlight}3D`,
          },
        },
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
        "&.Mui-disabled": {
          color: avonLightColorTokens.colorLowEmphasis,
        },
      },
    },
    MuiAlert: {
      standardSuccess: {
        color: avonLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonLightColorTokens.colorSuccess, 0.16),
      },
      outlinedSuccess: {
        color: avonLightColorTokens.colorHighEmphasis,
      },
      standardError: {
        color: avonLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonLightColorTokens.colorAlert, 0.16),
      },
      outlinedError: {
        color: avonLightColorTokens.colorHighEmphasis,
      },
      standardWarning: {
        color: avonLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonLightColorTokens.colorWarning, 0.16),
        "& .MuiAlert-icon": {
          color: avonLightColorTokens.colorWarning,
        },
      },
      outlinedWarning: {
        color: avonLightColorTokens.colorHighEmphasis,
        borderColor: avonLightColorTokens.colorWarning,
        "& .MuiAlert-icon": {
          color: avonLightColorTokens.colorWarning,
        },
      },
      filledWarning: {
        color: avonLightColorTokens.colorOnWarning,
        backgroundColor: avonLightColorTokens.colorWarning,
      },
      standardInfo: {
        color: avonLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonLightColorTokens.colorLink, 0.16),
        "& .MuiAlert-icon": {
          color: avonLightColorTokens.colorLink,
        },
      },
      outlinedInfo: {
        color: avonLightColorTokens.colorHighEmphasis,
        borderColor: avonLightColorTokens.colorLink,
        "& .MuiAlert-icon": {
          color: avonLightColorTokens.colorLink,
        },
      },
      filledInfo: {
        backgroundColor: avonLightColorTokens.colorLink,
      },
    },
  },
});
