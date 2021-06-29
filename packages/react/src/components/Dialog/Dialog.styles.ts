import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    background: 'rgba(0, 0, 0, 0.56)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1300
  },
  dialog: {
    position: 'fixed',
    backgroundColor: theme.color.surface,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.elevation.hugeX,
    maxWidth: '30%'
  }
}))

export default styles
