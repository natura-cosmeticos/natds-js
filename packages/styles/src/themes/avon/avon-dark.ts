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
     * @deprecated `avonDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.dark.color` from `natds-themes`.
     */
    avonDarkColorTokens,
  },
} = tokens;

const { color, opacity } = themes.avon.dark;

export const avonDark: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100,
  },
  sizes,
  avatarSizes,
  buttonSizes,
  color,
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
      disabled: hexToRgba(avonDarkColorTokens.colorOnSecondary, 0.24),
    },

    /**
     * @since 0.24
     */
    divider: avonDarkColorTokens.colorLowEmphasis,
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
  typography: {
    ...typography,
    ...fontSize,
  },
  shadows: elevation,
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
        padding: null,
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
            avonDarkColorTokens.colorHighEmphasis,
            0.16
          ),
        },
        "&$selected": {
          background: hexToRgba(avonDarkColorTokens.colorPrimary, 0.16),
          "&:hover": {
            backgroundColor: hexToRgba(
              avonDarkColorTokens.colorOnSecondary,
              0.04
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
            avonDarkColorTokens.colorOnSecondary,
            0.04
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
        backgroundColor: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.12),
        color: avonDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        "& $avatar": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.24
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
            0.16
          ),
        },
        "&:focus": {
          backgroundColor: hexToRgba(
            avonDarkColorTokens.colorOnBackground,
            0.16
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
        color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.8),
        "&:hover": {
          color: hexToRgba(avonDarkColorTokens.colorOnBackground, 0.6),
        },
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
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
    MuiTextField: {
      "& .MuiInputLabel": {
        marginTop: "20px",
      },
    },
    MuiInputBase: {
      root: {
        fontSize: fontSize.subtitle2.fontSize,
        borderRadius: "4px",
        boxShadow: `${avonDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: avonDarkColorTokens.colorHighEmphasis,
        width: "100%",
        "&[data-state='error']": {
          boxShadow: `${avonDarkColorTokens.colorAlert} 0 0 0 1px`,
        },
        "&[data-state='success']": {
          boxShadow: `${avonDarkColorTokens.colorSuccess} 0 0 0 1px`,
        },
        "&:hover": {
          boxShadow: `${avonDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          "&.Mui-disabled": {
            boxShadow: `${avonDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
          },
        },
        "&.Mui-focused": {
          boxShadow: `${avonDarkColorTokens.colorPrimary} 0 0 0 2px`,
        },
        "&.MuiFilled:not(.Mui-focused)": {
          boxShadow: `${avonDarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          "&:hover": {
            boxShadow: `${avonDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          },
        },
        "&.MuiInputBase-multiline": {
          padding: sizes?.none,
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
      },
      adornedEnd: {
        paddingRight: sizes.medium,
      },
      input: {
        "&.Mui-disabled:not(::placeholder)": {
          opacity: 0.24,
        },
        "&::placeholder": {
          color: avonDarkColorTokens.colorMediumEmphasis,
        },
        "&.MuiInput-inputTypeSearch": {
          paddingRight: sizes.large,
        },
        border: sizes?.none,
        boxSizing: "border-box",
        lineHeight: `${sizes?.standard}px`,
        minHeight: sizes?.mediumX,
        padding: sizes?.small,
      },
      inputMultiline: {
        padding: sizes?.small,
      },
      inputTypeSearch: {
        "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
          display: "none",
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
      icon: {
        top: sizes.micro,
        color: avonDarkColorTokens.colorHighEmphasis,
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
