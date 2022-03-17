import React from 'react'
import styles from './Tag.styles'
import { TagProps } from './Tag.props'

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (props, ref) => {
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

    const { container, content } = styles({
      position, color, size, customBackgroundColor, customLabelColor
    })

    return (
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
    )
  }
)

export default Tag
