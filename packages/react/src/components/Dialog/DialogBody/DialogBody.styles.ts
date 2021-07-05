import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  dialogContent: {
    color: theme.color.highEmphasis,
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: theme.body1.fontSize,
    overflowY: 'auto',
    padding: theme.spacing.small
  }
}))

export default styles
