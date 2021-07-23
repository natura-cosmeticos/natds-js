import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.size.small
  },
  title: {
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    color: theme.color.highEmphasis,
    fontSize: 20,
    margin: 0
  }
}))

export default styles
