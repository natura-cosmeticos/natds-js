/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */

/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */

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
  colorTokens: { naturaDarkColorTokens },
} = tokens;

export const naturaDark: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100,
  },
  sizes,
  avatarSizes,
  buttonSizes,
  iconSizes,
  spacing: spacing.spacing,
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
  typography: {
    ...typography,
    ...fontSize,
  },
  shadows: elevation,
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
      sizeSmall: {
        ...buttonSizes.small,
        ...fontSize.subtitle2,
      },
      root: {
        ...buttonSizes.medium,
        ...fontSize.subtitle2,
      },
      sizeLarge: {
        ...buttonSizes.large,
        ...fontSize.subtitle2,
      },
      text: {
        padding: null,
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
        padding: null,
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
        padding: "8px",
      },
      sizeSmall: {
        padding: "4px",
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
        alignItems: "flex-start",
        marginTop: "8px",
        "&$disabled": {
          opacity: 1,
        },
      },
    },
    MuiToolbar: {
      root: {
        padding: "0 16px",
        "@media (min-width: 600px)": {
          padding: "0 16px",
        },
      },
      gutters: {
        padding: "0 16px",
        "@media (min-width: 600px)": {
          padding: "0 16px",
        },
      },
      regular: {
        minHeight: "56px",
        "@media (min-width: 600px)": {
          minHeight: "56px",
        },
      },
      dense: {
        minHeight: "56px",
        "@media (min-width: 600px)": {
          minHeight: "56px",
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
          "&:focus": {
            outline: "none",
          },
        },
        "&.Mui-disabled": {
          opacity: 0.32,
        },
      },
      gutters: {
        "&:focus": {
          outline: "none",
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
    MuiBadge: {
      badge: {
        padding: "0 4px",
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
      wrapper: {
        "& > *:first-child": {
          marginBottom: "2px !important",
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
        fontSize: fontSize.subtitle2.fontSize,
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
      icon: {
        fontSize: `${sizes.standard}px`,
      },
      iconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
        marginTop: "1px",
      },
      deleteIcon: {
        width: `${sizes.standard}px`,
        height: `${sizes.standard}px`,
        fontSize: `${sizes.standard}px`,
        color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(naturaDarkColorTokens.colorOnBackground, 0.6),
        },
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
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
    MuiTextField: {
      "& .MuiInputLabel": {
        marginTop: "20px",
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
        "&.MuiInput-underline:before": {
          borderBottom: "none",
        },
        "&.MuiInput-underline.Mui-disabled:before": {
          borderBottomStyle: "none",
        },
        "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottom: "none",
        },
        "&.MuiInput-underline:after": {
          borderBottom: "none",
        },
        "&:hover.Mui-disabled": {
          boxShadow: `${naturaDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        },
        padding: "12px",
        borderRadius: "4px",
        boxShadow: `${naturaDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
      },
      input: {
        color: naturaDarkColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          opacity: 0.24,
        },
      },
    },
    MuiInputAdornment: {
      root: {
        position: "absolute",
        right: "0",
      },
      positionEnd: {
        marginRight: spacing.spacingTiny,
      },
    },
    MuiInputLabel: {
      formControl: {
        transform: "none",
        marginTop: "-4px",
      },
      shrink: {
        transform: "none",
        marginTop: "-4px",
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: fontSize.subtitle2.fontSize,
        "&.Mui-focused": {
          fontSize: fontSize.subtitle2.fontSize,
          color: naturaDarkColorTokens.colorMediumEmphasis,
        },
        "&.Mui-error": {
          color: naturaDarkColorTokens.colorHighEmphasis,
        },
      },
      formControl: {
        transform: "none",
        marginTop: "-4px",
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
      root: {
        width: 278,
        padding: spacing.spacingSmall,
        ...fontSize.body1,
      },
      icon: {
        marginRight: spacing.spacingTiny,
      },
      message: {
        padding: "5px 0",
      },
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
    MuiAlertTitle: {
      "root": {
        ...fontSize.h6
      }
    },
    MuiTableSortLabel: {
      icon: {
        marginLeft: spacing.spacing,
      }
    }
  }
};
