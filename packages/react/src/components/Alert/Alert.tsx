import React from 'react'
import styles from './Alert.styles'
import { AlertProps } from './Alert.props'
import Icon from '../Icon'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const {
      className = '',
      variant = 'info',
      icon,
      ...rest
    } = props

    const { wrapper } = styles()

    return (
      <div
        className={`${className} ${wrapper}`}
        ref={ref}
        {...rest}
      >
        {icon && icon}

        {props.children}
      </div>
    )
  }
)

export default Alert
