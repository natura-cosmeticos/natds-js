import React from 'react'
import styles from './Accordion.styles'
import { AccordionProps } from './Accordion.props'

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      className = '',
      ...rest
    } = props
    const { wrapper } = styles()

    return (
      <div
        className={`${className} ${wrapper}`}
        ref={ref}
        {...rest}
      >
        {props.children}
      </div>
    )
  }
)

export default Accordion
