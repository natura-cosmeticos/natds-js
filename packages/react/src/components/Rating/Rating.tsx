/* eslint-disable complexity */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
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
  const { variant, ariaLabel, testID, ...rest } = props

  const { container, rating } = styles({ variant, ...rest })
  const renderTimes = variant === 'counter' ? 1 : 5

  return (
    <div className={container}>
      <div className={rating}>
        {[...Array(renderTimes)].map((_, index) => (
          variant && (
            <RatingBase
              disabled={props.disabled}
              clickable={isRatingInput(props)}
              onClick={props.onClick}
              ariaLabel={ariaLabel}
              iconActive={isRatingCounter(props) || index < props.rate}
              iconFilled={!isRatingInput(props) || index < props.rate}
              key={index.toString()}
              size={props.size}
              data-testid={testID}
            />
          )
        ))}
      </div>
      {((isRatingInput(props) || isRatingCounter(props)) && props.label) && (
        <LabelSubcomponent
          color="mediumEmphasis"
          label={props.label}
          fontSize={props.variant === 'input' ? 12 : 14}
        />
      )}
    </div>
  )
}

export default Rating
