import React from 'react'
import { RatingCounterProps, RatingProps } from './Rating.props'
import RatingBase from './RatingBase'
import { Label } from '../Label'
import { useLabelStyles, useRatingStyles } from './Rating.styles'

export const isRatingCounter = (props: RatingProps): props is RatingCounterProps => props.variant === 'counter'

const RatingCounter = ({ ariaLabelGroup, testID, ...props }: RatingProps) => {
  const { labelText } = useLabelStyles(props)
  const { rating } = useRatingStyles(props)
  const renderTimes = 1

  return (
    <>
      <div className={rating} aria-label={ariaLabelGroup}>
        {Array(renderTimes).fill(0).map((_, index) => (
          isRatingCounter(props) && (
            <RatingBase
              ariaLabel={props.ariaLabel}
              key={index.toString()}
              value={index + 1}
              size={props.size}
              testID={`${testID}-${index + 1}`}
            />
          )
        ))}
      </div>
      {(isRatingCounter(props) && props.label) && (
        <Label label={props.label} className={labelText} />
      )}
    </>
  )
}

export default RatingCounter
