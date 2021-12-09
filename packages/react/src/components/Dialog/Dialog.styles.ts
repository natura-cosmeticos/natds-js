import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { DialogProps, DialogSizes } from './Dialog.props'

type DialogStyleProps = Required<Pick<DialogProps, 'open' | 'size'>> & { width: number }

export const convertSize = (size: DialogSizes) => {
  const sizes = {
    small: 328,
    medium: 536,
    large: 816
  }

  return sizes[size]
}

export const getSize = () => ({ size, width }: DialogStyleProps) => (convertSize(size) > width ? '90vw' : convertSize(size))

const styles = createUseStyles((theme: Theme) => ({
  dialog: {
    backgroundColor: theme.color.surface,
    borderRadius: theme.dialog.borderRadius,
    boxShadow: theme.elevation.hugeX,
    display: ({ open }: DialogStyleProps) => (open ? 'flex' : 'none'),
    flexDirection: 'column',
    left: '50%',
    maxHeight: '70%',
    overflowY: 'auto',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: getSize(),
    zIndex: 1300
  },
  overlay: {
    background: theme.color.highlight,
    display: ({ open }: DialogStyleProps) => (!open && 'none'),
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
