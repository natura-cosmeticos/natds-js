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
     * @deprecated `avonV3DarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.avon.dark.color` from `natds-themes`.
     */
    avonV3DarkColorTokens
  }
} = tokens

const {
  color, opacity, asset, borderRadius, button
} = themes.avon_v3.dark

export const avonV2Dark: ITheme = {
  asset,
  shape: {
    borderRadius: borderRadius.medium,
    buttonBorderRadius: button.borderRadius,
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
      disabled: hexToRgba(avonV3DarkColorTokens.colorOnSecondary, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: avonV3DarkColorTokens.colorLowEmphasis,
    primary: {
      main: avonV3DarkColorTokens.colorPrimary,
      light: avonV3DarkColorTokens.colorPrimaryLight,
      dark: avonV3DarkColorTokens.colorPrimaryDark,
      contrastText: avonV3DarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: avonV3DarkColorTokens.colorSecondary,
      light: avonV3DarkColorTokens.colorSecondaryLight,
      dark: avonV3DarkColorTokens.colorSecondaryDark,
      contrastText: avonV3DarkColorTokens.colorOnSecondary
    },
    error: {
      main: avonV3DarkColorTokens.colorAlert,
      contrastText: avonV3DarkColorTokens.colorOnAlert
    },
    success: {
      main: avonV3DarkColorTokens.colorSuccess,
      contrastText: avonV3DarkColorTokens.colorOnSuccess
    },
    background: {
      paper: avonV3DarkColorTokens.colorSurface,
      default: avonV3DarkColorTokens.colorBackground,
      paperContrastText: avonV3DarkColorTokens.colorOnSurface,
      defaultContrastText: avonV3DarkColorTokens.colorOnBackground
    },
    text: {
      primary: avonV3DarkColorTokens.colorHighEmphasis,
      secondary: avonV3DarkColorTokens.colorMediumEmphasis,
      disabled: avonV3DarkColorTokens.colorLowEmphasis,
      hint: avonV3DarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: avonV3DarkColorTokens.colorHighlight,
      link: avonV3DarkColorTokens.colorLink,
      linkContrastText: avonV3DarkColorTokens.colorOnLink,
      warning: avonV3DarkColorTokens.colorWarning,
      warningContrastText: avonV3DarkColorTokens.colorOnSecondary
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
        color: avonV3DarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`,
        color: avonV3DarkColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
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
          color: `${avonV3DarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
        }
      },
      textSecondary: {
        padding: null,
        color: `${avonV3DarkColorTokens.colorHighlight}`,
        '&.Mui-disabled': {
          color: `${avonV3DarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${avonV3DarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${avonV3DarkColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${avonV3DarkColorTokens.colorHighlight}3D`,
          borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: avonV3DarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: avonV3DarkColorTokens.colorHighEmphasis,
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
          borderColor: avonV3DarkColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: avonV3DarkColorTokens.colorSurface,
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
            avonV3DarkColorTokens.colorHighEmphasis,
            0.16
          )
        },
        '&$selected': {
          background: hexToRgba(avonV3DarkColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              avonV3DarkColorTokens.colorOnSecondary,
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
            avonV3DarkColorTokens.colorOnSecondary,
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
        backgroundColor: hexToRgba(avonV3DarkColorTokens.colorOnBackground, 0.12),
        color: avonV3DarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            avonV3DarkColorTokens.colorOnBackground,
            0.24
          ),
          color: avonV3DarkColorTokens.colorOnBackground
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickable: {
        '&:hover': {
          backgroundColor: hexToRgba(
            avonV3DarkColorTokens.colorOnBackground,
            0.16
          )
        },
        '&:focus': {
          backgroundColor: hexToRgba(
            avonV3DarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: avonV3DarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: avonV3DarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(avonV3DarkColorTokens.colorOnBackground, 0.12),
        color: avonV3DarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: avonV3DarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: avonV3DarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: avonV3DarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: avonV3DarkColorTokens.colorSecondary
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
        color: hexToRgba(avonV3DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: hexToRgba(avonV3DarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(avonV3DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: avonV3DarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(avonV3DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: avonV3DarkColorTokens.colorOnBackground
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
        boxShadow: `${avonV3DarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: avonV3DarkColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${avonV3DarkColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${avonV3DarkColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${avonV3DarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${avonV3DarkColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${avonV3DarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${avonV3DarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${avonV3DarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: avonV3DarkColorTokens.colorMediumEmphasis
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
          color: avonV3DarkColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: avonV3DarkColorTokens.colorHighEmphasis
        }
      }
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          color: avonV3DarkColorTokens.colorMediumEmphasis
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: avonV3DarkColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: avonV3DarkColorTokens.colorHighEmphasis
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
          borderColor: avonV3DarkColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: avonV3DarkColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV3DarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${avonV3DarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${avonV3DarkColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fill: avonV3DarkColorTokens.colorMediumEmphasis
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
        color: avonV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3DarkColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: avonV3DarkColorTokens.colorHighEmphasis
      },
      standardError: {
        color: avonV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3DarkColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: avonV3DarkColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: avonV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3DarkColorTokens.colorWarning, 0.16),
        '& .MuiAlert-icon': {
          color: avonV3DarkColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: avonV3DarkColorTokens.colorHighEmphasis,
        borderColor: avonV3DarkColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: avonV3DarkColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: avonV3DarkColorTokens.colorOnWarning,
        backgroundColor: avonV3DarkColorTokens.colorWarning
      },
      standardInfo: {
        color: avonV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(avonV3DarkColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: avonV3DarkColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: avonV3DarkColorTokens.colorHighEmphasis,
        borderColor: avonV3DarkColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: avonV3DarkColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: avonV3DarkColorTokens.colorLink
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
