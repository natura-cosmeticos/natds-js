/* eslint-disable import/prefer-default-export */
/* eslint-disable max-lines,no-magic-numbers,sort-keys */
// trigger jenkins v3 update theme 0.84.0
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
     * @deprecated `naturaV3LightColorTokens` are deprecated since v0.20 and will be removed at v1.0.
     * Please use `theme.natura.light.color` from `natds-themes`.
     */
    naturaV3LightColorTokens
  }
} = tokens

const {
  borderRadius, color, opacity, asset, button
} = themes.natura_v3.light

export const naturaV3Light: ITheme = {
  asset,
  shape: {
    borderRadius: borderRadius.medium,
    buttonBorderRadius: button.borderRadius,

    /**
     * @todo move this token to natds-themes
     */
    badgeBorderRadius: 100
  },
  avatarSizes,
  buttonSizes,
  color,
  iconSizes,

  /**
   * @since 0.22
   * @todo Adopt opacity tokens from theme and deprecate legacy opacity
   */
  opacity: legacyOpacity,
  sizes,
  spacing: spacing.spacing,
  palette: {
    type: 'light',
    action: {
      /**
       * @since 0.24
       */
      active: hexToRgba(color.highlight, opacity.mediumHigh),
      disabled: hexToRgba(naturaV3LightColorTokens.colorOnPrimaryLight, 0.24)
    },

    /**
     * @since 0.24
     */
    divider: naturaV3LightColorTokens.colorLowEmphasis,
    primary: {
      main: naturaV3LightColorTokens.colorPrimary,
      light: naturaV3LightColorTokens.colorPrimaryLight,
      dark: naturaV3LightColorTokens.colorPrimaryDark,
      contrastText: naturaV3LightColorTokens.colorOnPrimary
    },
    secondary: {
      main: naturaV3LightColorTokens.colorSecondary,
      light: naturaV3LightColorTokens.colorSecondaryLight,
      dark: naturaV3LightColorTokens.colorSecondaryDark,
      contrastText: naturaV3LightColorTokens.colorOnSecondary
    },
    error: {
      main: naturaV3LightColorTokens.colorAlert,
      contrastText: naturaV3LightColorTokens.colorOnAlert
    },
    success: {
      main: naturaV3LightColorTokens.colorSuccess,
      contrastText: naturaV3LightColorTokens.colorOnSuccess
    },
    background: {
      paper: naturaV3LightColorTokens.colorSurface,
      default: naturaV3LightColorTokens.colorBackground,
      paperContrastText: naturaV3LightColorTokens.colorOnSurface,
      defaultContrastText: naturaV3LightColorTokens.colorOnBackground
    },
    text: {
      primary: naturaV3LightColorTokens.colorHighEmphasis,
      secondary: naturaV3LightColorTokens.colorMediumEmphasis,
      disabled: naturaV3LightColorTokens.colorLowEmphasis,
      hint: naturaV3LightColorTokens.colorLowEmphasis
    },
    complementary: {
      highlight: naturaV3LightColorTokens.colorHighlight,
      link: naturaV3LightColorTokens.colorLink,
      linkContrastText: naturaV3LightColorTokens.colorOnLink,
      warning: naturaV3LightColorTokens.colorWarning,
      warningContrastText: naturaV3LightColorTokens.colorOnWarning
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
        color: naturaV3LightColorTokens.colorOnPrimary
      },
      outlinedSecondary: {
        color: naturaV3LightColorTokens.colorOnPrimary,
        '&.Mui-disabled': {
          borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
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
          color: `${naturaV3LightColorTokens.colorHighlight}3D`,
          borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
        }
      },
      contained: {
        '&.Mui-disabled': {
          color: `${naturaV3LightColorTokens.colorHighlight}3D`,
          backgroundColor: `${naturaV3LightColorTokens.colorHighlight}14`
        }
      },
      outlined: {
        padding: null,
        borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`,
        '&.Mui-disabled': {
          color: `${naturaV3LightColorTokens.colorHighlight}3D`,
          borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
        }
      }
    },
    MuiAvatar: {
      colorDefault: {
        color: naturaV3LightColorTokens.colorOnPrimary
      }
    },
    MuiIconButton: {
      root: {
        padding: '8px',
        color: naturaV3LightColorTokens.colorHighEmphasis
      },
      sizeSmall: {
        padding: '4px'
      }
    },
    MuiExpansionPanel: {
      root: {
        border: 'transparent 1px solid',
        '&$expanded': {
          borderColor: naturaV3LightColorTokens.colorPrimary
        },
        '&$disabled': {
          backgroundColor: naturaV3LightColorTokens.colorSurface,
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
            naturaV3LightColorTokens.colorOnSecondary,
            0.04
          )
        },
        '&$selected': {
          backgroundColor: hexToRgba(naturaV3LightColorTokens.colorPrimary, 0.16),
          '&:hover': {
            backgroundColor: hexToRgba(
              naturaV3LightColorTokens.colorOnSecondary,
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
            naturaV3LightColorTokens.colorOnSecondary,
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
          naturaV3LightColorTokens.colorOnSecondary,
          0.12
        ),
        color: naturaV3LightColorTokens.colorOnPrimary,
        fontSize: fontSize.subtitle2.fontSize,
        '& $avatar': {
          backgroundColor: hexToRgba(
            naturaV3LightColorTokens.colorOnSecondary,
            0.24
          ),
          color: naturaV3LightColorTokens.colorOnPrimary
        },
        '&$disabled': {
          opacity: 0.4
        }
      },
      clickableColorPrimary: {
        '&:hover': {
          backgroundColor: naturaV3LightColorTokens.colorPrimaryDark
        }
      },
      clickableColorSecondary: {
        '&:hover': {
          backgroundColor: naturaV3LightColorTokens.colorPrimaryDark
        }
      },
      outlined: {
        borderColor: hexToRgba(naturaV3LightColorTokens.colorOnSecondary, 0.12),
        color: naturaV3LightColorTokens.colorOnSecondary
      },
      outlinedPrimary: {
        color: naturaV3LightColorTokens.colorOnSecondary
      },
      outlinedSecondary: {
        color: naturaV3LightColorTokens.colorOnSecondary
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
        color: hexToRgba(naturaV3LightColorTokens.colorOnSecondary, 0.8),
        '&:hover': {
          color: naturaV3LightColorTokens.colorOnSecondary
        }
      },
      deleteIconSmall: {
        width: `${sizes.small}px`,
        height: `${sizes.small}px`,
        fontSize: `${sizes.small}px`
      },
      deleteIconColorPrimary: {
        color: hexToRgba(naturaV3LightColorTokens.colorSurface, 0.8),
        '&:hover': {
          color: naturaV3LightColorTokens.colorSurface
        }
      },
      deleteIconColorSecondary: {
        color: hexToRgba(naturaV3LightColorTokens.colorSurface, 0.8),
        '&:hover': {
          color: naturaV3LightColorTokens.colorSurface
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
        boxShadow: `${naturaV3LightColorTokens.colorLowEmphasis} 0 0 0 1px`,
        color: naturaV3LightColorTokens.colorHighEmphasis,
        width: '100%',
        "&[data-state='error']": {
          boxShadow: `${naturaV3LightColorTokens.colorAlert} 0 0 0 1px`
        },
        "&[data-state='success']": {
          boxShadow: `${naturaV3LightColorTokens.colorSuccess} 0 0 0 1px`
        },
        '&:hover': {
          boxShadow: `${naturaV3LightColorTokens.colorMediumEmphasis} 0 0 0 1px`,
          '&.Mui-disabled': {
            boxShadow: `${naturaV3LightColorTokens.colorLowEmphasis} 0 0 0 1px`
          }
        },
        '&.Mui-focused': {
          boxShadow: `${naturaV3LightColorTokens.colorPrimary} 0 0 0 2px`
        },
        '&.MuiFilled:not(.Mui-focused)': {
          boxShadow: `${naturaV3LightColorTokens.colorHighEmphasis} 0 0 0 1px`,
          '&:hover': {
            boxShadow: `${naturaV3LightColorTokens.colorMediumEmphasis} 0 0 0 1px`
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
          color: naturaV3LightColorTokens.colorMediumEmphasis
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
          color: naturaV3LightColorTokens.colorMediumEmphasis
        },
        '&.Mui-error': {
          color: naturaV3LightColorTokens.colorAlert
        }
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        },
        '&.Mui-disabled': {
          color: naturaV3LightColorTokens.colorLowEmphasis
        }
      },
      icon: {
        top: sizes.micro,
        color: naturaV3LightColorTokens.colorHighEmphasis
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
          borderColor: naturaV3LightColorTokens.colorPrimaryDark,
          '&.Mui-disabled': {
            borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedSecondary: {
        '&:not(:last-child)': {
          borderColor: naturaV3LightColorTokens.colorSecondaryDark,
          '&.Mui-disabled': {
            borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedContainedHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${naturaV3LightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
          }
        }
      },
      groupedTextPrimary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextSecondary: {
        '&:not(:last-child).Mui-disabled': {
          borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
        }
      },
      groupedTextHorizontal: {
        '&:not(:last-child)': {
          borderRightColor: `${naturaV3LightColorTokens.colorHighlight}1F`,
          '&.Mui-disabled': {
            borderColor: `${naturaV3LightColorTokens.colorHighlight}3D`
          }
        }
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
        color: naturaV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3LightColorTokens.colorSuccess, 0.16)
      },
      outlinedSuccess: {
        color: naturaV3LightColorTokens.colorHighEmphasis
      },
      standardError: {
        color: naturaV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3LightColorTokens.colorAlert, 0.16)
      },
      outlinedError: {
        color: naturaV3LightColorTokens.colorHighEmphasis
      },
      standardWarning: {
        color: naturaV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3LightColorTokens.colorWarning, 0.16),
        '& .MuiAlert-icon': {
          color: naturaV3LightColorTokens.colorWarning
        }
      },
      outlinedWarning: {
        color: naturaV3LightColorTokens.colorHighEmphasis,
        borderColor: naturaV3LightColorTokens.colorWarning,
        '& .MuiAlert-icon': {
          color: naturaV3LightColorTokens.colorWarning
        }
      },
      filledWarning: {
        color: naturaV3LightColorTokens.colorOnWarning,
        backgroundColor: naturaV3LightColorTokens.colorWarning
      },
      standardInfo: {
        color: naturaV3LightColorTokens.colorHighEmphasis,
        backgroundColor: hexToRgba(naturaV3LightColorTokens.colorLink, 0.16),
        '& .MuiAlert-icon': {
          color: naturaV3LightColorTokens.colorLink
        }
      },
      outlinedInfo: {
        color: naturaV3LightColorTokens.colorHighEmphasis,
        borderColor: naturaV3LightColorTokens.colorLink,
        '& .MuiAlert-icon': {
          color: naturaV3LightColorTokens.colorLink
        }
      },
      filledInfo: {
        backgroundColor: naturaV3LightColorTokens.colorLink
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
