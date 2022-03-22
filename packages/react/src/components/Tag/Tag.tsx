import React from 'react'
import styles from './Tag.styles'
import { TagProps } from './Tag.props'

const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    className = '',
    testID,
    size = 'small',
    color = 'primary',
    position = 'center',
    customBackgroundColor,
    customLabelColor,
    children,
    IconComponent,
    ...rest
  } = props

  const { container, content, wrapper } = styles({
    position, color, size, customBackgroundColor, customLabelColor
  })

  return (
    <div className={wrapper}>
      <div
        className={`${className} ${container}`}
        data-testid={testID}
        ref={ref}
        {...rest}
      >
        <>{IconComponent}</>
        <span className={content}>
          {children}
        </span>
      </div>
    </div>
  )
})

export default Tag
