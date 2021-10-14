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
     * @deprecated `biomeDarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.biome.dark.color` from `natds-themes`.
     */
    biomeDarkColorTokens
  }
} = tokens

const { color, opacity, asset } = themes.biome.dark

export const biomeDark: ITheme = {
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
      disabled: hexToRgba(biomeDarkColorTokens.colorOnSecondary, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: biomeDarkColorTokens.colorLowEmphasis,
    primary: {
      main: biomeDarkColorTokens.colorPrimary,
      light: biomeDarkColorTokens.colorPrimaryLight,
      dark: biomeDarkColorTokens.colorPrimaryDark,
      contrastText: biomeDarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: biomeDarkColorTokens.colorSecondary,
      light: biomeDarkColorTokens.colorSecondaryLight,
      dark: biomeDarkColorTokens.colorSecondaryDark,
      contrastText: biomeDarkColorTokens.colorOnSecondary
    },
    error: {
      main: biomeDarkColorTokens.colorAlert,
      contrastText: biomeDarkColorTokens.colorOnAlert
    },
    success: {
      main: biomeDarkColorTokens.colorSuccess,
      contrastText: biomeDarkColorTokens.colorOnSuccess
    },
    background: {
      paper: biomeDarkColorTokens.colorSurface,
      default: biomeDarkColorTokens.colorBackground,
      paperContrastText: biomeDarkColorTokens.colorOnSurface,
      defaultContrastText: biomeDarkColorTokens.colorOnBackground
    },
    text: {
      primary: biomeDarkColorTokens.colorHighEmphasis,
      secondary: biomeDarkColorTokens.colorMediumEmphasis,
      disabled: biomeDarkColorTokens.colorLowEmphasis,
      hint: biomeDarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: biomeDarkColorTokens.colorHighlight,
      link: biomeDarkColorTokens.colorLink,
      linkContrastText: biomeDarkColorTokens.colorOnLink,
      warning: biomeDarkColorTokens.colorWarning,
      warningContrastText: biomeDarkColorTokens.colorOnSecondary
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
        color: biomeDarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: biomeDarkColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
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
          color: `${biomeDarkColorTokens.colorHighlight}3D`,
          borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${biomeDarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${biomeDarkColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${biomeDarkColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${biomeDarkColorTokens.colorHighlight}3D`,
          borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: biomeDarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: biomeDarkColorTokens.colorHighEmphasis,
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
          borderColor: biomeDarkColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: biomeDarkColorTokens.colorSurface,
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
            biomeDarkColorTokens.colorHighEmphasis,
            0.16
          )
        },
        '&$selected': {
          background: hexToRgba(biomeDarkColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              biomeDarkColorTokens.colorOnSecondary,
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
            biomeDarkColorTokens.colorOnSecondary,
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
          biomeDarkColorTokens.colorOnBackground,
          0.12
        ),
        color: biomeDarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            biomeDarkColorTokens.colorOnBackground,
            0.24
          ),
          color: biomeDarkColorTokens.colorOnBackground
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickable: {
        '&:hover': {
          backgroundColor: hexToRgba(
            biomeDarkColorTokens.colorOnBackground,
            0.16
          )
        },
        '&:focus': {
          backgroundColor: hexToRgba(
            biomeDarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: biomeDarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: biomeDarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(
          biomeDarkColorTokens.colorOnBackground,
          0.12
        ),
        color: biomeDarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: biomeDarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: biomeDarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: biomeDarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: biomeDarkColorTokens.colorSecondary
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
        color: hexToRgba(biomeDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: hexToRgba(biomeDarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(biomeDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: biomeDarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(biomeDarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: biomeDarkColorTokens.colorOnBackground
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
        boxShadow: `${biomeDarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: biomeDarkColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${biomeDarkColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${biomeDarkColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${biomeDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${biomeDarkColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${biomeDarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${biomeDarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${biomeDarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: biomeDarkColorTokens.colorMediumEmphasis
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
          color: biomeDarkColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: biomeDarkColorTokens.colorHighEmphasis
        }
      }
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          color: biomeDarkColorTokens.colorMediumEmphasis
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: biomeDarkColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: biomeDarkColorTokens.colorHighEmphasis
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
          borderColor: biomeDarkColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: biomeDarkColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${biomeDarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${biomeDarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${biomeDarkColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fill: biomeDarkColorTokens.colorMediumEmphasis
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
        color: biomeDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          biomeDarkColorTokens.colorSuccess,
          0.16
        )
      },
      outlinedSuccess: {
        color: biomeDarkColorTokens.colorHighEmphasis
      },
      standardError: {
        color: biomeDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(biomeDarkColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: biomeDarkColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: biomeDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(
          biomeDarkColorTokens.colorWarning,
          0.16
        ),
        '& .MuiAlert-icon': {
          color: biomeDarkColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: biomeDarkColorTokens.colorHighEmphasis,
        borderColor: biomeDarkColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: biomeDarkColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: biomeDarkColorTokens.colorOnWarning,
        backgroundColor: biomeDarkColorTokens.colorWarning
      },
      standardInfo: {
        color: biomeDarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(biomeDarkColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: biomeDarkColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: biomeDarkColorTokens.colorHighEmphasis,
        borderColor: biomeDarkColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: biomeDarkColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: biomeDarkColorTokens.colorLink
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
