import React from 'react'
import styles from './Chip.styles'
import { ChipProps } from './Chip.props'

const Chip = React.forwardRef<HTMLElement, ChipProps>(
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

export default Chip
