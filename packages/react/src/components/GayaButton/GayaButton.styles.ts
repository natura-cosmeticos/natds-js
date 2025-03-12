/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { buildTheme } from '../../ThemeProvider'
import { GayaButtonProps } from './GayaButton.props'
import { BrandTypes } from '../../brandTypes/brandTypes'

type GayaButtonStyleProps = Pick<GayaButtonProps, 'size' | 'showIcon' | 'iconPosition' | 'variant' | 'fullWidth' | 'display' | 'disabled'| 'brand' | 'textTransform' | 'color' | 'mode'>

const getPaddingStyles = (theme: Theme) => ({ size, brand, mode }: GayaButtonStyleProps) => {
  const brandTheme = buildTheme(brand, mode)
  const padding = {
    semi: theme.button.paddingX,
    medium: theme.button.paddingX,
    semiX: theme.button.paddingX
  }
  const paddingbrand = {
    semi: brandTheme.button.paddingX,
    medium: brandTheme.button.paddingX,
    semiX: brandTheme.button.paddingX
  }
  if (brand) {
    return size && paddingbrand[size]
  }

  return size && padding[size]
}

const getColorBrand = (theme: Theme) => (brand: BrandTypes | undefined, { variant, color, mode }: GayaButtonStyleProps) => {
  const colorThemes = buildTheme(brand, mode)

  let propBrandsColor = {}
  if (variant && color) {
    propBrandsColor = {
      back: colorThemes.button[variant].color[color].background,
      border: colorThemes.button[variant].color[color].border,
      color: colorThemes.button[variant].color[color].label,
      hover: {
        back: colorThemes.button[variant].color.hover[color].background,
        boder: colorThemes.button[variant].color.hover[color].border,
        label: colorThemes.button[variant].color.hover[color].label
      },
      focus: {
        back: colorThemes.button[variant].color.focus[color].background,
        boder: colorThemes.button[variant].color.focus[color].border,
        label: colorThemes.button[variant].color.focus[color].label
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
const getTextTransform = (theme: Theme) => ({ brand, mode }: GayaButtonStyleProps) => {
  const brandTheme = buildTheme(brand, mode)
  if (brand) {
    return brandTheme.button.textTransform
  }
  return theme.button.textTransform
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
  gayaButton: {
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
    textTransform: ({ textTransform, brand, mode }) => (textTransform || getTextTransform(theme)({ brand, mode })),
    userSelect: 'none',
    whiteSpace: 'nowrap'
  }
}))

export default styles
