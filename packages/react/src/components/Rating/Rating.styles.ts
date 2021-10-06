/* eslint-disable max-len */
import { Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import { RatingProps } from './Rating.props'

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: ({ variant }: RatingProps) => (variant === 'input' ? 'column' : 'row'),
    alignItems: ({ variant }: RatingProps) => variant === 'counter' && 'center',
    '& > label': {
      marginTop: ({ variant }: RatingProps) => variant === 'input' && theme.spacing.micro,
      order: ({ variant, align = 'left' }) => (align === 'left' && variant !== 'input' ? 2 : 1)
    }
  },
  rating: {
    order: ({ variant }: RatingProps) => (variant !== 'input' && 2),
    display: 'flex'
  },
  labelText: {
    color: theme.color.mediumEmphasis,
    fontFamily: ({ variant }: RatingProps) => variant !== 'read-only' && [theme.rating[variant].label.primary.fontFamily, theme.rating[variant].label.fallback.fontFamily],
    fontSize: ({ variant }: RatingProps) => variant !== 'read-only' && theme.rating[variant].label.fontSize,
    fontWeight: ({ variant }: RatingProps) => variant !== 'read-only' && theme.rating[variant].label.primary.fontWeight,
    letterSpacing: ({ variant }: RatingProps) => variant !== 'read-only' && theme.rating[variant].label.letterSpacing,
    lineHeight: ({ variant }: RatingProps) => variant !== 'read-only' && theme.rating[variant].label.lineHeight
  }
}))

export default styles
