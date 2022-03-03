import React from 'react'
import {
  RatingReadOnlyProps,
  RatingProps,
  RatingInputProps
} from './Rating.props'
import RatingBase from './RatingBase'
import { useRatingStyles } from './Rating.styles'

export const isRatingReadOnly = (props: RatingProps): props is RatingReadOnlyProps => props.variant === 'read-only'
export const isRatingInput = (props: RatingProps): props is RatingInputProps => props.variant === 'input'

const RatingReadOnly = ({ ariaLabelGroup, testID, ...props }: RatingProps) => {
  const { rating } = useRatingStyles(props)
  const renderTimes = 5

  const isFilled = (element: number) => (
    isRatingReadOnly(props) && element + 1 <= props.rate) || isRatingReadOnly(props)
  const isActive = (element: number) => isRatingReadOnly(props) && element + 1 <= props.rate

  return (
    <div className={rating} aria-label={ariaLabelGroup}>
      {Array(renderTimes).fill(0).map((_, index) => (
        isRatingReadOnly(props) && (
          <RatingBase
            ariaLabel={props.ariaLabel}
            iconActive={isActive(index)}
            iconFilled={isFilled(index)}
            key={index.toString()}
            onClick={() => ''}
            value={index + 1}
            size={props.size}
            testID={`${testID}-${index + 1}`}
          />
        )
      ))}
    </div>
  )
}

export default RatingReadOnly
