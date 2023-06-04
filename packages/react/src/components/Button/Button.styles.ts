/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { buildTheme } from '../../ThemeProvider'
import { ButtonProps } from './Button.props'
import { BrandTypes } from '../../brandTypes/brandTypes'

type ButtonStyleProps = Pick<ButtonProps, 'size' | 'showIcon' | 'iconPosition' | 'variant' | 'fullWidth' | 'disabled'| 'brand' | 'labelTransform'>

const getPaddingStyles = (theme: Theme) => ({ size }: ButtonStyleProps) => {
  const padding = {
    semi: theme.spacing.micro,
    medium: theme.spacing.small,
    semiX: theme.spacing.tiny
  }

  return size && padding[size]
}

const getColorBrand = (theme: Theme) => (brand: BrandTypes, { variant }: ButtonStyleProps) => {
  const colorTheme = buildTheme(brand, 'light')
  let propBrandsColor = {}
  if (variant) {
    propBrandsColor = {
      back: colorTheme.button[variant].color.enable.background,
      border: colorTheme.button[variant].color.enable.border,
      color: colorTheme.button[variant].color.enable.label,
      hover: {
        back: colorTheme.button[variant].color.hover.background,
        boder: colorTheme.button[variant].color.hover.border,
        label: colorTheme.button[variant].color.hover.label
      },
      focus: {
        back: colorTheme.button[variant].color.focus.background,
        boder: colorTheme.button[variant].color.focus.border,
        label: colorTheme.button[variant].color.focus.label
      }
    }
  }
  if (brand) {
    return { ...propBrandsColor }
  }
  return variant && {
    back: theme.button[variant].color.enable.background,
    border: theme.button[variant].color.enable.border,
    color: theme.button[variant].color.enable.label,
    hover: {
      back: theme.button[variant].color.hover.background,
      boder: theme.button[variant].color.hover.border,
      label: theme.button[variant].color.hover.label
    },
    focus: {
      back: theme.button[variant].color.focus.background,
      boder: theme.button[variant].color.focus.border,
      label: theme.button[variant].color.focus.label
    }
  }
}

const getLabelMargin = (theme: Theme, side: string) => ({ showIcon, iconPosition }: ButtonStyleProps) => (showIcon && iconPosition === side && theme.size.tiny)
const getIconPosition = () => ({ showIcon, iconPosition }: ButtonStyleProps) => (showIcon && iconPosition === 'right' ? 'row' : 'row-reverse')

const styles = createUseStyles((theme: Theme) => ({
  button: {
    backgroundColor: ({ variant, brand }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant })?.back : theme.button[variant].color.enable.background),
    border: ({ variant, brand }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant })?.border : theme.button[variant].color.enable.border)}`,
    borderRadius: theme.button.borderRadius,
    boxShadow: ({ variant }: ButtonStyleProps) => variant && (variant === 'contained' ? theme.elevation.tiny : 'none'),
    color: ({ variant, brand }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant })?.color : theme.button[variant].color.enable.label),
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
      backgroundColor: ({ variant, brand }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant })?.hover?.back : theme.button[variant].color.hover.background),
      border: ({ variant, brand }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant })?.hover?.boder : theme.button[variant].color.hover.border)}`,
      color: ({ variant, brand }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant })?.color : theme.button[variant].color.hover.label)
    },
    '&:focus:not([disabled])': {
      backgroundColor: ({ variant, brand }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant })?.focus?.back : theme.button[variant].color.focus.background),
      border: ({ variant, brand }: ButtonStyleProps) => variant && `1px solid ${(brand ? getColorBrand(theme)(brand, { variant })?.focus?.boder : theme.button[variant].color.focus.border)}`,
      color: ({ variant, brand }: ButtonStyleProps) => variant && (brand ? getColorBrand(theme)(brand, { variant })?.focus?.label : theme.button[variant].color.focus.label)
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
    letterSpacing: theme.button.label.letterSpacing,
    marginLeft: getLabelMargin(theme, 'left'),
    marginRight: getLabelMargin(theme, 'right'),
    textAlign: 'center',
    textOverflow: 'ellipsis',
    textTransform: ({ labelTransform }) => labelTransform,
    userSelect: 'none',
    whiteSpace: 'nowrap'
  }
}))

export default styles
