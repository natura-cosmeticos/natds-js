import React from 'react'
import styles from './Typography.styles'
import { TypographyProps } from './Typography.props'

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
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

export default Typography
