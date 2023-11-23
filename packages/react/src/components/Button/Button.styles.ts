/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { buildTheme } from '../../ThemeProvider'
import { ButtonColor, ButtonProps } from './Button.props'
import { BrandTypes } from '../../brandTypes/brandTypes'

type ButtonStyleProps = Pick<ButtonProps, 'size' | 'showIcon' | 'iconPosition' | 'variant' | 'fullWidth' | 'disabled'| 'brand' | 'textTransform' | 'color'>

const getPaddingStyles = (theme: Theme) => ({ size }: ButtonStyleProps) => {
  const padding = {
    semi: theme.spacing.micro,
    medium: theme.spacing.small,
    semiX: theme.spacing.tiny
  }

  return size && padding[size]
}

const onColorGet = (color: ButtonColor) => {
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
            back: `${theme.color.primaryDark}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.onPrimaryDark}`
          },
          onPrimary: {
            back: theme.color.neutralLight,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.primary
          },
          secondary: {
            back: theme.color.secondaryDark,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.onSecondaryDark
          },
          onSecondary: {
            back: theme.color.neutralLight,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.secondary
          },
          surfaceInverse: {
            back: theme.color.neutralDark,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.onSurfaceInverse
          },
          onSurfaceInverse: {
            back: theme.color.neutralLight,
            boder: theme.button[variant].color.hover.border,
            label: theme.color.surfaceInverse
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
        color: color ? theme.color[onColorGetOutlined(color)] : theme.color.highEmphasis,
        hover: {
          primary: {
            back: theme.color.neutralLight,
            boder: theme.color.primary,
            label: `${theme.color.highEmphasis}`
          },
          onPrimary: {
            back: theme.color.neutralLight,
            boder: theme.color.onPrimary,
            label: `${theme.color.highEmphasis}`
          },
          secondary: {
            back: theme.color.neutralLight,
            boder: theme.color.secondary,
            label: `${theme.color.highEmphasis}`
          },
          onSecondary: {
            back: theme.color.neutralLight,
            boder: theme.color.onSecondary,
            label: `${theme.color.highEmphasis}`
          },
          surfaceInverse: {
            back: theme.color.neutralLight,
            boder: theme.color.surfaceInverse,
            label: `${theme.color.highEmphasis}`
          },
          onSurfaceInverse: {
            back: theme.color.neutralLight,
            boder: theme.color.onSurfaceInverse,
            label: `${theme.color.highEmphasis}`
          }
        },
        focus: {
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
            back: `${theme.color.neutralLight}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onPrimary: {
            back: `${theme.color.neutralLight}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          secondary: {
            back: `${theme.color.neutralLight}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onSecondary: {
            back: `${theme.color.neutralLight}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          surfaceInverse: {
            back: `${theme.color.neutralLight}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          },
          onSurfaceInverse: {
            back: `${theme.color.neutralLight}`,
            boder: theme.button[variant].color.hover.border,
            label: `${theme.color.highEmphasis}`
          }
        },
        focus: {
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
}

const getColorBrand = (theme: Theme) => (brand: BrandTypes, { variant, color }: ButtonStyleProps) => {
  const colorTheme = buildTheme(brand, 'light')
  let propBrandsColor = {}
  if (variant) {
    propBrandsColor = {
      back: getColorVariant(colorTheme, { variant, color }).back,
      border: getColorVariant(colorTheme, { variant, color }).border,
      color: getColorVariant(colorTheme, { variant, color }).color,
      hover: {
        back: getColorVariant(colorTheme, { variant, color }).hover?.[color ?? 'primary'].back,
        boder: getColorVariant(colorTheme, { variant, color }).hover?.[color ?? 'primary'].boder,
        label: getColorVariant(colorTheme, { variant, color }).hover?.[color ?? 'primary'].label
      },
      focus: {
        back: getColorVariant(colorTheme, { variant, color }).focus?.[color ?? 'primary'].back,
        boder: getColorVariant(colorTheme, { variant, color }).focus?.[color ?? 'primary'].boder,
        label: getColorVariant(colorTheme, { variant, color }).focus?.[color ?? 'primary'].label
      }
    }
  }
  if (brand) {
    return { ...propBrandsColor }
  }
  return variant && {
    back: getColorVariant(theme, { variant, color }).back,
    border: getColorVariant(theme, { variant, color }).border,
    color: getColorVariant(theme, { variant, color }).color,
    hover: {
      back: getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].back,
      boder: getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].boder,
      label: getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].label
    },
    focus: {
      back: getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].back,
      boder: getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].boder,
      label: getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].label
    }
  }
}

const getLabelMargin = (theme: Theme, side: string) => ({ showIcon, iconPosition }: ButtonStyleProps) => (showIcon && iconPosition === side && theme.size.tiny)
const getIconPosition = () => ({ showIcon, iconPosition }: ButtonStyleProps) => (showIcon && iconPosition === 'right' ? 'row' : 'row-reverse')

const getletterSpacing = (theme: Theme) => ({ textTransform }: ButtonStyleProps) => {
  if (textTransform === 'capitalize' || textTransform === 'lowercase') {
    return 1
  }
  return theme.button.label.letterSpacing
}
const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: ({ variant, brand, color }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color })?.back : getColorVariant(theme, { variant, color }).back),
    border: ({ variant, brand, color }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant, color })?.border : getColorVariant(theme, { variant, color }).border)}`,
    borderRadius: theme.button.borderRadius,
    boxShadow: ({ variant }: ButtonStyleProps) => variant && (variant === 'contained' ? theme.elevation.tiny : 'none'),
    color: ({ variant, brand, color }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color })?.color : getColorVariant(theme, { variant, color }).color),
    cursor: 'pointer',
    height: ({ size }: ButtonStyleProps) => size && theme.size[size],
    outline: 0,
    overflow: 'hidden',
    paddingLeft: getPaddingStyles(theme),
    paddingRight: getPaddingStyles(theme),
    position: 'relative',
    width: ({ fullWidth }: ButtonStyleProps) => (fullWidth ? '100%' : 'auto'),
    '&:disabled': {
      backgroundColor: ({ variant }: ButtonStyleProps) => variant && theme.button[variant].color.disable.background,
      border: ({ variant }: ButtonStyleProps) => variant && `1px solid ${theme.button[variant].color.disable.border}`,
      boxShadow: theme.elevation.none,
      color: ({ variant }: ButtonStyleProps) => variant && theme.button[variant].color.disable.label,
      cursor: 'default'
    },
    '&:hover:not([disabled])': {
      // backgroundColor: ({ variant, brand, color }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color })?.hover?.back : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].back),
      // border: ({ variant, brand, color }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant, color })?.hover?.boder : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].boder)}`,
      // color: ({ variant, brand, color }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color })?.hover?.label : getColorVariant(theme, { variant, color }).hover?.[color ?? 'primary'].label),
      // opacity: ({ variant }) => (variant === 'contained' ? theme.opacity.veryHigh : 'unset')
      opacity: theme.opacity.veryHigh
    },
    '&:focus:not([disabled])': {
      // backgroundColor: ({ variant, brand, color }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color })?.focus?.back : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].back),
      // border: ({ variant, brand, color }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant, color })?.focus?.boder : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].boder)}`,
      // color: ({ variant, brand, color }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant, color })?.focus?.label : getColorVariant(theme, { variant, color }).focus?.[color ?? 'primary'].label),
      // opacity: ({ variant }) => (variant === 'contained' ? theme.opacity.high : 'unset')
      opacity: theme.opacity.high
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
    letterSpacing: ({ textTransform }: ButtonStyleProps) => getletterSpacing(theme)({ textTransform }),
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
