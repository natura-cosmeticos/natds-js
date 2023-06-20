/* eslint-disable complexity */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ShortcutProps } from './Shortcut.props'
import { buildTheme } from '../../ThemeProvider'

type ShortcutStyleProps = Pick<ShortcutProps, 'variant' | 'disabled' | 'color' | 'breakLine' | 'brand'>

const setBoxShadow = (theme: Theme) => ({ variant, disabled }: ShortcutStyleProps) => variant === 'contained' && !disabled && theme.elevation.tiny
const setLabelColor = (theme: Theme) => (
  { variant = 'contained', disabled = false, color = 'primary' }: ShortcutStyleProps
) => (
  color && variant && !disabled ? theme.shortcut[variant].color.enable[color].label : theme.shortcut[variant].color.disable[color].label
)

const themeSelectBrand = (theme: Theme) => ({ brand, variant, color }: ShortcutStyleProps) => {
  const themeSlectShort = buildTheme(brand, 'light')

  if (brand) {
    return {
      border: variant && color && `1px solid ${themeSlectShort.shortcut[variant].color.enable[color].border}`,
      back: color && variant && themeSlectShort.shortcut[variant].color.enable[color].background,
      hover: {
        back: color && variant && themeSlectShort.shortcut[variant].color.hover[color].background,
        border: color && variant && `1px solid ${themeSlectShort.shortcut[variant].color.hover[color].border}`
      }
    }
  }
  return {
    border: variant && color && `1px solid ${theme.shortcut[variant].color.enable[color].border}`,
    back: color && variant && theme.shortcut[variant].color.enable[color].background,
    hover: {
      back: color && variant && theme.shortcut[variant].color.hover[color].background,
      border: color && variant && `1px solid ${theme.shortcut[variant].color.hover[color].border}`
    }
  }
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.size.mediumX
  },
  container: {
    position: 'relative'
  },
  content: {
    backgroundColor: ({ color, variant, brand }: ShortcutStyleProps) => themeSelectBrand(theme)({ color, variant, brand }).back,
    border: ({ color, variant, brand }: ShortcutStyleProps) => color && variant && themeSelectBrand(theme)({ color, variant, brand }).border,
    boxShadow: setBoxShadow(theme),
    borderRadius: theme.shortcut.borderRadius,
    '&:after': {
      backgroundColor: theme.color.highlight,
      content: '" "',
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    '&:disabled': {
      backgroundColor: ({ color, variant }: ShortcutStyleProps) => color && variant && theme.shortcut[variant].color.disable[color].background,
      border: ({ color, variant }: ShortcutStyleProps) => color && variant && `1px solid ${theme.shortcut[variant].color.disable[color].border}`,
      boxShadow: theme.elevation.none,
      cursor: 'default'
    },
    '&:hover:not([disabled])': {
      backgroundColor: ({ color, variant, brand }: ShortcutStyleProps) => themeSelectBrand(theme)({ color, variant, brand }).hover.back,
      border: ({ color, variant, brand }: ShortcutStyleProps) => themeSelectBrand(theme)({ color, variant, brand }).hover.border
    },
    '&:focus:not([disabled])': {
      backgroundColor: ({ color, variant }: ShortcutStyleProps) => color && variant && theme.shortcut[variant].color.focus[color].background,
      border: ({ color, variant }: ShortcutStyleProps) => color && variant && `1px solid ${theme.shortcut[variant].color.focus[color].border}`
    }
  },
  labelText: {
    fontFamily: [theme.shortcut.label.primary.fontFamily, theme.shortcut.label.fallback.fontFamily],
    fontSize: theme.shortcut.label.fontSize,
    fontWeight: theme.shortcut.label.primary.fontWeight,
    letterSpacing: theme.shortcut.label.letterSpacing,
    width: theme.size.mediumX,
    textAlign: 'center',
    marginTop: theme.spacing.tiny,
    whiteSpace: ({ breakLine }: ShortcutStyleProps) => (breakLine ? 'normal' : 'nowrap'),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: setLabelColor(theme),
    '&:hover': {
      color: ({ color, variant, disabled }: ShortcutStyleProps) => color && variant && !disabled && theme.shortcut[variant].color.hover[color].label
    }
  },
  badgeContainer: {
    position: 'absolute',
    right: 0,
    top: 0
  }
}))

export default styles
