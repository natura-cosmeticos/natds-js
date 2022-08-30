import React from 'react'
import styles from './Image.styles'
import { ImageProps } from './Image.props'

const Image = React.forwardRef<HTMLElement, ImageProps>(
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

export default Image
