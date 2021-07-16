import React from 'react'
import styles from './Dialog.styles'
import { DialogProps } from './Dialog.props'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Portal } from '../Portal'

const Dialog = ({
  ariaDescribedBy,
  ariaLabelledBy,
  children,
  container,
  onEscapeKeyDown,
  role,
  showDialog = false,
  size = 'medium',
  testID
}: DialogProps): JSX.Element => {
  const { width } = useWindowSize()
  const { dialog, overlay } = styles({ showDialog, size, width })

  return (
    <Portal id={container}>
      <div
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        aria-modal
        className={dialog}
        data-testid={testID}
        onKeyDown={onEscapeKeyDown}
        role={role}
      >
        {children}
      </div>
      <div className={overlay} />
    </Portal>
  )
}

export default Dialog
