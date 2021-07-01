import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { DialogProps } from './Dialog.props'

const styles = createUseStyles((theme: Theme) => ({
  dialog: {
    display: ({ showDialog }: DialogProps) => (showDialog ? 'block' : 'none'),
    backgroundColor: theme.color.surface,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.elevation.hugeX,
    position: 'fixed',
    zIndex: 3
  },
  overlay: {
    display: ({ showDialog }: DialogProps) => (showDialog ? 'flex' : 'none'),
    alignItems: 'center',
    background: theme.color.highlight,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    opacity: theme.opacity.mediumHigh,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2
  }
}))

export default styles
