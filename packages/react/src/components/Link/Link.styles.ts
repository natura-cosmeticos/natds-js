import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { LinkProps } from './Link.props'

type LinkStyleProps = Required<Pick<LinkProps, 'variant'>>

const styles = createUseStyles((theme: Theme) => ({
  link: {
    color: theme.color.link,
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: theme.body1.fontSize,
    letterSpacing: theme.body1.letterSpacing,
    lineHeight: theme.body1.lineHeight,
    textDecoration: ({ variant }: LinkStyleProps) => (variant === 'underline' ? 'underline' : 'none')
  }
}))

export default styles
