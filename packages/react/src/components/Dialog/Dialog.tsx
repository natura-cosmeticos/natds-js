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

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    document.addEventListener('keydown', (event) => {
      if (onEscapeKeyDown && event.key && event.key === 'Escape') {
        onEscapeKeyDown(e)
      }
    })
  }

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
            onKeyDown={handleOnKeyDown}
            role={role}
            tabIndex={0}
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
