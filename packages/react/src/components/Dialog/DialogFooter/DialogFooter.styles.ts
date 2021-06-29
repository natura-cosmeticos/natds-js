import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  action: {
    padding: theme.spacing.small,
    display: 'flex',
    gap: theme.spacing.small,
    justifyContent: 'flex-end'
  }
}))

export default styles
