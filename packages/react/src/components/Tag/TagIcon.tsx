import React from 'react'
import { useContainerStyles, useLabelStyles } from './Tag.styles'
import { TagCenteredProps } from './Tag.props'

const TagIcon = (props: TagCenteredProps) => {
  const {
    text,
    color,
    customLabelColor,
    IconComponent
  } = props

  const { container, content } = useContainerStyles()
  const { label } = useLabelStyles({ color, customLabelColor })

  return (
    <>
      {IconComponent && (
        <span className={`${container} ${content}`}>{IconComponent}</span>
      )}
      <span className={label}>
        {text}
      </span>
    </>
  )
}

export default TagIcon
