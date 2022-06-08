import React from 'react'
import styles from './Select.styles'
import { SelectProps } from './Select.props'

const Select = React.forwardRef<HTMLElement, SelectProps>(
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

export default Select
