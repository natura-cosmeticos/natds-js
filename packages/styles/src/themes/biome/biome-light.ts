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
     * @deprecated `biomeLightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.biome.light.color` from `natds-themes`.
     */
    biomeLightColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.biome.light

export const biomeLight: ITheme = {
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
      disabled: hexToRgba(biomeLightColorTokens.colorHighlight, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: biomeLightColorTokens.colorLowEmphasis,
    primary: {
      main: biomeLightColorTokens.colorPrimary,
      light: biomeLightColorTokens.colorPrimaryLight,
      dark: biomeLightColorTokens.colorPrimaryDark,
      contrastText: biomeLightColorTokens.colorOnPrimary
    },
    secondary: {
      main: biomeLightColorTokens.colorSecondary,
      light: biomeLightColorTokens.colorSecondaryLight,
      dark: biomeLightColorTokens.colorSecondaryDark,
      contrastText: biomeLightColorTokens.colorOnSecondary
    },
    error: {
      main: biomeLightColorTokens.colorAlert,
      contrastText: biomeLightColorTokens.colorOnAlert
    },
    success: {
      main: biomeLightColorTokens.colorSuccess,
      contrastText: biomeLightColorTokens.colorOnSuccess
    },
    background: {
      paper: biomeLightColorTokens.colorSurface,
      default: biomeLightColorTokens.colorBackground,
      paperContrastText: biomeLightColorTokens.colorOnSurface,
      defaultContrastText: biomeLightColorTokens.colorOnBackground
    },
    text: {
      primary: biomeLightColorTokens.colorHighEmphasis,
      secondary: biomeLightColorTokens.colorMediumEmphasis,
      disabled: biomeLightColorTokens.colorLowEmphasis,
      hint: biomeLightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: biomeLightColorTokens.colorHighlight,
      link: biomeLightColorTokens.colorLink,
      linkContrastText: biomeLightColorTokens.colorOnLink,
      warning: biomeLightColorTokens.colorWarning,
      warningContrastText: biomeLightColorTokens.colorOnWarning
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
        color: biomeLightColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: biomeLightColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${biomeLightColorTokens.colorHighlight}3D`
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
          color: `${biomeLightColorTokens.colorHighlight}3D`,
          borderColor: `${biomeLightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${biomeLightColorTokens.colorHighlight}3D`,
          backgroundColor: `${biomeLightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${biomeLightColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${biomeLightColorTokens.colorHighlight}3D`,
          borderColor: `${biomeLightColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: biomeLightColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        padding: '8px',
        color: biomeLightColorTokens.colorHighEmphasis
      },
      sizeSmall: {
        padding: '4px'
      }
    },
    MuiExpansionPanel: {
      root: {
        border: 'transparent 1px solid',
        '&$expanded': {
          borderColor: biomeLightColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: biomeLightColorTokens.colorOnPrimary,
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
            biomeLightColorTokens.colorOnSurface,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(
            biomeLightColorTokens.colorPrimary,
            0.16
          ),
          '&:hover': {
            backgroundColor: hexToRgba(
              biomeLightColorTokens.colorHighlight,
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
            biomeLightColorTokens.colorHighlight,
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
          biomeLightColorTokens.colorHighlight,
          0.12
        ),
        color: biomeLightColorTokens.colorHighEmphasis,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            biomeLightColorTokens.colorHighlight,
            0.24
          ),
          color: biomeLightColorTokens.colorHighEmphasis
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: biomeLightColorTokens.colorPrimary
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: biomeLightColorTokens.colorSecondary
        }
      },
      outlined: {
        borderColor: hexToRgba(
          biomeLightColorTokens.colorHighlight,
          0.12
        ),
        color: biomeLightColorTokens.colorHighlight
      },
      outlinedPrimary: {
        color: biomeLightColorTokens.colorHighlight
      },
      outlinedSecondary: {
        color: biomeLightColorTokens.colorHighlight
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
        color: hexToRgba(biomeLightColorTokens.colorHighlight, 0.8),
        '&:hover': {
          color: biomeLightColorTokens.colorHighlight
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(biomeLightColorTokens.colorOnPrimary, 0.8),
        '&:hover': {
          color: biomeLightColorTokens.colorOnPrimary
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(biomeLightColorTokens.colorOnSecondary, 0.8),
        '&:hover': {
          color: biomeLightColorTokens.colorOnSecondary
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
        boxShadow: `${biomeLightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: biomeLightColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${biomeLightColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${biomeLightColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${biomeLightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${biomeLightColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${biomeLightColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${biomeLightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${biomeLightColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: biomeLightColorTokens.colorMediumEmphasis
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
          color: biomeLightColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: biomeLightColorTokens.colorAlert
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: biomeLightColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: biomeLightColorTokens.colorHighEmphasis
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
          borderColor: biomeLightColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${biomeLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: biomeLightColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${biomeLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${biomeLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${biomeLightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${biomeLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${biomeLightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${biomeLightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${biomeLightColorTokens.colorHighlight}3D`
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
        color: biomeLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          biomeLightColorTokens.colorSuccess,
          0.16
        )
      },
      outlinedSuccess: {
        color: biomeLightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: biomeLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          biomeLightColorTokens.colorAlert,
          0.16
        )
      },
      outlinedError: {
        color: biomeLightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: biomeLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          biomeLightColorTokens.colorWarning,
          0.16
        ),
        '& .MuiAlert-icon': {
          color: biomeLightColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: biomeLightColorTokens.colorHighEmphasis,
        borderColor: biomeLightColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: biomeLightColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: biomeLightColorTokens.colorOnWarning,
        backgroundColor: biomeLightColorTokens.colorWarning
      },
      standardInfo: {
        color: biomeLightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(biomeLightColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: biomeLightColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: biomeLightColorTokens.colorHighEmphasis,
        borderColor: biomeLightColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: biomeLightColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: biomeLightColorTokens.colorLink
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
