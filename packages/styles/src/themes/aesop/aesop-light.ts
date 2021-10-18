/* eslint-disable import/prefer-default-export */
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
import { fontSize } from '../../tokens/typography'
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
     * @deprecated `aesopLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.aesop.light.color` from `natds-themes`.
     */
    aesopLightColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.aesop.light

export const aesopLight: ITheme = {
  asset,
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  avatarSizes,
  buttonSizes,
  color: {
    ...color,
    surface: '#FFFEF2'
  },
  iconSizes,

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme
   */
  opacity: legacyOpacity,
  sizes,
  spacing: spacing.spacing,
  palette: {
    action: {
      /**
       * @since 0.24
       */
      active: hexToRgba(color.highlight, opacity.mediumHigh),
      disabled: hexToRgba(aesopLightColorTokens.colorHighlight, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: aesopLightColorTokens.colorLowEmphasis,
    primary: {
      main: aesopLightColorTokens.colorPrimary,
      light: aesopLightColorTokens.colorPrimaryLight,
      dark: aesopLightColorTokens.colorPrimaryDark,
      contrastText: aesopLightColorTokens.colorOnPrimary
    },
    secondary: {
      main: aesopLightColorTokens.colorSecondary,
      light: aesopLightColorTokens.colorSecondaryLight,
      dark: aesopLightColorTokens.colorSecondaryDark,
      contrastText: aesopLightColorTokens.colorOnSecondary
    },
    error: {
      main: aesopLightColorTokens.colorAlert,
      contrastText: aesopLightColorTokens.colorOnAlert
    },
    success: {
      main: aesopLightColorTokens.colorSuccess,
      contrastText: aesopLightColorTokens.colorOnSuccess
    },
    background: {
      paper: aesopLightColorTokens.colorSurface,
      default: aesopLightColorTokens.colorBackground,
      paperContrastText: aesopLightColorTokens.colorOnSurface,
      defaultContrastText: aesopLightColorTokens.colorOnBackground
    },
    text: {
      primary: aesopLightColorTokens.colorHighEmphasis,
      secondary: aesopLightColorTokens.colorMediumEmphasis,
      disabled: aesopLightColorTokens.colorLowEmphasis,
      hint: aesopLightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: aesopLightColorTokens.colorHighlight,
      link: aesopLightColorTokens.colorLink,
      linkContrastText: aesopLightColorTokens.colorOnLink,
      warning: aesopLightColorTokens.colorWarning,
      warningContrastText: aesopLightColorTokens.colorOnWarning
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
        color: aesopLightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: aesopLightColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${aesopLightColorTokens.colorHighlight}3D`
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
          color: `${aesopLightColorTokens.colorHighlight}3D`,
          borderColor: `${aesopLightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${aesopLightColorTokens.colorHighlight}3D`,
          backgroundColor: `${aesopLightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${aesopLightColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${aesopLightColorTokens.colorHighlight}3D`,
          borderColor: `${aesopLightColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: aesopLightColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        padding: '8px',
        color: aesopLightColorTokens.colorHighEmphasis
      },
      sizeSmall: {
        padding: '4px'
      }
    },
    MuiExpansionPanel: {
      root: {
        border: 'transparent 1px solid',
        '&$expanded': {
          borderColor: aesopLightColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: aesopLightColorTokens.colorOnPrimary,
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
            aesopLightColorTokens.colorOnSurface,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(
            aesopLightColorTokens.colorPrimary,
            0.16
          ),
          '&:hover': {
            backgroundColor: hexToRgba(
              aesopLightColorTokens.colorHighlight,
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
            aesopLightColorTokens.colorHighlight,
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
          aesopLightColorTokens.colorHighlight,
          0.12
        ),
        color: aesopLightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            aesopLightColorTokens.colorHighlight,
            0.24
          ),
          color: aesopLightColorTokens.colorHighEmphasis
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: aesopLightColorTokens.colorPrimary
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: aesopLightColorTokens.colorSecondary
        }
      },
      outlined: {
        borderColor: hexToRgba(
          aesopLightColorTokens.colorHighlight,
          0.12
        ),
        color: aesopLightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: aesopLightColorTokens.colorHighlight
      },
      outlinedSecondary: {
        color: aesopLightColorTokens.colorHighlight
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
        color: hexToRgba(aesopLightColorTokens.colorHighlight, 0.8),
        '&:hover': {
          color: aesopLightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(aesopLightColorTokens.colorOnPrimary, 0.8),
        '&:hover': {
          color: aesopLightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(aesopLightColorTokens.colorOnSecondary, 0.8),
        '&:hover': {
          color: aesopLightColorTokens.colorOnSecondary
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
        boxShadow: `${aesopLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: aesopLightColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${aesopLightColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${aesopLightColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${aesopLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${aesopLightColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${aesopLightColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${aesopLightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${aesopLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: aesopLightColorTokens.colorMediumEmphasis
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
        position: 'relative',
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
          color: aesopLightColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: aesopLightColorTokens.colorAlert
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: aesopLightColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: aesopLightColorTokens.colorHighEmphasis
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
          borderColor: aesopLightColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${aesopLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: aesopLightColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${aesopLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${aesopLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${aesopLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${aesopLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${aesopLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${aesopLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${aesopLightColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSvgIcon: {
      root: {}
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
        color: aesopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          aesopLightColorTokens.colorSuccess,
          0.16
        )
      },
      outlinedSuccess: {
        color: aesopLightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: aesopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          aesopLightColorTokens.colorAlert,
          0.16
        )
      },
      outlinedError: {
        color: aesopLightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: aesopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          aesopLightColorTokens.colorWarning,
          0.16
        ),
        '& .MuiAlert-icon': {
          color: aesopLightColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: aesopLightColorTokens.colorHighEmphasis,
        borderColor: aesopLightColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: aesopLightColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: aesopLightColorTokens.colorOnWarning,
        backgroundColor: aesopLightColorTokens.colorWarning
      },
      standardInfo: {
        color: aesopLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(aesopLightColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: aesopLightColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: aesopLightColorTokens.colorHighEmphasis,
        borderColor: aesopLightColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: aesopLightColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: aesopLightColorTokens.colorLink
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
    },
    MuiTablePagination: {
      root: {
        overflow: 'visible',
        '& .MuiSelect-icon': {
          top: 0,
          height: '100%'
        }
      },
      input: {
        flexShrink: 'initial'
      }
    },
    MuiTypography: {
      subtitle1: {
        fontFamily: typography.display.fontFamily,
        fontWeight: typography.display.fontWeight
      }
    }
  }
}
