import React from 'react'
import styles from './Alert.styles'
import { AlertProps } from './Alert.props'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const {
      className = '',
      color = 'info',
      icon,
      title,
      type = 'contained',
      ...rest
    } = props

    const { wrapper, content } = styles({ color, borderType: type })

    return (
      <div
        className={`${className} ${wrapper}`}
        ref={ref}
        {...rest}
      >
        {icon && icon}

        <div className={content}>
          {title && <h6>{title}</h6>}
          {props.children}
        </div>
      </div>
    )
  }
)

export default Alert
