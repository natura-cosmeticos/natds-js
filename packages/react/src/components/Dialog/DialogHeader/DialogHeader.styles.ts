import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  dialogHeaderContainer: {
    padding: theme.size.small,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dialogHeader: {
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    color: theme.color.highEmphasis,
    fontSize: 20,
    margin: 0
  },
  dialogHeaderChildrenContainer: {
    display: 'flex',
    gap: theme.spacing.small
  }
}))

export default styles
