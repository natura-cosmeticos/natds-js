import React from 'react'
import styles from './TestComponent.styles'
import { TestComponentProps } from './TestComponent.props'

const TestComponent = React.forwardRef<HTMLElement, TestComponentProps>(
  (props, ref) => {
    const {
      className = '',
      color = 'primary',
      ...rest
    } = props

    const { wrapper } = styles({ color })

    return (
      <span
        className={`${className} ${wrapper}`}
        ref={ref}
        {...rest}
      >
        {props.children}
      </span>
    )
  }
)

export default TestComponent
