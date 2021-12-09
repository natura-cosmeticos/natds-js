/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { BadgeProps } from './Badge.props'

export type BadgeVariant = 'standard' | 'pulse' | 'dot'
const convertoPulseToDot = (variant: BadgeVariant) => (variant === 'pulse' ? 'dot' : variant)

type BadgeStyleProps = Required<Pick<BadgeProps, 'variant' | 'color'>>

const styles = createUseStyles((theme: Theme) => ({
  badge: {
    backgroundColor: ({ color }: BadgeStyleProps) => theme.badge.color[color].background,
    borderRadius: ({ variant }: BadgeStyleProps) => theme.badge[convertoPulseToDot(variant)].borderRadius,
    display: 'flex',
    height: ({ variant }: BadgeStyleProps) => theme.badge[convertoPulseToDot(variant)].height,
    paddingLeft: ({ variant }: BadgeStyleProps) => variant === 'standard' && theme.spacing.micro,
    paddingRight: ({ variant }: BadgeStyleProps) => variant === 'standard' && theme.spacing.micro,
    position: 'relative',
    width: ({ variant }: BadgeStyleProps) => variant !== 'standard' && theme.badge[convertoPulseToDot(variant)].height,
    '&:after': {
      transition: 'opacity 4ms linear, transition 4ms linear',
      animation: '$badge 1.6s infinite',
      backgroundColor: ({ color }: BadgeStyleProps) => theme.badge.color[color].background,
      borderRadius: ({ variant }: BadgeStyleProps) => theme.badge[convertoPulseToDot(variant)].borderRadius,
      content: ({ variant }: BadgeStyleProps) => variant === 'pulse' && '""',
      height: '100%',
      position: 'absolute',
      width: '100%'
    }
  },
  label: {
    color: ({ color }: BadgeStyleProps) => theme.badge.color[color].label,
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
