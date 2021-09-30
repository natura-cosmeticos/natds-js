/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { BadgeProps } from './Badge.props'

export type BadgeVariant = 'standard' | 'pulse' | 'dot'
const convertoPulseToDot = (variant: BadgeVariant) => (variant === 'pulse' ? 'dot' : variant)

const styles = createUseStyles((theme: Theme) => ({
  badge: {
    backgroundColor: ({ color }: BadgeProps) => color && theme.badge.color[color].background,
    borderRadius: ({ variant }: BadgeProps) => theme.badge[convertoPulseToDot(variant)].borderRadius,
    display: 'flex',
    height: ({ variant }: BadgeProps) => theme.badge[convertoPulseToDot(variant)].height,
    paddingLeft: ({ variant }: BadgeProps) => variant === 'standard' && theme.spacing.micro,
    paddingRight: ({ variant }: BadgeProps) => variant === 'standard' && theme.spacing.micro,
    position: 'relative',
    width: ({ variant }: BadgeProps) => variant !== 'standard' && theme.badge[convertoPulseToDot(variant)].height,
    '&:after': {
      transition: 'opacity 4ms linear, transition 4ms linear',
      animation: '$badge 1.6s infinite',
      backgroundColor: ({ color }: BadgeProps) => color && theme.badge.color[color].background,
      borderRadius: ({ variant }: BadgeProps) => theme.badge[convertoPulseToDot(variant)].borderRadius,
      content: ({ variant }: BadgeProps) => variant === 'pulse' && '""',
      height: '100%',
      position: 'absolute',
      width: '100%'
    }
  },
  label: {
    color: ({ color }: BadgeProps) => color && theme.badge.color[color].label,
    fontFamily: [theme.badge.label.primary.fontFamily, theme.badge.label.fallback.fontFamily],
    fontSize: theme.badge.label.fontSize,
    fontWeight: theme.badge.label.primary.fontWeight,
    letterSpacing: theme.badge.label.letterSpacing,
    lineHeight: theme.badge.label.lineHeight
  },
  '@keyframes badge': {
    '0%': {
      opacity: theme.opacity.medium,
      transform: 'scale(1)'
    },
    '100%': {
      opacity: theme.opacity.transparent,
      transform: 'scale(2.25)'
    }
  }
}))

export default styles
