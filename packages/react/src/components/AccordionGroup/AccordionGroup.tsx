import React from 'react'
import styles from './AccordionGroup.styles'
import { AccordionGroupProps } from './AccordionGroup.props'

const AccordionGroup = React.forwardRef<HTMLDivElement, AccordionGroupProps>(
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

export default AccordionGroup
