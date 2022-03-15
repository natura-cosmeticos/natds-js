import React from 'react'
import { useSurfaceStyles, useContainerStyles } from './Tag.styles'
import { TagProps } from './Tag.props'
import TagIcon from './TagIcon'
import TagLabel from './TagLabel'

export const renderVariant = (props: TagProps) => {
  const { borderPosition } = props

  return borderPosition === 'default' ? <TagIcon {...props} borderPosition="default" /> : <TagLabel {...props} />
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (props, ref) => {
    const {
      className = '',
      testID,
      size = 'small',
      color = 'primary',
      borderPosition = 'default',
      customBackgroundColor,
      customLabelColor,
      ...rest
    } = props

    const { surface } = useSurfaceStyles({
      borderPosition, color, size, customBackgroundColor
    })
    const { container } = useContainerStyles()

    return (
      <span
        className={`${className} ${surface}`}
        data-testid={testID}
        ref={ref}
        {...rest}
      >
        <span className={container}>
          {renderVariant({
            ...props, size, color, borderPosition, customBackgroundColor, customLabelColor
          })}
        </span>
      </span>
    )
  }
)

export default Tag
