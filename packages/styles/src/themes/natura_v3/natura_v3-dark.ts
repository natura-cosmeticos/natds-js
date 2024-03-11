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
  borderRadius, color, opacity, asset, button
} = themes.natura_v3.dark

const {
  colorTokens: {
    /**
     * @deprecated `naturaV3DarkColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.natura.dark.color` from `natds-themes`.
     */
    naturaV3DarkColorTokens
  }
} = tokens

export const naturaV3Dark: ITheme = {
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
   * @todo Adopt opacity tokens from theme and deprecate legacy opacity
   */
  opacity: legacyOpacity,
  spacing: spacing.spacing,
  palette: {
    action: {
      /**
       * @since 0.24
       */
      active: hexToRgba(color.highlight, opacity.mediumHigh),
      disabled: hexToRgba(naturaV3DarkColorTokens.colorOnSecondary, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: naturaV3DarkColorTokens.colorLowEmphasis,
    primary: {
      main: naturaV3DarkColorTokens.colorPrimary,
      light: naturaV3DarkColorTokens.colorPrimaryLight,
      dark: naturaV3DarkColorTokens.colorPrimaryDark,
      contrastText: naturaV3DarkColorTokens.colorOnPrimary
    },
    secondary: {
      main: naturaV3DarkColorTokens.colorSecondary,
      light: naturaV3DarkColorTokens.colorPrimaryLight,
      dark: naturaV3DarkColorTokens.colorPrimaryDark,
      contrastText: naturaV3DarkColorTokens.colorOnSecondary
    },
    error: {
      main: naturaV3DarkColorTokens.colorAlert,
      contrastText: naturaV3DarkColorTokens.colorOnAlert
    },
    success: {
      main: naturaV3DarkColorTokens.colorSuccess,
      contrastText: naturaV3DarkColorTokens.colorOnSuccess
    },
    background: {
      paper: naturaV3DarkColorTokens.colorSurface,
      default: naturaV3DarkColorTokens.colorBackground,
      paperContrastText: naturaV3DarkColorTokens.colorOnSurface,
      defaultContrastText: naturaV3DarkColorTokens.colorOnBackground
    },
    text: {
      primary: naturaV3DarkColorTokens.colorHighEmphasis,
      secondary: naturaV3DarkColorTokens.colorMediumEmphasis,
      disabled: naturaV3DarkColorTokens.colorLowEmphasis,
      hint: naturaV3DarkColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: naturaV3DarkColorTokens.colorHighlight,
      link: naturaV3DarkColorTokens.colorLink,
      linkContrastText: naturaV3DarkColorTokens.colorOnLink,
      warning: naturaV3DarkColorTokens.colorWarning,
      warningContrastText: naturaV3DarkColorTokens.colorOnSecondary
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
        color: naturaV3DarkColorTokens.colorHighEmphasis
      },
      outlinedSecondary: {
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        '&.Mui-disabled': {
          borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
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
          color: `${naturaV3DarkColorTokens.colorHighlight}3D`,
          borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${naturaV3DarkColorTokens.colorHighlight}3D`,
          backgroundColor: `${naturaV3DarkColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${naturaV3DarkColorTokens.colorHighlight}3D`,
          borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: naturaV3DarkColorTokens.colorHighEmphasis
      }
    },
    MuiIconButton: {
      root: {
        color: naturaV3DarkColorTokens.colorHighEmphasis,
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
          borderColor: naturaV3DarkColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: naturaV3DarkColorTokens.colorSurface,
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
            naturaV3DarkColorTokens.colorHighEmphasis,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(naturaV3DarkColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              naturaV3DarkColorTokens.colorOnSecondary,
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
            naturaV3DarkColorTokens.colorOnSecondary,
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
          naturaV3DarkColorTokens.colorOnBackground,
          0.12
        ),
        color: naturaV3DarkColorTokens.colorOnBackground,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            naturaV3DarkColorTokens.colorOnBackground,
            0.24
          ),
          color: naturaV3DarkColorTokens.colorOnBackground
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickable: {
        '&:hover': {
          backgroundColor: hexToRgba(
            naturaV3DarkColorTokens.colorOnBackground,
            0.16
          )
        },
        '&:focus': {
          backgroundColor: hexToRgba(
            naturaV3DarkColorTokens.colorOnBackground,
            0.16
          )
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: naturaV3DarkColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: naturaV3DarkColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(naturaV3DarkColorTokens.colorOnBackground, 0.12),
        color: naturaV3DarkColorTokens.colorOnBackground
      },
      outlinedPrimary: {
        color: naturaV3DarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: naturaV3DarkColorTokens.colorPrimary
        }
      },
      outlinedSecondary: {
        color: naturaV3DarkColorTokens.colorOnBackground,
        '& $avatar': {
          backgroundColor: naturaV3DarkColorTokens.colorSecondary
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
        color: hexToRgba(naturaV3DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: hexToRgba(naturaV3DarkColorTokens.colorOnBackground, 0.6)
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(naturaV3DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: naturaV3DarkColorTokens.colorOnBackground
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(naturaV3DarkColorTokens.colorOnBackground, 0.8),
        '&:hover': {
          color: naturaV3DarkColorTokens.colorOnBackground
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
        boxShadow: `${naturaV3DarkColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${naturaV3DarkColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${naturaV3DarkColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${naturaV3DarkColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${naturaV3DarkColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${naturaV3DarkColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${naturaV3DarkColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${naturaV3DarkColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: naturaV3DarkColorTokens.colorMediumEmphasis
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
          color: naturaV3DarkColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: naturaV3DarkColorTokens.colorHighEmphasis
        }
      }
    },
    MuiFormHelperText: {
      root: {
        '&.Mui-error': {
          color: naturaV3DarkColorTokens.colorMediumEmphasis
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: naturaV3DarkColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: naturaV3DarkColorTokens.colorHighEmphasis
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
          borderColor: naturaV3DarkColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: naturaV3DarkColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${naturaV3DarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${naturaV3DarkColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${naturaV3DarkColorTokens.colorHighlight}3D`
          }
        }
      }
    },
    MuiSvgIcon: {
      root: {
        fill: naturaV3DarkColorTokens.colorMediumEmphasis
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
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3DarkColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: naturaV3DarkColorTokens.colorHighEmphasis
      },
      standardError: {
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3DarkColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: naturaV3DarkColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3DarkColorTokens.colorWarning, 0.16),
        '& .MuiAlert-icon': {
          color: naturaV3DarkColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        borderColor: naturaV3DarkColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: naturaV3DarkColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: naturaV3DarkColorTokens.colorOnWarning,
        backgroundColor: naturaV3DarkColorTokens.colorWarning
      },
      standardInfo: {
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3DarkColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: naturaV3DarkColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: naturaV3DarkColorTokens.colorHighEmphasis,
        borderColor: naturaV3DarkColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: naturaV3DarkColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: naturaV3DarkColorTokens.colorLink
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
