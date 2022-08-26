import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    width: '100%',
    display: 'grid',
    gap: theme.spacing.small
  }
}))

export default styles
