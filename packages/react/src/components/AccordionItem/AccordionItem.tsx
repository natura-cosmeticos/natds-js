import React from 'react'
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

    return (
      <div
        className={`${className} ${wrapper}`}
        ref={ref}
        {...rest}
      >
        <div className={header}>
          Header
          <Icon name="outlined-navigation-arrowbottom" />
        </div>

        <div className={content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
          ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
          ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
        </div>
      </div>
    )
  }
)

export default AccordionItem
