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
  open = false,
  size = 'medium',
  testID
}: DialogProps): JSX.Element => {
  const { width } = useWindowSize()
  const { dialog, overlay } = styles({ open, size, width })

  return (
    <>
      {open && (
        <Portal container={container}>
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
      )}
    </>
  )
}

export default Dialog
