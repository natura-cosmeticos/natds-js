import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { DialogProps, DialogSizes } from './Dialog.props'

export const convertSize = (size: DialogSizes) => {
  const sizes = { small: 328, medium: 536, large: 816 }

  return sizes[size]
}

export const getSize = () => ({ size, screenSize }: { size: DialogSizes, screenSize: number }) => (convertSize(size) > screenSize ? '90vw' : convertSize(size))

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
    zIndex: 1300,
    width: getSize(),
    '@media screen and (max-width: 325px)': {
      width: '90vw'
    }
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