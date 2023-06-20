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
     * @deprecated `avonV2LightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.light.color` from `natds-themes`.
     */
    avonV2LightColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.avon_v2.light

export const avonV2Light: ITheme = {
  asset,
  shape: {
    borderRadius: tokens.radius.medium,
    badgeBorderRadius: 100
  },
  avatarSizes,
  buttonSizes,
  color,
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
      disabled: hexToRgba(avonV2LightColorTokens.colorHighlight, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: avonV2LightColorTokens.colorLowEmphasis,
    primary: {
      main: avonV2LightColorTokens.colorPrimary,
      light: avonV2LightColorTokens.colorPrimaryLight,
      dark: avonV2LightColorTokens.colorPrimaryDark,
      contrastText: avonV2LightColorTokens.colorOnPrimary
    },
    secondary: {
      main: avonV2LightColorTokens.colorSecondary,
      light: avonV2LightColorTokens.colorSecondaryLight,
      dark: avonV2LightColorTokens.colorSecondaryDark,
      contrastText: avonV2LightColorTokens.colorOnSecondary
    },
    error: {
      main: avonV2LightColorTokens.colorAlert,
      contrastText: avonV2LightColorTokens.colorOnAlert
    },
    success: {
      main: avonV2LightColorTokens.colorSuccess,
      contrastText: avonV2LightColorTokens.colorOnSuccess
    },
    background: {
      paper: avonV2LightColorTokens.colorSurface,
      default: avonV2LightColorTokens.colorBackground,
      paperContrastText: avonV2LightColorTokens.colorOnSurface,
      defaultContrastText: avonV2LightColorTokens.colorOnBackground
    },
    text: {
      primary: avonV2LightColorTokens.colorHighEmphasis,
      secondary: avonV2LightColorTokens.colorMediumEmphasis,
      disabled: avonV2LightColorTokens.colorLowEmphasis,
      hint: avonV2LightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: avonV2LightColorTokens.colorHighlight,
      link: avonV2LightColorTokens.colorLink,
      linkContrastText: avonV2LightColorTokens.colorOnLink,
      warning: avonV2LightColorTokens.colorWarning,
      warningContrastText: avonV2LightColorTokens.colorOnWarning
    }
  },
  typography: {
    ...typography,
    ...fontSize
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: avonV2LightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: avonV2LightColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
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
          color: `${avonV2LightColorTokens.colorHighlight}3D`,
          borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${avonV2LightColorTokens.colorHighlight}3D`,
          backgroundColor: `${avonV2LightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${avonV2LightColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${avonV2LightColorTokens.colorHighlight}3D`,
          borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: avonV2LightColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        padding: '8px',
        color: avonV2LightColorTokens.colorHighEmphasis
      },
      sizeSmall: {
        padding: '4px'
      }
    },
    MuiExpansionPanel: {
      root: {
        border: 'transparent 1px solid',
        '&$expanded': {
          borderColor: avonV2LightColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: avonV2LightColorTokens.colorOnPrimary,
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
            avonV2LightColorTokens.colorOnSecondary,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(avonV2LightColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              avonV2LightColorTokens.colorHighlight,
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
          backgroundColor: hexToRgba(avonV2LightColorTokens.colorHighlight, 0.04)
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
        backgroundColor: hexToRgba(avonV2LightColorTokens.colorHighlight, 0.12),
        color: avonV2LightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(avonV2LightColorTokens.colorHighlight, 0.24),
          color: avonV2LightColorTokens.colorHighEmphasis
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: avonV2LightColorTokens.colorPrimary
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: avonV2LightColorTokens.colorSecondary
        }
      },
      outlined: {
        borderColor: hexToRgba(avonV2LightColorTokens.colorHighlight, 0.12),
        color: avonV2LightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: avonV2LightColorTokens.colorHighlight
      },
      outlinedSecondary: {
        color: avonV2LightColorTokens.colorHighlight
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
        color: hexToRgba(avonV2LightColorTokens.colorHighlight, 0.8),
        '&:hover': {
          color: avonV2LightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonV2LightColorTokens.colorOnPrimary, 0.8),
        '&:hover': {
          color: avonV2LightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonV2LightColorTokens.colorOnSecondary, 0.8),
        '&:hover': {
          color: avonV2LightColorTokens.colorOnSecondary
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
        boxShadow: `${avonV2LightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: avonV2LightColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${avonV2LightColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${avonV2LightColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${avonV2LightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${avonV2LightColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${avonV2LightColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${avonV2LightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${avonV2LightColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: avonV2LightColorTokens.colorMediumEmphasis
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
          color: avonV2LightColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: avonV2LightColorTokens.colorAlert
        }
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
          borderColor: avonV2LightColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: avonV2LightColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV2LightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV2LightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV2LightColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: avonV2LightColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: avonV2LightColorTokens.colorHighEmphasis
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
        color: avonV2LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2LightColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: avonV2LightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: avonV2LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2LightColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: avonV2LightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: avonV2LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2LightColorTokens.colorWarning, 0.16),
        '& .MuiAlert-icon': {
          color: avonV2LightColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: avonV2LightColorTokens.colorHighEmphasis,
        borderColor: avonV2LightColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: avonV2LightColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: avonV2LightColorTokens.colorOnWarning,
        backgroundColor: avonV2LightColorTokens.colorWarning
      },
      standardInfo: {
        color: avonV2LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2LightColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: avonV2LightColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: avonV2LightColorTokens.colorHighEmphasis,
        borderColor: avonV2LightColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: avonV2LightColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: avonV2LightColorTokens.colorLink
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
    }
  }
}
