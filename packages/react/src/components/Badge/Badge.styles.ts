/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { BadgeProps } from './Badge.props'

export type BadgeVariant ='standard' | 'pulse' | 'dot'
const convertoPulseToDot = (variant: BadgeVariant) => (variant === 'pulse' ? 'dot' : variant)

const styles = createUseStyles((theme: Theme) => ({
  badge: {
    backgroundColor: ({ color }: BadgeProps) => color && theme.badge.color[color].background,
    borderRadius: ({ variant }: BadgeProps) => theme.badge[convertoPulseToDot(variant)].borderRadius,
    display: 'flex',
    height: ({ variant }: BadgeProps) => theme.badge[convertoPulseToDot(variant)].height,
    paddingLeft: ({ variant }: BadgeProps) => variant === 'standard' && theme.spacing.micro,
    paddingRight: ({ variant }: BadgeProps) => variant === 'standard' && theme.spacing.micro,
    width: ({ variant }: BadgeProps) => variant !== 'standard' && theme.badge[convertoPulseToDot(variant)].height
  },
  label: {
    color: ({ color }: BadgeProps) => color && theme.badge.color[color].label,
    fontFamily: [theme.badge.label.primary.fontFamily, theme.badge.label.fallback.fontFamily],
    fontSize: theme.badge.label.fontSize,
    fontWeight: theme.badge.label.primary.fontWeight,
    letterSpacing: theme.badge.label.letterSpacing,
    lineHeight: theme.badge.label.lineHeight
  }
}))

export default styles
