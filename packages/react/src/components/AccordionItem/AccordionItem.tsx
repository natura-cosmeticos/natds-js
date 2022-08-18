import React from 'react'
import styles from './AccordionItem.styles'
import { AccordionItemProps } from './AccordionItem.props'

const AccordionItem = React.forwardRef<HTMLElement, AccordionItemProps>(
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

export default AccordionItem
