/* eslint-disable max-lines-per-function */
import React from 'react'
import { Label } from '../Label'
import { Button } from '../Button'
import { CounterProps } from './Counter.props'
import styles from './Counter.styles'

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(({
  ariaLabelDecrementButton,
  ariaLabelIncrementButton,
  accessibilitySpanDecrement,
  accessibilitySpanIncrement,
  accessibilityDecrement,
  accessibilityIncrement,
  ariaLabelInput,
  className = '',
  disabled,
  readOnly,
  label,
  maxValue = 99,
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
          variant="text"
          accessibility={accessibilityDecrement}
          accessibilitySpan={accessibilitySpanDecrement}
        >
          -
        </Button>
        <input
          aria-label={ariaLabelInput}
          className={inputBase}
          readOnly={readOnly}
          onChange={onChange}
          value={value}
          maxLength={2}
          inputMode="numeric"
        />
        <Button
          ariaLabel={ariaLabelIncrementButton}
          className={buttonRight}
          disabled={disabled || maxReached}
          onClick={onIncrement}
          size={size}
          testID="onIncrement-btn"
          variant="text"
          accessibility={accessibilityIncrement}
          accessibilitySpan={accessibilitySpanIncrement}
        >
          +
        </Button>
      </div>
    </div>
  )
})

export default Counter
