/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable complexity */
import React, { useState } from 'react'
import {
  RatingInputProps,
  RatingCounterProps,
  RatingReadOnlyProps,
  RatingProps
} from './Rating.props'
import RatingBase from './RatingBase'
import { Label } from '../Label'
import styles from './Rating.styles'

export const isRatingInput = (props: RatingProps): props is RatingInputProps => props.variant === 'input'
export const isRatingCounter = (props: RatingProps): props is RatingCounterProps => props.variant === 'counter'
export const isRatingReadOnly = (props: RatingProps): props is RatingReadOnlyProps => props.variant === 'read-only'

const Rating = (props: RatingProps): JSX.Element => {
  const {
    variant,
    ariaLabel,
    testID,
    size,
    ariaLabelGroup,
    ...rest
  } = props

  const { container, rating, labelText } = styles({ variant, ...rest })

  const [hover, setHover] = useState(0)

  const showHover = isRatingInput(props) && !props.disabled
  const renderTimes = isRatingCounter(props) ? 1 : 5

  const IsFilled = (i: number) => !isRatingInput(props) || hover >= i + 1 || i + 1 <= props.rate
  const isActive = (i: number) => (!isRatingCounter(props) && i + 1 <= props.rate) || i + 1 <= hover || isRatingCounter(props)
  const checkOnClick = isRatingInput(props) ? props.onClick : () => ''

  return (
    <div className={container}>
      <div className={rating} aria-label={ariaLabelGroup}>
        {Array(renderTimes).fill(0).map((_, index) => (
          (isRatingCounter(props) || isRatingReadOnly(props) || isRatingInput(props)) && (
            <RatingBase
              ariaLabel={ariaLabel}
              disabled={isRatingInput(props) && props.disabled}
              iconActive={isActive(index)}
              iconFilled={IsFilled(index)}
              isClickable={isRatingInput(props)}
              key={index.toString()}
              onClick={checkOnClick}
              onMouseEnter={() => showHover && setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              value={index + 1}
              size={size}
              testID={`${testID}-${index + 1}`}
            />
          )
        ))}
      </div>
      {((isRatingInput(props) || isRatingCounter(props)) && props.label) && (
        <Label label={props.label} className={labelText} />
      )}
    </div>
  )
}

export default Rating
