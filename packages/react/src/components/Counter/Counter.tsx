/* eslint-disable max-lines-per-function */
import React from 'react'
import { CounterProps } from './Counter.props'
import Label from '../_subcomponents/Label'
import styles from './Counter.styles'
import ButtonBase from '../Button/ButtonBase'

const Counter = ({
  value = 0,
  onChange,
  onDecrement,
  onIncrement,
  size = 'semiX',
  label,
  maxValue = 99,
  minValue = 0,
  testID,
  disabled
}: CounterProps) => {
  const {
    buttonLeft, buttonRight, buttonGroup, container
  } = styles({ size, disabled })

  const maxReached = value >= maxValue
  const minReached = value <= minValue

  return (
    <div className={container}>
      {label && <Label color="mediumEmphasis" label={label} />}
      <div className={buttonGroup}>
        <ButtonBase
          classes={buttonLeft}
          disabled={minReached}
          onClick={onDecrement}
          size={size}
          testID={testID}
          value="-"
        >
          -
        </ButtonBase>
        <input
          value={value}
          onChange={onChange}
        />
        <ButtonBase
          classes={buttonRight}
          disabled={maxReached}
          onClick={onIncrement}
          size={size}
          testID={testID}
          value="+"
        >
          +
        </ButtonBase>
      </div>
    </div>
  )
}

export default Counter
