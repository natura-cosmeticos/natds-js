/* eslint-disable max-lines-per-function */
import React from 'react'
import { Label } from '../Label'
import { Button } from '../Button'
import { CounterProps } from './Counter.props'
import styles from './Counter.styles'

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(({
  ariaLabelDecrementButton,
  ariaLabelIncrementButton,
  className = '',
  disabled,
  readOnly,
  label,
  maxValue = 999,
  minValue = 0,
  onDecrement,
  onIncrement,
  onChange,
  size = 'semiX',
  testID,
  value = 0
}, ref) => {
  const {
    buttonGroup, inputBase, buttonLeft, buttonRight, labelText
  } = styles({ size })

  const maxReached = value >= maxValue
  const minReached = value <= minValue

  return (
    <div data-testid={testID} ref={ref} className={`${className} Counter-gaya`}>
      {label && <Label className={labelText} label={label} />}
      <div className={buttonGroup}>
        <Button
          ariaLabel={ariaLabelDecrementButton}
          className={buttonLeft}
          disabled={disabled || minReached}
          onClick={onDecrement}
          size={size}
          testID="onDecrement-btn"
          variant="outlined"
          showIcon
          iconName="outlined-action-subtract"
          iconPosition="center"
        >
          {' '}
        </Button>
        <input
          className={inputBase}
          readOnly={readOnly}
          onChange={onChange}
          value={value}
          maxLength={3}
          inputMode="numeric"
        />
        <Button
          ariaLabel={ariaLabelIncrementButton}
          className={buttonRight}
          disabled={disabled || maxReached}
          onClick={onIncrement}
          size={size}
          testID="onIncrement-btn"
          variant="outlined"
          showIcon
          iconName="outlined-action-add"
          iconPosition="center"
        >
          {' '}
        </Button>
      </div>
    </div>
  )
})

export default Counter
