import React from 'react'
import { useLabelStyles } from './Tag.styles'
import { TagProps } from './Tag.props'

const TagLabel = (props: TagProps) => {
  const {
    text,
    color,
    customLabelColor
  } = props

  const { label } = useLabelStyles({ color, customLabelColor })

  return (
    <span className={label}>
      {text}
    </span>
  )
}

export default TagLabel
