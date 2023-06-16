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
     * @deprecated `avonV2DarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.dark.color` from `natds-themes`.
     */
    avonV2DarkColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.avon_v2.dark

export const avonV2Dark: ITheme = {
  asset,
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
      disabled: hexToRgba(avonV2DarkColorTokens.colorOnSecondary, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: avonV2DarkColorTokens.colorLowEmphasis,
    primary: {
      main: avonV2DarkColorTokens.colorPrimary,
      light: avonV2DarkColorTokens.colorPrimaryLight,
      dark: avonV2DarkColorTokens.colorPrimaryDark,
      contrastText: avonV2DarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: avonV2DarkColorTokens.colorSecondary,
      light: avonV2DarkColorTokens.colorSecondaryLight,
      dark: avonV2DarkColorTokens.colorSecondaryDark,
      contrastText: avonV2DarkColorTokens.colorOnSecondary
    },
    error: {
      main: avonV2DarkColorTokens.colorAlert,
      contrastText: avonV2DarkColorTokens.colorOnAlert
    },
    success: {
      main: avonV2DarkColorTokens.colorSuccess,
      contrastText: avonV2DarkColorTokens.colorOnSuccess
    },
    background: {
      paper: avonV2DarkColorTokens.colorSurface,
      default: avonV2DarkColorTokens.colorBackground,
      paperContrastText: avonV2DarkColorTokens.colorOnSurface,
      defaultContrastText: avonV2DarkColorTokens.colorOnBackground
    },
    text: {
      primary: avonV2DarkColorTokens.colorHighEmphasis,
      secondary: avonV2DarkColorTokens.colorMediumEmphasis,
      disabled: avonV2DarkColorTokens.colorLowEmphasis,
      hint: avonV2DarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: avonV2DarkColorTokens.colorHighlight,
      link: avonV2DarkColorTokens.colorLink,
      linkContrastText: avonV2DarkColorTokens.colorOnLink,
      warning: avonV2DarkColorTokens.colorWarning,
      warningContrastText: avonV2DarkColorTokens.colorOnSecondary
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
        color: avonV2DarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`,
        color: avonV2DarkColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
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
          color: `${avonV2DarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
        }
      },
      textSecondary: {
        padding: null,
        color: `${avonV2DarkColorTokens.colorHighlight}`,
        '&.Mui-disabled': {
          color: `${avonV2DarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${avonV2DarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${avonV2DarkColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${avonV2DarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: avonV2DarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: avonV2DarkColorTokens.colorHighEmphasis,
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
          borderColor: avonV2DarkColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: avonV2DarkColorTokens.colorSurface,
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
            avonV2DarkColorTokens.colorHighEmphasis,
            0.16
          )
        },
        '&$selected': {
          background: hexToRgba(avonV2DarkColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              avonV2DarkColorTokens.colorOnSecondary,
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
            avonV2DarkColorTokens.colorOnSecondary,
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
        backgroundColor: hexToRgba(avonV2DarkColorTokens.colorOnBackground, 0.12),
        color: avonV2DarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            avonV2DarkColorTokens.colorOnBackground,
            0.24
          ),
          color: avonV2DarkColorTokens.colorOnBackground
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickable: {
        '&:hover': {
          backgroundColor: hexToRgba(
            avonV2DarkColorTokens.colorOnBackground,
            0.16
          )
        },
        '&:focus': {
          backgroundColor: hexToRgba(
            avonV2DarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: avonV2DarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: avonV2DarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(avonV2DarkColorTokens.colorOnBackground, 0.12),
        color: avonV2DarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: avonV2DarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: avonV2DarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: avonV2DarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: avonV2DarkColorTokens.colorSecondary
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
        color: hexToRgba(avonV2DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: hexToRgba(avonV2DarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonV2DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: avonV2DarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonV2DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: avonV2DarkColorTokens.colorOnBackground
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
        boxShadow: `${avonV2DarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: avonV2DarkColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${avonV2DarkColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${avonV2DarkColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${avonV2DarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${avonV2DarkColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${avonV2DarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${avonV2DarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${avonV2DarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: avonV2DarkColorTokens.colorMediumEmphasis
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
          color: avonV2DarkColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: avonV2DarkColorTokens.colorHighEmphasis
        }
      }
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          color: avonV2DarkColorTokens.colorMediumEmphasis
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: avonV2DarkColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: avonV2DarkColorTokens.colorHighEmphasis
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
          borderColor: avonV2DarkColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: avonV2DarkColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV2DarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV2DarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV2DarkColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fill: avonV2DarkColorTokens.colorMediumEmphasis
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
        color: avonV2DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2DarkColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: avonV2DarkColorTokens.colorHighEmphasis
      },
      standardError: {
        color: avonV2DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2DarkColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: avonV2DarkColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: avonV2DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2DarkColorTokens.colorWarning, 0.16),
        '& .MuiAlert-icon': {
          color: avonV2DarkColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: avonV2DarkColorTokens.colorHighEmphasis,
        borderColor: avonV2DarkColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: avonV2DarkColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: avonV2DarkColorTokens.colorOnWarning,
        backgroundColor: avonV2DarkColorTokens.colorWarning
      },
      standardInfo: {
        color: avonV2DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV2DarkColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: avonV2DarkColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: avonV2DarkColorTokens.colorHighEmphasis,
        borderColor: avonV2DarkColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: avonV2DarkColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: avonV2DarkColorTokens.colorLink
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
