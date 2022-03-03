/* eslint-disable max-len */
import { Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import { BaseComponentProps, RatingProps } from './Rating.props'

type RatingStyleProps = Pick<RatingProps, 'variant'> & { align?: 'left' | 'right' }
type RatingBaseStyleProps = Pick<BaseComponentProps, 'disabled' | 'isClickable' | 'iconFilled' | 'iconActive'>

export const getRatingColor = ({ color }: Theme) => (
  { iconFilled, iconActive, disabled }: RatingBaseStyleProps
) => (iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis)

export const useBaseStyles = createUseStyles((theme: Theme) => ({
  ratingContainer: {
    display: 'flex'
  },
  ratingIcon: {
    backgroundColor: 'transparent',
    position: 'relative',
    '&:after': {
      backgroundColor: theme.color.highlight,
      borderRadius: '50%',
      content: '" "',
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    '&:hover:not([disabled]):after': { opacity: theme.opacity.lower },
    '&:focus:not([disabled]):after': { opacity: theme.opacity.low },
    '& > i': {
      cursor: ({ disabled, isClickable }: RatingBaseStyleProps) => isClickable && !disabled && 'pointer',
      color: (getRatingColor(theme))
    }
  }
}))

export const useContainerStyles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: ({ variant }: RatingStyleProps) => (variant === 'input' ? 'column' : 'row'),
    alignItems: ({ variant }: RatingStyleProps) => variant === 'counter' && 'center',
    '& > label': {
      marginTop: ({ variant }: RatingStyleProps) => variant === 'input' && theme.spacing.micro,
      order: ({ variant, align = 'left' }) => (align === 'left' && variant !== 'input' ? 2 : 1)
    }
  }
}))

export const useLabelStyles = createUseStyles((theme: Theme) => ({
  labelText: {
    color: theme.color.mediumEmphasis,
    fontFamily: ({ variant }: RatingStyleProps) => variant !== 'read-only' && [theme.rating[variant].label.primary.fontFamily, theme.rating[variant].label.fallback.fontFamily],
    fontSize: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.fontSize,
    fontWeight: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.primary.fontWeight,
    letterSpacing: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.letterSpacing,
    lineHeight: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.lineHeight
  }
}))

export const useRatingStyles = createUseStyles(() => ({
  rating: {
    order: ({ variant }: RatingStyleProps) => (variant !== 'input' && 2),
    display: 'flex'
  }
}))
