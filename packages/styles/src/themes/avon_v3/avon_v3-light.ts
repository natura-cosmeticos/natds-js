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
     * @deprecated `avonV3LightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.light.color` from `natds-themes`.
     */
    avonV3LightColorTokens
  }
} = tokens

const {
  color, opacity, asset, borderRadius, button
} = themes.avon_v3.light

export const avonV3Light: ITheme = {
  asset,
  shape: {
    borderRadius: borderRadius.medium,
    buttonBorderRadius: button.borderRadius,
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
      disabled: hexToRgba(avonV3LightColorTokens.colorHighlight, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: avonV3LightColorTokens.colorLowEmphasis,
    primary: {
      main: avonV3LightColorTokens.colorPrimary,
      light: avonV3LightColorTokens.colorPrimaryLight,
      dark: avonV3LightColorTokens.colorPrimaryDark,
      contrastText: avonV3LightColorTokens.colorOnPrimary
    },
    secondary: {
      main: avonV3LightColorTokens.colorSecondary,
      light: avonV3LightColorTokens.colorSecondaryLight,
      dark: avonV3LightColorTokens.colorSecondaryDark,
      contrastText: avonV3LightColorTokens.colorOnSecondary
    },
    error: {
      main: avonV3LightColorTokens.colorAlert,
      contrastText: avonV3LightColorTokens.colorOnAlert
    },
    success: {
      main: avonV3LightColorTokens.colorSuccess,
      contrastText: avonV3LightColorTokens.colorOnSuccess
    },
    background: {
      paper: avonV3LightColorTokens.colorSurface,
      default: avonV3LightColorTokens.colorBackground,
      paperContrastText: avonV3LightColorTokens.colorOnSurface,
      defaultContrastText: avonV3LightColorTokens.colorOnBackground
    },
    text: {
      primary: avonV3LightColorTokens.colorHighEmphasis,
      secondary: avonV3LightColorTokens.colorMediumEmphasis,
      disabled: avonV3LightColorTokens.colorLowEmphasis,
      hint: avonV3LightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: avonV3LightColorTokens.colorHighlight,
      link: avonV3LightColorTokens.colorLink,
      linkContrastText: avonV3LightColorTokens.colorOnLink,
      warning: avonV3LightColorTokens.colorWarning,
      warningContrastText: avonV3LightColorTokens.colorOnWarning
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
        color: avonV3LightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: avonV3LightColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
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
          color: `${avonV3LightColorTokens.colorHighlight}3D`,
          borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${avonV3LightColorTokens.colorHighlight}3D`,
          backgroundColor: `${avonV3LightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${avonV3LightColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${avonV3LightColorTokens.colorHighlight}3D`,
          borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: avonV3LightColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        padding: '8px',
        color: avonV3LightColorTokens.colorHighEmphasis
      },
      sizeSmall: {
        padding: '4px'
      }
    },
    MuiExpansionPanel: {
      root: {
        border: 'transparent 1px solid',
        '&$expanded': {
          borderColor: avonV3LightColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: avonV3LightColorTokens.colorOnPrimary,
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
            avonV3LightColorTokens.colorOnSecondary,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(avonV3LightColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              avonV3LightColorTokens.colorHighlight,
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
          backgroundColor: hexToRgba(avonV3LightColorTokens.colorHighlight, 0.04)
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
        backgroundColor: hexToRgba(avonV3LightColorTokens.colorHighlight, 0.12),
        color: avonV3LightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(avonV3LightColorTokens.colorHighlight, 0.24),
          color: avonV3LightColorTokens.colorHighEmphasis
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: avonV3LightColorTokens.colorPrimary
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: avonV3LightColorTokens.colorSecondary
        }
      },
      outlined: {
        borderColor: hexToRgba(avonV3LightColorTokens.colorHighlight, 0.12),
        color: avonV3LightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: avonV3LightColorTokens.colorHighlight
      },
      outlinedSecondary: {
        color: avonV3LightColorTokens.colorHighlight
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
        color: hexToRgba(avonV3LightColorTokens.colorHighlight, 0.8),
        '&:hover': {
          color: avonV3LightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonV3LightColorTokens.colorOnPrimary, 0.8),
        '&:hover': {
          color: avonV3LightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonV3LightColorTokens.colorOnSecondary, 0.8),
        '&:hover': {
          color: avonV3LightColorTokens.colorOnSecondary
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
        boxShadow: `${avonV3LightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: avonV3LightColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${avonV3LightColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${avonV3LightColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${avonV3LightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${avonV3LightColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${avonV3LightColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${avonV3LightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${avonV3LightColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: avonV3LightColorTokens.colorMediumEmphasis
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
          color: avonV3LightColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: avonV3LightColorTokens.colorAlert
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
          borderColor: avonV3LightColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: avonV3LightColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV3LightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV3LightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV3LightColorTokens.colorHighlight}3D`
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
          color: avonV3LightColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: avonV3LightColorTokens.colorHighEmphasis
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
        color: avonV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3LightColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: avonV3LightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: avonV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3LightColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: avonV3LightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: avonV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3LightColorTokens.colorWarning, 0.16),
        '& .MuiAlert-icon': {
          color: avonV3LightColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: avonV3LightColorTokens.colorHighEmphasis,
        borderColor: avonV3LightColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: avonV3LightColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: avonV3LightColorTokens.colorOnWarning,
        backgroundColor: avonV3LightColorTokens.colorWarning
      },
      standardInfo: {
        color: avonV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3LightColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: avonV3LightColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: avonV3LightColorTokens.colorHighEmphasis,
        borderColor: avonV3LightColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: avonV3LightColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: avonV3LightColorTokens.colorLink
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
