import React from 'react'
import { RatingProps } from './Rating.props'
import RatingInput from './RatingInput'
import RatingCounter from './RatingCounter'
import RatingReadOnly from './RatingReadOnly'
import { useContainerStyles } from './Rating.styles'

export const renderVariant = (props: RatingProps) => {
  const { variant } = props

  const types = {
    input: <RatingInput {...props} />,
    counter: <RatingCounter {...props} />,
    'read-only': <RatingReadOnly {...props} />
  }

  return types[variant]
}

const Rating = ({ className = '', ...props }: RatingProps) => {
  const { container } = useContainerStyles(props)

  return (
    <div className={`${className} ${container}`}>
      {renderVariant({ ...props })}
    </div>
  )
}

export default Rating
