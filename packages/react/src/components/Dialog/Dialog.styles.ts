import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { DialogProps } from './Dialog.props'

const styles = createUseStyles((theme: Theme) => ({
  dialog: {
    backgroundColor: theme.color.surface,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.elevation.hugeX,
    display: ({ showDialog }: DialogProps) => (showDialog ? 'block' : 'none'),
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
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
