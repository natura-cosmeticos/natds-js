import React from 'react'
import styles from './Debug.styles'
import { DebugProps } from './Debug.props'

const Debug = React.forwardRef<HTMLElement, DebugProps>(
  (props, ref) => {
    const {
      className = '',
      ...rest
    } = props
    const { example } = styles()

    return (
      <span
        className={`${className} ${example}`}
        ref={ref}
        {...rest}
      >
        Debug
      </span>
    )
  }
)

export default Debug
