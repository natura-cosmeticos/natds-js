/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */

/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */

import hexToRgba from "hex-to-rgba";
import themes from "@naturacosmeticos/natds-themes";
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
import { opacity as legacyOpacity } from "../../tokens/opacity";

const {
  colorTokens: {

    /**
     * @deprecated `theBodyShopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.theBodyShop.dark.color` from `natds-themes`.
     */
    theBodyShopDarkColorTokens,
  },
} = tokens;

const { color, opacity } = themes.theBodyShop.dark;

export const theBodyShopDark: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100,
  },
  sizes,
  avatarSizes,
  buttonSizes,
  iconSizes,

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity: legacyOpacity,
  spacing: spacing.spacing,
  palette: {
    action: {

      /**
       * @since 0.24
       */
      active: hexToRgba(color.highlight, opacity.mediumHigh),
      disabled: hexToRgba(theBodyShopDarkColorTokens.colorOnSecondary, 0.24),
    },

    /**
     * @since 0.24
     */
    divider: hexToRgba(color.highlight, opacity.low),
    primary: {
      main: theBodyShopDarkColorTokens.colorPrimary,
      light: theBodyShopDarkColorTokens.colorPrimaryLight,
      dark: theBodyShopDarkColorTokens.colorPrimaryDark,
      contrastText: theBodyShopDarkColorTokens.colorOnPrimary,
    },
    secondary: {
      main: theBodyShopDarkColorTokens.colorSecondary,
      light: theBodyShopDarkColorTokens.colorSecondaryLight,
      dark: theBodyShopDarkColorTokens.colorSecondaryDark,
      contrastText: theBodyShopDarkColorTokens.colorOnSecondary,
    },
    error: {
      main: theBodyShopDarkColorTokens.colorAlert,
      contrastText: theBodyShopDarkColorTokens.colorOnAlert,
    },
    success: {
      main: theBodyShopDarkColorTokens.colorSuccess,
      contrastText: theBodyShopDarkColorTokens.colorOnSuccess,
    },
    background: {
      paper: theBodyShopDarkColorTokens.colorSurface,
      default: theBodyShopDarkColorTokens.colorBackground,
      paperContrastText: theBodyShopDarkColorTokens.colorOnSurface,
      defaultContrastText: theBodyShopDarkColorTokens.colorOnBackground,
    },
    text: {
      primary: theBodyShopDarkColorTokens.colorHighEmphasis,
      secondary: theBodyShopDarkColorTokens.colorMediumEmphasis,
      disabled: theBodyShopDarkColorTokens.colorLowEmphasis,
      hint: theBodyShopDarkColorTokens.colorLowEmphasis,
    },
    complementary: {
      highlight: theBodyShopDarkColorTokens.colorHighlight,
      link: theBodyShopDarkColorTokens.colorLink,
      linkContrastText: theBodyShopDarkColorTokens.colorOnLink,
      warning: theBodyShopDarkColorTokens.colorWarning,
      warningContrastText: theBodyShopDarkColorTokens.colorOnSecondary,
    },
  },

  /**
   * @todo fix(styles): TS2322 - type is not assignable to type 'ITypography'.
   */
  // @ts-ignore
  typography: {
    ...typography,
    ...fontSize,
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
      },
      outlinedSecondary: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        "&.Mui-disabled": {
          borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
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
          color: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
          borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
        },
      },
      contained: {
        "&.Mui-disabled": {
          color: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${theBodyShopDarkColorTokens.colorHighlight}14`,
        },
      },
      outlined: {
        padding: null,
        borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
        "&.Mui-disabled": {
          color: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
          borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
        },
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
      },
    },
    MuiIconButton: {
      root: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
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
          borderColor: theBodyShopDarkColorTokens.colorPrimary,
        },
        "&$disabled": {
          backgroundColor: theBodyShopDarkColorTokens.colorSurface,
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
            theBodyShopDarkColorTokens.colorHighEmphasis,
            0.16,
          ),
        },
        "&$selected": {
          background: hexToRgba(
            theBodyShopDarkColorTokens.colorSecondary,
            0.16,
          ),
          "&:hover": {
            backgroundColor: hexToRgba(
              theBodyShopDarkColorTokens.colorOnSecondary,
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
            theBodyShopDarkColorTokens.colorOnSecondary,
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
          theBodyShopDarkColorTokens.colorOnBackground,
          0.12,
        ),
        color: theBodyShopDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(
            theBodyShopDarkColorTokens.colorOnBackground,
            0.24,
          ),
          color: theBodyShopDarkColorTokens.colorOnBackground,
        },
        "&$disabled": {
          opacity: 0.4,
        },
      },
      clickable: {
        "&:hover": {
          backgroundColor: hexToRgba(
            theBodyShopDarkColorTokens.colorOnBackground,
            0.16,
          ),
        },
        "&:focus": {
          backgroundColor: hexToRgba(
            theBodyShopDarkColorTokens.colorOnBackground,
            0.16,
          ),
        },
      },
      clickableColorPrimary: {
        "&:hover": {
          backgroundColor: theBodyShopDarkColorTokens.colorPrimaryDark,
        },
      },
      clickableColorSecondary: {
        "&:hover": {
          backgroundColor: theBodyShopDarkColorTokens.colorPrimaryDark,
        },
      },
      outlined: {
        borderColor: hexToRgba(
          theBodyShopDarkColorTokens.colorOnBackground,
          0.12,
        ),
        color: theBodyShopDarkColorTokens.colorOnBackground,
      },
      outlinedPrimary: {
        color: theBodyShopDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: theBodyShopDarkColorTokens.colorPrimary,
        },
      },
      outlinedSecondary: {
        color: theBodyShopDarkColorTokens.colorOnBackground,
        "& $avatar": {
          backgroundColor: theBodyShopDarkColorTokens.colorSecondary,
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
        color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.6),
        },
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
      },
      deleteIconColorPrimary: {
        color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: theBodyShopDarkColorTokens.colorOnBackground,
        },
      },
      deleteIconColorSecondary: {
        color: hexToRgba(theBodyShopDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: theBodyShopDarkColorTokens.colorOnBackground,
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
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        "&.MuiInput-input": {
          borderRadius: "4px",
          "&:hover": {
            borderRadius: "4px",
          },
          "&.Mui-focused:not(.MuiError):not(.MuiSuccess)": {
            boxShadow: `${theBodyShopDarkColorTokens.colorPrimary} 0 0 0 2px`,
          },
        },
        "&.MuiError": {
          boxShadow: `${theBodyShopDarkColorTokens.colorAlert} 0 0 0 2px`,
          "&:hover": {
            boxShadow: `${theBodyShopDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${theBodyShopDarkColorTokens.colorAlert} 0 0 0 2px`,
          },
        },
        "&.MuiSuccess": {
          boxShadow: `${theBodyShopDarkColorTokens.colorSuccess} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${theBodyShopDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
          "&.Mui-focused": {
            boxShadow: `${theBodyShopDarkColorTokens.colorSuccess} 0 0 0 1px`,
          },
        },
        "&.MuiFilled:not(.Mui-focused)": {
          boxShadow: `${theBodyShopDarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${theBodyShopDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
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
          boxShadow: `${theBodyShopDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        },
        padding: "12px",
      },
      input: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
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
          color: theBodyShopDarkColorTokens.colorMediumEmphasis,
        },
        "&.Mui-error": {
          color: theBodyShopDarkColorTokens.colorHighEmphasis,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        "&.Mui-error": {
          color: theBodyShopDarkColorTokens.colorMediumEmphasis,
        },
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
        "&.Mui-disabled": {
          color: theBodyShopDarkColorTokens.colorLowEmphasis,
        },
      },
    },
    MuiButtonGroup: {
      groupedOutlinedHorizontal: {
        "&:not(:first-child)": {
          marginLeft: "none",
        },
      },
      groupedContainedPrimary: {
        "&:not(:last-child)": {
          borderColor: theBodyShopDarkColorTokens.colorPrimaryDark,
          "&.Mui-disabled": {
            borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedSecondary: {
        "&:not(:last-child)": {
          borderColor: theBodyShopDarkColorTokens.colorSecondaryDark,
          "&.Mui-disabled": {
            borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedContainedHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${theBodyShopDarkColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
      groupedTextPrimary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextSecondary: {
        "&:not(:last-child).Mui-disabled": {
          borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
        },
      },
      groupedTextHorizontal: {
        "&:not(:last-child)": {
          borderRightColor: `${theBodyShopDarkColorTokens.colorHighlight}1F`,
          "&.Mui-disabled": {
            borderColor: `${theBodyShopDarkColorTokens.colorHighlight}3D`,
          },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fill: theBodyShopDarkColorTokens.colorMediumEmphasis,
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
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          theBodyShopDarkColorTokens.colorSuccess,
          0.16,
        ),
      },
      outlinedSuccess: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
      },
      standardError: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(theBodyShopDarkColorTokens.colorAlert, 0.16),
      },
      outlinedError: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
      },
      standardWarning: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          theBodyShopDarkColorTokens.colorWarning,
          0.16,
        ),
        "& .MuiAlert-icon": {
          color: theBodyShopDarkColorTokens.colorWarning,
        },
      },
      outlinedWarning: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        borderColor: theBodyShopDarkColorTokens.colorWarning,
        "& .MuiAlert-icon": {
          color: theBodyShopDarkColorTokens.colorWarning,
        },
      },
      filledWarning: {
        color: theBodyShopDarkColorTokens.colorOnWarning,
        backgroundColor: theBodyShopDarkColorTokens.colorWarning,
      },
      standardInfo: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(theBodyShopDarkColorTokens.colorLink, 0.16),
        "& .MuiAlert-icon": {
          color: theBodyShopDarkColorTokens.colorLink,
        },
      },
      outlinedInfo: {
        color: theBodyShopDarkColorTokens.colorHighEmphasis,
        borderColor: theBodyShopDarkColorTokens.colorLink,
        "& .MuiAlert-icon": {
          color: theBodyShopDarkColorTokens.colorLink,
        },
      },
      filledInfo: {
        backgroundColor: theBodyShopDarkColorTokens.colorLink,
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
