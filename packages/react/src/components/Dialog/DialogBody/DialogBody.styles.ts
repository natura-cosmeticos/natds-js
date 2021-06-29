import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  dialogContentContainer: {
    fontSize: theme.size.small,
    color: theme.color.highEmphasis
  },
  dialogContent: {
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    overflowY: 'auto',
    padding: theme.spacing.small
  }
}))

export default styles
