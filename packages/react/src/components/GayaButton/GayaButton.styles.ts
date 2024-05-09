/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { buildTheme } from '../../ThemeProvider'
import { GayaButtonColor, GayaButtonProps } from './GayaButton.props'
import { BrandTypes } from '../../brandTypes/brandTypes'

type GayaButtonStyleProps = Pick<GayaButtonProps, 'size' | 'showIcon' | 'iconPosition' | 'variant' | 'fullWidth' | 'display' | 'disabled'| 'brand' | 'textTransform' | 'color' | 'mode'>

const getPaddingStyles = (theme: Theme) => ({ size }: GayaButtonStyleProps) => {
  const padding = {
    semi: theme.spacing.micro,
    medium: theme.spacing.small,
    semiX: theme.spacing.tiny
  }

  return size && padding[size]
}

/* const onColorGet = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return 'onPrimary'
    case 'onPrimary':
      return 'primary'
    case 'secondary':
      return 'onSecondary'
    case 'onSecondary':
      return 'secondary'
    case 'surfaceInverse':
      return 'onSurfaceInverse'
    case 'onSurfaceInverse':
      return 'surfaceInverse'
    default:
      return 'primary'
  }
}
const onColorGetOutlined = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return 'highEmphasis'
    case 'onPrimary':
      return 'onPrimary'
    case 'secondary':
      return 'highEmphasis'
    case 'onSecondary':
      return 'onSecondary'
    case 'surfaceInverse':
      return 'surfaceInverse'
    case 'onSurfaceInverse':
      return 'onSurfaceInverse'
    default:
      return 'primary'
  }
}

const getColorVariant = (theme: Theme, { variant, color }:ButtonStyleProps) => {
  switch (variant) {
    case 'contained': {
      return {
        back: color ? theme.color[color] : theme.color.primary,
        border: theme.button[variant].color.enable.border,
        color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary,
        hover: {
          primary: {
            // back: `${theme.color.primaryDark}`,
            // boder: theme.button[variant].color.hover.border,
            // label: `${theme.color.onPrimaryDark}`
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          onPrimary: {
            // back: theme.color.neutralLight,
            // boder: theme.button[variant].color.hover.border,
            // label: theme.color.primary
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          secondary: {
            // back: theme.color.secondaryDark,
            // boder: theme.button[variant].color.hover.border,
            // label: theme.color.onSecondaryDark
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          onSecondary: {
            // back: theme.color.neutralLight,
            // boder: theme.button[variant].color.hover.border,
            // label: theme.color.secondary
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          surfaceInverse: {
            // back: theme.color.neutralDark,
            // boder: theme.button[variant].color.hover.border,
            // label: theme.color.onSurfaceInverse
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          },
          onSurfaceInverse: {
            // back: theme.color.neutralLight,
            // boder: theme.button[variant].color.hover.border,
            // label: theme.color.surfaceInverse
            back: color ? theme.color[color] : theme.color.primary,
            border: theme.button[variant].color.enable.border,
            color: color ? theme.color[onColorGet(color)] : theme.color.onPrimary
          }
        },
        focus: {
          primary: {
            back: `${theme.color.primaryDarkest}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.onPrimaryDarkest}`
          },
          onPrimary: {
            back: theme.color.neutralMedium,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.primary
          },
          secondary: {
            back: theme.color.secondaryDarkest,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.onSecondaryDarkest
          },
          onSecondary: {
            back: theme.color.neutralMedium,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.secondary
          },
          surfaceInverse: {
            back: theme.color.neutralMedium,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.onSurfaceInverse
          },
          onSurfaceInverse: {
            back: theme.color.neutralMedium,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.surfaceInverse
          }
        }
      }
    }
    case 'outlined': {
      return {
        back: theme.button[variant].color.enable.background,
        border: color ? theme.color[color] : theme.color.primary,
        color: color ? theme.color[onColorGetOutlined(color)] : theme.color.highlight,
        hover: {
          primary: {
            back: theme.color.neutralMedium,
            boder: theme.color.primary,
            label: `${theme.color.highEmphasis}`
          },
          onPrimary: {
            back: theme.color.neutralMedium,
            boder: theme.color.onPrimary,
            label: `${theme.color.highEmphasis}`
          },
          secondary: {
            back: theme.color.neutralMedium,
            boder: theme.color.secondary,
            label: `${theme.color.highEmphasis}`
          },
          onSecondary: {
            back: theme.color.neutralMedium,
            boder: theme.color.onSecondary,
            label: `${theme.color.highEmphasis}`
          },
          surfaceInverse: {
            back: theme.color.neutralMedium,
            boder: theme.color.surfaceInverse,
            label: `${theme.color.highEmphasis}`
          },
          onSurfaceInverse: {
            back: theme.color.neutralMedium,
            boder: theme.color.onSurfaceInverse,
            label: `${theme.color.highEmphasis}`
          }
        },
        focus: {
          primary: {
            back: theme.color.neutralDark,
            boder: theme.color.primary,
            label: `${theme.color.lowLight}`
          },
          onPrimary: {
            back: theme.color.neutralDark,
            boder: theme.color.onPrimary,
            label: `${theme.color.lowLight}`
          },
          secondary: {
            back: theme.color.neutralDark,
            boder: theme.color.secondary,
            label: `${theme.color.lowLight}`
          },
          onSecondary: {
            back: theme.color.neutralDark,
            boder: theme.color.onSecondary,
            label: `${theme.color.lowLight}`
          },
          surfaceInverse: {
            back: theme.color.neutralDark,
            boder: theme.color.surfaceInverse,
            label: `${theme.color.lowLight}`
          },
          onSurfaceInverse: {
            back: theme.color.neutralDark,
            boder: theme.color.onSurfaceInverse,
            label: `${theme.color.lowLight}`
          }
        }
      }
    }
    case 'text': {
      return {
        back: theme.button[variant].color.enable.background,
        border: theme.button[variant].color.enable.border,
        color: color ? theme.color[onColorGetOutlined(color)] : theme.color.highEmphasis,
        hover: {
          primary: {
            back: `${theme.color.neutralMedium}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onPrimary: {
            back: `${theme.color.neutralMedium}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          secondary: {
            back: `${theme.color.neutralMedium}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onSecondary: {
            back: `${theme.color.neutralMedium}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          surfaceInverse: {
            back: `${theme.color.neutralMedium}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onSurfaceInverse: {
            back: `${theme.color.neutralMedium}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          }
        },
        focus: {
          primary: {
            back: `${theme.color.neutralDark}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          onPrimary: {
            back: `${theme.color.neutralDark}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          secondary: {
            back: `${theme.color.neutralDark}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          onSecondary: {
            back: `${theme.color.neutralDark}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          surfaceInverse: {
            back: `${theme.color.neutralDark}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          },
          onSurfaceInverse: {
            back: `${theme.color.neutralDark}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.lowLight}`
          }
        }
      }
    }
    default:
      return {
        back: color && theme.color.primary,
        border: theme.button.contained.color.enable.border,
        color: color && theme.color[onColorGet('primary')]
      }
  }
} */

const getColorBrand = (theme: Theme) => (brand: BrandTypes | undefined, { variant, color, mode }: GayaButtonStyleProps) => {
  const colorTheme = buildTheme(brand, mode)

  let propBrandsColor = {}
  if (variant && color) {
    propBrandsColor = {
      back: colorTheme.button[variant].color[color].background,
      border: colorTheme.button[variant].color[color].border,
      color: colorTheme.button[variant].color[color].label,
      hover: {
        back: colorTheme.button[variant].color.hover[color].background,
        boder: colorTheme.button[variant].color.hover[color].border,
        label: colorTheme.button[variant].color.hover[color].label
      },
      focus: {
        back: colorTheme.button[variant].color.focus[color].background,
        boder: colorTheme.button[variant].color.focus[color].border,
        label: colorTheme.button[variant].color.focus[color].label
      }
    }
  }
  if (brand) {
    return { ...propBrandsColor }
  }
  return variant && color && {
    back: theme.button[variant].color[color].background,
    border: theme.button[variant].color[color].border,
    color: theme.button[variant].color[color].label,
    hover: {
      back: theme.button[variant].color.hover[color].background,
      boder: theme.button[variant].color.hover[color].border,
      label: theme.button[variant].color.hover[color].label
    },
    focus: {
      back: theme.button[variant].color.focus[color].background,
      boder: theme.button[variant].color.focus[color].border,
      label: theme.button[variant].color.focus[color].label
    }
  }
}

const getLabelMargin = (theme: Theme, side: string) => ({ showIcon, iconPosition }: GayaButtonStyleProps) => (showIcon && iconPosition === side && theme.size.tiny)
const getIconPosition = () => ({ showIcon, iconPosition }: GayaButtonStyleProps) => (showIcon && iconPosition === 'right' ? 'row' : 'row-reverse')

const getletterSpacing = (theme: Theme) => ({ textTransform }: GayaButtonStyleProps) => {
  if (textTransform === 'capitalize' || textTransform === 'lowercase') {
    return 1
  }
  return theme.button.label.letterSpacing
}

const getPropsThemeButton = (theme: Theme) => ({ brand }: Pick<GayaButtonStyleProps, 'brand' >) => {
  if (brand) {
    const themeSelectdRipple = buildTheme(brand, 'light')
    return {
      buttonborderRadius: themeSelectdRipple.button.borderRadius
    }
  }
  return {
    buttonborderRadius: theme.button.borderRadius
  }
}
const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: ({
      variant, brand, color, mode
    }: GayaButtonStyleProps) => variant && (getColorBrand(theme)(brand, { variant, color, mode })?.back),
    border: ({
      variant, brand, color, mode
    }: GayaButtonStyleProps) => variant && `1px solid ${(getColorBrand(theme)(brand, { variant, color, mode })?.border)}`,
    borderRadius: ({ brand }: GayaButtonStyleProps) => getPropsThemeButton(theme)({ brand }).buttonborderRadius,
    boxShadow: 'none',
    color: ({
      variant, brand, color, mode
    }: GayaButtonStyleProps) => variant && (getColorBrand(theme)(brand, { variant, color, mode })?.color),
    cursor: 'pointer',
    height: ({ size }: GayaButtonStyleProps) => size && theme.size[size],
    outline: 0,
    overflow: 'hidden',
    paddingLeft: getPaddingStyles(theme),
    paddingRight: getPaddingStyles(theme),
    position: 'relative',
    width: ({ fullWidth, display }: GayaButtonStyleProps) => (fullWidth || (display === 'block') ? '100%' : 'auto'),
    '&:disabled': {
      backgroundColor: ({ variant }: GayaButtonStyleProps) => variant && theme.color.surfaceDisabled,
      border: 'none',
      boxShadow: theme.elevation.none,
      color: ({ variant }: GayaButtonStyleProps) => variant && theme.color.onSurfaceDisabled,
      cursor: 'default'
    },
    '&:hover:not([disabled])': {
      backgroundColor: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && (getColorBrand(theme)(brand, { variant, color, mode })?.hover?.back),
      border: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && `1px solid ${(getColorBrand(theme)(brand, { variant, color, mode })?.hover?.boder)}`,
      color: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && (getColorBrand(theme)(brand, { variant, color, mode })?.hover?.label)
      // opacity: ({ variant }) => (variant === 'contained' ? theme.opacity.veryHigh : 'unset')
      // opacity: theme.opacity.veryHigh
    },
    '&:focus-visible:not([disabled])': {
      backgroundColor: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && (getColorBrand(theme)(brand, { variant, color, mode })?.focus?.back),
      border: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && `1px solid ${(getColorBrand(theme)(brand, { variant, color, mode })?.focus?.boder)}`,
      color: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && (getColorBrand(theme)(brand, { variant, color, mode })?.focus?.label),
      opacity: ({ variant }) => (variant === 'contained' && theme.opacity.high)
      // opacity: theme.opacity.high
    },
    '&:active:not([disabled])': {
      backgroundColor: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && getColorBrand(theme)(brand, { variant, color, mode })?.focus?.back,
      border: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && `1px solid ${(getColorBrand(theme)(brand, { variant, color, mode })?.focus?.boder)}`,
      color: ({
        variant, brand, color, mode
      }: GayaButtonStyleProps) => variant && (getColorBrand(theme)(brand, { variant, color, mode })?.focus?.label),
      opacity: ({ variant }) => (variant === 'contained' && theme.opacity.high)
      // opacity: theme.opacity.high
    }
  },
  labelContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: getIconPosition(),
    justifyContent: 'center'
  },
  label: {
    fontFamily: [theme.button.label.primary.fontFamily, theme.button.label.fallback.fontFamily],
    fontSize: theme.button.label.fontSize,
    fontWeight: theme.button.label.primary.fontWeight,
    letterSpacing: ({ textTransform }: GayaButtonStyleProps) => getletterSpacing(theme)({ textTransform }),
    marginLeft: getLabelMargin(theme, 'left'),
    marginRight: getLabelMargin(theme, 'right'),
    textAlign: 'center',
    textOverflow: 'ellipsis',
    textTransform: ({ textTransform }) => textTransform,
    userSelect: 'none',
    whiteSpace: 'nowrap'
  }
}))

export default styles
