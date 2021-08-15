/* eslint-disable react/destructuring-assignment */
/* eslint-disable complexity */
import React, { useState } from 'react'
import {
  RatingInput,
  RatingCounter,
  RatingReadOnly,
  RatingProps
} from './Rating.props'
import { RatingBase } from '../_subcomponents/Rating'
import { Label as LabelSubcomponent } from '../_subcomponents/Label'
import styles from './Rating.styles'

export const isRatingInput = (props: RatingProps): props is RatingInput => (props as RatingInput).variant === 'input'
export const isRatingCounter = (props: RatingProps): props is RatingCounter => (props as RatingCounter).variant === 'counter'
export const isRatingReadOnly = (props: RatingProps): props is RatingReadOnly => (props as RatingReadOnly).variant === 'read-only'

const Rating = (props: RatingProps): JSX.Element => {
  const {
    variant,
    ariaLabel,
    testID,
    ...rest
  } = props

  const { container, rating } = styles({ variant, ...rest })

  const [hover, setHover] = useState(0)

  const showHover = isRatingInput(props) && !props.disabled
  const renderTimes = isRatingCounter(props) ? 1 : 5

  const IsFilled = (i: number) => !isRatingInput(props) || hover >= i + 1 || i + 1 <= props.rate
  const isActive = (i: number) => i + 1 <= (hover || props.rate) || isRatingCounter(props)

  const checkOnClick = isRatingInput(props) ? props.onClick : () => ''

  return (
    <div className={container}>
      <div className={rating}>
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
              rate={isRatingCounter(props) ? 0 : props.rate}
              size={props.size}
              testID={testID}
            />
          )
        ))}
      </div>
      {((isRatingInput(props) || isRatingCounter(props)) && props.label) && (
        <LabelSubcomponent color="mediumEmphasis" fontSize={isRatingInput(props) ? 12 : 14} label={props.label} />
      )}
    </div>
  )
}

export default Rating
