import React from 'react'
import styles from './AccordionItem.styles'
import { AccordionItemProps } from './AccordionItem.props'
import Icon from '../Icon'

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (props, ref) => {
    const {
      className = '',
      color = 'regular',
      isActive = false,
      onClick,
      children,
      ...rest
    } = props
    const { wrapper, header, content } = styles({ color, isActive })

    return (
      <div
        className={`${className} ${wrapper}`}
        ref={ref}
        {...rest}
      >
        <div className={header} onClick={onClick}>
          Header
          <Icon
            name={
            isActive
              ? 'outlined-navigation-arrowtop'
              : 'outlined-navigation-arrowbottom'
}
            size="standard"
            color={color === 'regular' ? 'primary' : 'highEmphasis'}
          />
        </div>

        {isActive && (
        <div className={content}>
          {children}
        </div>
        )}
      </div>
    )
  }
)

export default AccordionItem
