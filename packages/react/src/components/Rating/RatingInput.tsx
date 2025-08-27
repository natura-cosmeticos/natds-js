import React, { useState } from 'react'
import { RatingInputProps, RatingProps } from './Rating.props'
import RatingBase from './RatingBase'
import { Label } from '../Label'
import { useLabelStyles, useRatingStyles } from './Rating.styles'

export const isRatingInput = (props: RatingProps): props is RatingInputProps => props.variant === 'input'

const RatingInput = ({ ariaLabelGroup, testID, ...props }: RatingProps) => {
  const [hover, setHover] = useState(0)

  const { labelText } = useLabelStyles(props)
  const { rating } = useRatingStyles(props)
  const renderTimes = 5

  const isActive = (element: number) => (
    isRatingInput(props) && element + 1 <= props.rate) || element + 1 <= hover

  return (
    <>
      <div className={rating} aria-label={ariaLabelGroup}>
        {Array(renderTimes).fill(0).map((_, index) => (
          isRatingInput(props) && (
            <RatingBase
              ariaLabel={props.ariaLabel}
              disabled={props.disabled}
              iconActive={isActive(index)}
              iconFilled={isActive(index)}
              isClickable
              key={index.toString()}
              onClick={props.onClick}
              onMouseEnter={() => !props.disabled && setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              value={index + 1}
              size={props.size}
              testID={`${testID}-${index + 1}`}
            />
          )
        ))}
      </div>
      {(isRatingInput(props) && props.label) && (
        <Label label={props.label} className={labelText} />
      )}
    </>
  )
}

export default RatingInput
