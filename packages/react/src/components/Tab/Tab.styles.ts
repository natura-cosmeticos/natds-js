import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: theme.size.medium,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.color.surface,
    boxShadow: theme.elevation.micro
  }
}))

export default styles
