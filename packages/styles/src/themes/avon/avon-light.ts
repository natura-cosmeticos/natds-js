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
import { opacity } from "../../tokens/opacity";

const {
  colorTokens: {

    /**
     * @deprecated `avonLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.light.color` from `natds-themes`.
     */
    avonLightColorTokens,
  },
} = tokens;

export const avonLight: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100,
  },
  avatarSizes,
  buttonSizes,
  iconSizes,

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity,
  sizes,
  spacing: spacing.spacing,
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
  typography: {
    ...typography,
    ...fontSize,
  },
  shadows: elevation,
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
        padding: null,
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
        padding: "8px",
        color: avonLightColorTokens.colorHighEmphasis,
      },
      sizeSmall: {
        padding: "4px",
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
          backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.04),
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
        backgroundColor: hexToRgba(avonLightColorTokens.colorHighlight, 0.12),
        color: avonLightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
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
        color: hexToRgba(avonLightColorTokens.colorHighlight, 0.8),
        "&:hover": {
          color: avonLightColorTokens.colorHighlight,
        },
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
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
    MuiTextField: {
      "& .MuiInputLabel": {
        marginTop: "20px",
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
          boxShadow: `${avonLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        },
        padding: "12px",
        borderRadius: "4px",
        boxShadow: `${avonLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
      },
      input: {
        color: avonLightColorTokens.colorHighEmphasis,
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
    MuiAlertTitle: {
      root: {
        ...fontSize.h6,
      },
    },
    MuiTableSortLabel: {
      icon: {
        marginLeft: spacing.spacing,
      },
    },
  },
};
