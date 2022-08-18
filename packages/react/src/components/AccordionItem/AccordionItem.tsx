import React, { useState } from 'react'
import styles from './AccordionItem.styles'
import { AccordionItemProps } from './AccordionItem.props'
import Icon from '../Icon'

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (props, ref) => {
    const {
      className = '',
      ...rest
    } = props
    const { wrapper, header, content } = styles()

    const [isActive, setIsActive] = useState(true)

    return (
      <div
        className={`${className} ${wrapper}`}
        ref={ref}
        {...rest}
      >
        <div className={header} onClick={() => setIsActive(!isActive)}>
          Header
          <Icon
            name={
            isActive
              ? 'outlined-navigation-arrowtop'
              : 'outlined-navigation-arrowbottom'
}
            size="standard"
            color="primary"
          />
        </div>

        {isActive && (
        <div className={content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
          ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
          ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
        </div>
        )}
      </div>
    )
  }
)

export default AccordionItem
