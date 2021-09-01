/* eslint-disable max-lines-per-function */
import React from 'react'
import { CounterProps } from './Counter.props'
import Label from '../_subcomponents/Label'
import styles from './Counter.styles'
import Button from '../Button'

const Counter = ({
  disabled,
  label,
  maxValue = 99,
  minValue = 0,
  onDecrement,
  onIncrement,
  size = 'semiX',
  testID,
  value = 0,
  ariaLabelIncrementButton,
  ariaLabelDecrementButton
}: CounterProps) => {
  const {
    buttonGroup, inputBase, buttonLeft, buttonRigth
  } = styles({ size, disabled })

  const maxReached = value >= maxValue
  const minReached = value <= minValue

  return (
    <div data-testid={testID}>
      {label && <Label color="mediumEmphasis" label={label} />}
      <div className={buttonGroup}>
        <Button
          classes={buttonLeft}
          ariaLabel={ariaLabelDecrementButton}
          testID="onDecrement-btn"
          variant="text"
          text="-"
          onClick={onDecrement}
          disabled={disabled || minReached}
          size={size}
        />
        <input
          value={value}
          className={inputBase}
          readOnly
        />
        <Button
          classes={buttonRigth}
          ariaLabel={ariaLabelIncrementButton}
          testID="onIncrement-btn"
          variant="text"
          text="+"
          onClick={onIncrement}
          disabled={disabled || maxReached}
          size={size}
        />
      </div>
    </div>
  )
}

export default Counter
