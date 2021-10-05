import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  content: {
    color: theme.color.highEmphasis,
    flex: '1 1 auto',
    fontFamily: [theme.dialog.body.primary.fontFamily, theme.dialog.body.fallback.fontFamily],
    fontSize: theme.dialog.body.fontSize,
    letterSpacing: theme.dialog.body.letterSpacing,
    lineHeight: theme.dialog.body.lineHeight,
    overflowY: 'auto',
    padding: theme.spacing.small,
    position: 'relative'
  }
}))

export default styles
