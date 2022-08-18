import React from 'react'
import styles from './Accordion.styles'
import { AccordionProps } from './Accordion.props'

const Accordion = React.forwardRef<HTMLElement, AccordionProps>(
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

export default Accordion
