import React from 'react'
import { DividerProps } from './Divider.props'
import styles from './Divider.styles'

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({
    className = '',
    testID,
    variant = 'full-bleed',
    ...props
  }, ref) => {
    const { divider } = styles({ variant })

    return (
      <hr
        className={`${className} ${divider} Divider-gaya`}
        data-testid={testID}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Divider
