import React from 'react'
import styles from './Dialog.styles'
import { DialogProps } from './Dialog.props'
import { useWindowSize } from '../../hooks/useWindowSize'

const Dialog = ({
  ariaDescribedBy,
  ariaLabelledBy,
  children,
  role,
  size = 'medium',
  showDialog = false,
  testID
}: DialogProps): JSX.Element => {
  const { width } = useWindowSize()
  const { dialog, overlay } = styles({ showDialog, size, width })

  return (
    <>
      <section
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        aria-modal
        className={dialog}
        data-testid={testID}
        role={role}
      >
        {children}
      </section>
      <div className={overlay} />
    </>
  )
}

export default Dialog
