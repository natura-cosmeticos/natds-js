/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ShortcutProps } from './Shortcut.props'

type ShortcutStyleProps = Pick<ShortcutProps, 'variant' | 'disabled' | 'color'>

const setBoxShadow = (theme: Theme) => ({ variant, disabled }: ShortcutStyleProps) => variant === 'contained' && !disabled && theme.elevation.tiny

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    // backgroundColor: ({ color, variant }: ShortcutStyleProps) => variant && color && theme.shortcut[variant].color.enable[color].background
    // border: ({ color, variant }: ShortcutStyleProps) => variant && color && `1px solid ${theme.shortcut[variant].color.enable[color].border}`,
    boxShadow: setBoxShadow(theme),
    // color: ({ variant }: ShortcutStyleProps) => variant && theme.shortcut[variant].color.enable[color].label,
    borderRadius: theme.shortcut.borderRadius,
    '&:disabled': {
      // backgroundColor: ({ color, variant }: ShortcutStyleProps) => variant && color && theme.shortcut[variant].color.disable[color].background,
      // border: ({ variant }: ShortcutStyleProps) => variant && color && `1px solid ${theme.shortcut[variant].color.disable[color].border}`,
      boxShadow: theme.elevation.none,
      // color: ({ variant }: ShortcutStyleProps) => variant && theme.shortcut[variant].color.disable[color].label,
      cursor: 'default'
    },
    '&:hover:not([disabled])': {
      // backgroundColor: ({ color, variant }: ShortcutStyleProps) => variant && color && theme.shortcut[variant].hover.disable[color].background,
      // border: ({ color, variant }: ShortcutStyleProps) => variant && color && `1px solid ${theme.shortcut[variant].hover.disable[color].border}`,
      // color: ({ color, variant }: ShortcutStyleProps) => variant && color && theme.shortcut[variant].hover.disable[color].label
    }
  },
  labelText: {
    fontFamily: [theme.shortcut.label.primary.fontFamily, theme.shortcut.label.fallback.fontFamily],
    fontSize: theme.shortcut.label.fontSize,
    fontWeight: theme.shortcut.label.primary.fontWeight,
    letterSpacing: theme.shortcut.label.letterSpacing,
    marginTop: theme.spacing.tiny,
    verticalAlign: 'center',
    color: theme.color.highEmphasis
  }
}))

export default styles
