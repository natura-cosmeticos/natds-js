/* eslint-disable max-len */
import { Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import { RatingProps } from './Rating.props'

type RatingStyleProps = Pick<RatingProps, 'variant'> & { align?: 'left' | 'right' }

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: ({ variant }: RatingStyleProps) => (variant === 'input' ? 'column' : 'row'),
    alignItems: ({ variant }: RatingStyleProps) => variant === 'counter' && 'center',
    '& > label': {
      marginTop: ({ variant }: RatingStyleProps) => variant === 'input' && theme.spacing.micro,
      order: ({ variant, align = 'left' }) => (align === 'left' && variant !== 'input' ? 2 : 1)
    }
  },
  rating: {
    order: ({ variant }: RatingStyleProps) => (variant !== 'input' && 2),
    display: 'flex'
  },
  labelText: {
    color: theme.color.mediumEmphasis,
    fontFamily: ({ variant }: RatingStyleProps) => variant !== 'read-only' && [theme.rating[variant].label.primary.fontFamily, theme.rating[variant].label.fallback.fontFamily],
    fontSize: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.fontSize,
    fontWeight: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.primary.fontWeight,
    letterSpacing: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.letterSpacing,
    lineHeight: ({ variant }: RatingStyleProps) => variant !== 'read-only' && theme.rating[variant].label.lineHeight
  }
}))

export default styles
