import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { DialogProps } from './Dialog.props'

const styles = createUseStyles((theme: Theme) => ({
  dialog: {
    backgroundColor: theme.color.surface,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.elevation.hugeX,
    display: ({ showDialog }: DialogProps) => (showDialog ? 'flex' : 'none'),
    flexDirection: 'column',
    left: '50%',
    maxHeight: '70%',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1300
  },
  overlay: {
    display: ({ showDialog }: DialogProps) => (!showDialog && 'none'),
    background: theme.color.highlight,
    height: '100%',
    left: 0,
    opacity: theme.opacity.mediumHigh,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1299
  }
}))

export default styles
