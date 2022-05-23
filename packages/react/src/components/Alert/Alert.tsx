import React from 'react'
import styles from './Alert.styles'
import { AlertProps } from './Alert.props'

const Alert = React.forwardRef<HTMLElement, AlertProps>(
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
        {props.children}
      </span>
    )
  }
)

export default Alert
