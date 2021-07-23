import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  content: {
    color: theme.color.highEmphasis,
    flex: '1 1 auto',
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: theme.body1.fontSize,
    overflowY: 'auto',
    padding: theme.spacing.small,
    position: 'relative'
  }
}))

export default styles
