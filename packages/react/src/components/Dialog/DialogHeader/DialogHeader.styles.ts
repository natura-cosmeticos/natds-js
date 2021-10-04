import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'space-between',
    padding: theme.size.small
  },
  title: {
    color: theme.color.highEmphasis,
    fontFamily: [theme.dialog.title.primary.fontFamily, theme.dialog.title.fallback.fontFamily],
    fontSize: theme.dialog.title.fontSize,
    fontWeight: theme.dialog.title.primary.fontWeight,
    letterSpacing: theme.dialog.title.letterSpacing,
    lineHeight: theme.dialog.title.lineHeight,
    margin: 0
  }
}))

export default styles
