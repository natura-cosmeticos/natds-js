import React from 'react'
import styles from './LabelText.styles'
import { LabelTextProps } from './LabelText.props'

const LabelText = React.forwardRef<HTMLParagraphElement, LabelTextProps>(
  (props, ref) => {
    const {
      className = '',
      hasError = false,
      ...rest
    } = props
    const { description } = styles({ hasError })

    return (
      <p
        className={`${className} ${description}`}
        ref={ref}
        {...rest}
      >
        {props.children}
      </p>
    )
  }
)

export default LabelText
