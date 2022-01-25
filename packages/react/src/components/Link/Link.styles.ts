import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LinkProps } from './Link.props'

type LinkStyleProps = Pick<LinkProps, 'iconPosition' | 'variant' | 'textColor' | 'IconComponent'>

const getIconPosition = () => ({ iconPosition }: LinkStyleProps) => (iconPosition === 'right' ? 'row' : 'row-reverse')
const getLabelMargin = (theme: Theme, side: string) => (
  { iconPosition }: LinkStyleProps
) => (iconPosition === side && theme.size.tiny)

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
    color: ({ textColor }: LinkStyleProps) => (textColor && textColor === 'default' ? theme.color.link : theme.color.lowEmphasis),
    fontFamily: [theme.link.label.primary.fontFamily, theme.link.label.fallback.fontFamily],
    fontSize: theme.link.label.fontSize,
    letterSpacing: theme.link.label.letterSpacing,
    lineHeight: theme.link.label.lineHeight,
    textDecoration: ({ variant }: LinkStyleProps) => (variant === 'underline' ? 'underline' : 'none'),
    marginLeft: getLabelMargin(theme, 'left'),
    marginRight: getLabelMargin(theme, 'right'),

    '&:hover': {
      textDecoration: ({ variant }: LinkStyleProps) => (variant === 'underline' ? 'none' : 'underline')
    }
  }
}))

export default styles
