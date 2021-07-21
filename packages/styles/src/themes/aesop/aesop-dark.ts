/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
/* eslint-disable sort-keys */

/**
 * @todo refactor(styles): replace magic numbers by tokens (including opacity, padding and sizing)
 */

import hexToRgba from 'hex-to-rgba'
import themes from '@naturacosmeticos/natds-themes'
import tokens from '../../tokens'
import { ITheme } from '../ITheme'
import { typography } from './typography'
import { fontSize } from '../../tokens/fontSize'
import { spacing } from '../../tokens/spacing'
import { avatarSizes } from '../../tokens/avatarSizes'
import { buttonSizes } from '../../tokens/buttonSizes'
import { elevation } from '../../tokens/elevation'
import { iconSizes } from '../../tokens/iconSizes'
import { sizes } from '../../tokens/sizes'
import { opacity as legacyOpacity } from '../../tokens/opacity'

const {
  colorTokens: {
    /**
     * @deprecated `aesopDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.dark.color` from `natds-themes`.
     */
    aesopDarkColorTokens
  }
} = tokens

const { color, opacity } = themes.aesop.dark

export const aesopDark: ITheme = {
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
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
      disabled: hexToRgba(aesopDarkColorTokens.colorOnSecondary, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: aesopDarkColorTokens.colorLowEmphasis,
    primary: {
      main: aesopDarkColorTokens.colorPrimary,
      light: aesopDarkColorTokens.colorPrimaryLight,
      dark: aesopDarkColorTokens.colorPrimaryDark,
      contrastText: aesopDarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: aesopDarkColorTokens.colorSecondary,
      light: aesopDarkColorTokens.colorSecondaryLight,
      dark: aesopDarkColorTokens.colorSecondaryDark,
      contrastText: aesopDarkColorTokens.colorOnSecondary
    },
    error: {
      main: aesopDarkColorTokens.colorAlert,
      contrastText: aesopDarkColorTokens.colorOnAlert
    },
    success: {
      main: aesopDarkColorTokens.colorSuccess,
      contrastText: aesopDarkColorTokens.colorOnSuccess
    },
    background: {
      paper: aesopDarkColorTokens.colorSurface,
      default: aesopDarkColorTokens.colorBackground,
      paperContrastText: aesopDarkColorTokens.colorOnSurface,
      defaultContrastText: aesopDarkColorTokens.colorOnBackground
    },
    text: {
      primary: aesopDarkColorTokens.colorHighEmphasis,
      secondary: aesopDarkColorTokens.colorMediumEmphasis,
      disabled: aesopDarkColorTokens.colorLowEmphasis,
      hint: aesopDarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: aesopDarkColorTokens.colorHighlight,
      link: aesopDarkColorTokens.colorLink,
      linkContrastText: aesopDarkColorTokens.colorOnLink,
      warning: aesopDarkColorTokens.colorWarning,
      warningContrastText: aesopDarkColorTokens.colorOnSecondary
    }
  },

  /**
   * @todo fix(styles): TS2322 - type is not assignable to type 'ITypography'.
   */
  // @ts-ignore
  typography: {
    ...typography,
    ...fontSize
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: aesopDarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
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
        '&.Mui-disabled': {
          color: `${aesopDarkColorTokens.colorHighlight}3D`,
          borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${aesopDarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${aesopDarkColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${aesopDarkColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${aesopDarkColorTokens.colorHighlight}3D`,
          borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: aesopDarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        padding: '8px'
      },
      sizeSmall: {
        padding: '4px'
      }
    },
    MuiExpansionPanel: {
      root: {
        border: 'transparent 1px solid',
        '&$expanded': {
          borderColor: aesopDarkColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: aesopDarkColorTokens.colorSurface,
          opacity: 0.32
        }
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        alignItems: 'flex-start',
        marginTop: '8px',
        '&$disabled': {
          opacity: 1
        }
      }
    },
    MuiToolbar: {
      root: {
        padding: '0 16px',
        '@media (min-width: 600px)': {
          padding: '0 16px'
        }
      },
      gutters: {
        padding: '0 16px',
        '@media (min-width: 600px)': {
          padding: '0 16px'
        }
      },
      regular: {
        minHeight: '56px',
        '@media (min-width: 600px)': {
          minHeight: '56px'
        }
      },
      dense: {
        minHeight: '56px',
        '@media (min-width: 600px)': {
          minHeight: '56px'
        }
      }
    },
    MuiListItem: {
      root: {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: hexToRgba(
            aesopDarkColorTokens.colorHighEmphasis,
            0.16
          )
        },
        '&$selected': {
          background: hexToRgba(aesopDarkColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              aesopDarkColorTokens.colorOnSecondary,
              0.04
            )
          },
          '&:focus': {
            outline: 'none'
          }
        },
        '&.Mui-disabled': {
          opacity: 0.32
        }
      },
      gutters: {
        '&:focus': {
          outline: 'none'
        }
      },
      button: {
        '&:hover': {
          backgroundColor: hexToRgba(
            aesopDarkColorTokens.colorOnSecondary,
            0.04
          )
        }
      }
    },
    MuiBadge: {
      badge: {
        padding: '0 4px'
      }
    },
    MuiTab: {
      root: {
        '&$disabled': {
          opacity: 0.24
        }
      },
      textColorInherit: {
        '&$disabled': {
          opacity: 0.24
        }
      },
      wrapper: {
        '& > *:first-child': {
          marginBottom: '2px !important'
        }
      }
    },
    MuiChip: {
      root: {
        backgroundColor: hexToRgba(
          aesopDarkColorTokens.colorOnBackground,
          0.12
        ),
        color: aesopDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            aesopDarkColorTokens.colorOnBackground,
            0.24
          ),
          color: aesopDarkColorTokens.colorOnBackground
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickable: {
        '&:hover': {
          backgroundColor: hexToRgba(
            aesopDarkColorTokens.colorOnBackground,
            0.16
          )
        },
        '&:focus': {
          backgroundColor: hexToRgba(
            aesopDarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: aesopDarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: aesopDarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(
          aesopDarkColorTokens.colorOnBackground,
          0.12
        ),
        color: aesopDarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: aesopDarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: aesopDarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: aesopDarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: aesopDarkColorTokens.colorSecondary
        }
      },
      icon: {
        fontSize: `${sizes.standard}px`
      },
      iconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`,
        marginTop: '1px'
      },
      deleteIcon: {
        width: `${sizes.standard}px`,
        height: `${sizes.standard}px`,
        fontSize: `${sizes.standard}px`,
        color: hexToRgba(aesopDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: hexToRgba(aesopDarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(aesopDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: aesopDarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(aesopDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: aesopDarkColorTokens.colorOnBackground
        }
      }
    },
    MuiTextField: {
      '& .MuiInputLabel': {
        marginTop: '20px'
      }
    },
    MuiInputBase: {
      root: {
        fontSize: fontSize.subtitle2.fontSize,
        borderRadius: '4px',
        boxShadow: `${aesopDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: aesopDarkColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${aesopDarkColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${aesopDarkColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${aesopDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${aesopDarkColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${aesopDarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${aesopDarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${aesopDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
          }
        },
        '&.MuiInputBase-multiline': {
          padding: sizes?.none
        },
        '&.MuiInput-underline:before': {
          borderBottom: 'none'
        },
        '&.MuiInput-underline.Mui-disabled:before': {
          borderBottomStyle: 'none'
        },
        '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottom: 'none'
        },
        '&.MuiInput-underline:after': {
          borderBottom: 'none'
        }
      },
      adornedEnd: {
        paddingRight: sizes.medium
      },
      input: {
        '&.Mui-disabled:not(::placeholder)': {
          opacity: 0.24
        },
        '&::placeholder': {
          color: aesopDarkColorTokens.colorMediumEmphasis
        },
        '&.MuiInput-inputTypeSearch': {
          paddingRight: sizes.large
        },
        border: sizes?.none,
        boxSizing: 'border-box',
        lineHeight: `${sizes?.standard}px`,
        minHeight: sizes?.mediumX,
        padding: sizes?.small
      },
      inputMultiline: {
        padding: sizes?.small
      },
      inputTypeSearch: {
        '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {
          display: 'none'
        }
      }
    },
    MuiInputAdornment: {
      root: {
        position: 'absolute',
        right: '0'
      },
      positionEnd: {
        marginRight: spacing.spacingTiny
      }
    },
    MuiInputLabel: {
      formControl: {
        transform: 'none',
        marginTop: '-4px'
      },
      shrink: {
        transform: 'none',
        marginTop: '-4px'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: fontSize.subtitle2.fontSize,
        '&.Mui-focused': {
          fontSize: fontSize.subtitle2.fontSize,
          color: aesopDarkColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: aesopDarkColorTokens.colorHighEmphasis
        }
      }
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          color: aesopDarkColorTokens.colorMediumEmphasis
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: aesopDarkColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: aesopDarkColorTokens.colorHighEmphasis
      }
    },
    MuiButtonGroup: {
      groupedOutlinedHorizontal: {
        '&:not(:first-child)': {
          marginLeft: 'none'
        }
      },
      groupedContainedPrimary: {
        '&:not(:last-child)': {
          borderColor: aesopDarkColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: aesopDarkColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${aesopDarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${aesopDarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${aesopDarkColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fill: aesopDarkColorTokens.colorMediumEmphasis
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
        padding: '5px 0'
      },
      standardSuccess: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          aesopDarkColorTokens.colorSuccess,
          0.16
        )
      },
      outlinedSuccess: {
        color: aesopDarkColorTokens.colorHighEmphasis
      },
      standardError: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(aesopDarkColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: aesopDarkColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          aesopDarkColorTokens.colorWarning,
          0.16
        ),
        '& .MuiAlert-icon': {
          color: aesopDarkColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        borderColor: aesopDarkColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: aesopDarkColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: aesopDarkColorTokens.colorOnWarning,
        backgroundColor: aesopDarkColorTokens.colorWarning
      },
      standardInfo: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(aesopDarkColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: aesopDarkColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: aesopDarkColorTokens.colorHighEmphasis,
        borderColor: aesopDarkColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: aesopDarkColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: aesopDarkColorTokens.colorLink
      }
    },
    MuiAlertTitle: {
      root: {
        ...fontSize.h6
      }
    },
    MuiTableSortLabel: {
      icon: {
        marginLeft: spacing.spacing
      }
    }
  }
}
