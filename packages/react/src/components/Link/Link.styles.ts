import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LinkProps } from './Link.props'

type LinkStyleProps = Pick<LinkProps, 'iconPosition' | 'variant' | 'textSize'>

const getIconPosition = () => ({ iconPosition }: LinkStyleProps) => (iconPosition === 'right' ? 'row' : 'row-reverse')

const styles = createUseStyles((theme: Theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: getIconPosition(),
    justifyContent: 'center',
    width: 'fit-content',
    cursor: 'pointer'
  },
  link: {
    color: theme.color.link,
    fontFamily: ({ textSize = 'body1' }: LinkStyleProps) => theme[textSize].fontFamily,
    fontSize: ({ textSize = 'body1' }: LinkStyleProps) => theme[textSize].fontSize,
    letterSpacing: ({ textSize = 'body1' }: LinkStyleProps) => theme[textSize].letterSpacing,
    lineHeight: ({ textSize = 'body1' }: LinkStyleProps) => theme[textSize].lineHeight,
    textDecoration: ({ variant }: LinkStyleProps) => (variant === 'underline' ? 'underline' : 'none'),
    margin: ({ iconPosition }: LinkStyleProps) => (iconPosition === 'right' ? `0 ${theme.spacing.tiny}px 0 0` : `0 0 0 ${theme.spacing.tiny}px`),

    '&:hover': {
      textDecoration: ({ variant }: LinkStyleProps) => (variant === 'underline' ? 'none' : 'underline')
    }
  }
}))

export default styles
