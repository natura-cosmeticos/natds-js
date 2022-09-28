import React from 'react'
import styles from './Test.styles'
import { TestProps } from './Test.props'

const Test = React.forwardRef<HTMLElement, TestProps>(
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

export default Test
