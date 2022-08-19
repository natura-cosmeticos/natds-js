import React from 'react'
import { Color } from '@naturacosmeticos/natds-themes'
import styles from './AccordionItem.styles'
import { AccordionItemProps } from './AccordionItem.props'
import Icon from '../Icon'

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (props, ref) => {
    const {
      className = '',
      color = 'regular',
      isActive = false,
      isDisabled = false,
      onClick,
      children,
      ...rest
    } = props
    const { wrapper, header, content } = styles({ color, isActive, isDisabled })

    const setIconColor = (): keyof Color => {
      if (isDisabled) {
        return 'mediumEmphasis'
      }

      return color === 'regular' ? 'primary' : 'highEmphasis'
    }

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
            color={setIconColor()}
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