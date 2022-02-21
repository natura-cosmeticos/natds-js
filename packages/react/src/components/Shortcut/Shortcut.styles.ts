/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ShortcutProps } from './Shortcut.props'

type ShortcutStyleProps = Pick<ShortcutProps, 'variant' | 'disabled' | 'color' | 'breakLine'>

const setBoxShadow = (theme: Theme) => ({ variant, disabled }: ShortcutStyleProps) => variant === 'contained' && !disabled && theme.elevation.tiny
const setLabelColor = (theme: Theme) => (
  { variant = 'contained', disabled = false, color = 'primary' }: ShortcutStyleProps
) => (
  color && variant && !disabled ? theme.shortcut[variant].color.enable[color].label : theme.shortcut[variant].color.disable[color].label
)

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
    backgroundColor: ({ color, variant }: ShortcutStyleProps) => color && variant && theme.shortcut[variant].color.enable[color].background,
    border: ({ color, variant }: ShortcutStyleProps) => color && variant && `1px solid ${theme.shortcut[variant].color.enable[color].border}`,
    boxShadow: setBoxShadow(theme),
    borderRadius: theme.shortcut.borderRadius,
    '&:disabled': {
      backgroundColor: ({ color, variant }: ShortcutStyleProps) => color && variant && theme.shortcut[variant].color.disable[color].background,
      border: ({ color, variant }: ShortcutStyleProps) => color && variant && `1px solid ${theme.shortcut[variant].color.disable[color].border}`,
      boxShadow: theme.elevation.none,
      cursor: 'default'
    },
    '&:hover:not([disabled])': {
      backgroundColor: ({ color, variant }: ShortcutStyleProps) => color && variant && theme.shortcut[variant].color.hover[color].background,
      border: ({ color, variant }: ShortcutStyleProps) => color && variant && `1px solid ${theme.shortcut[variant].color.hover[color].border}`
    },
    '&:focus:not([disabled])': {}
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
