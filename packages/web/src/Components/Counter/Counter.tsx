import * as React from 'react'
import { ICounterProps } from './Counter.props'
import { useStyles } from './Counter.styles'
import { Button } from '../Button'
import { ButtonGroup } from '../ButtonGroup'
import { InputLabel } from '../InputLabel'
import { InputCounter } from './InputCounter'

export { ICounterProps } from './Counter.props'

/**
 * ## Importing
 *
 * ```
 * import { Counter } from '@naturacosmeticos/natds-web';
 * ```
 */

export const Counter = (props: ICounterProps) => {
  const {
    value = 0,
    onChange,
    onDecrement,
    onIncrement,
    size = 'small',
    label,
    readOnly = false,
    maxValue = 99,
    minValue = 0
  } = props

  const { button, input, group } = useStyles(props)

  const maxReached = value >= maxValue
  const minReached = value <= minValue

  return (
    <div>
      { label && <InputLabel>{label}</InputLabel>}
      <ButtonGroup
        color="default"
        disableElevation
        size={size}
        orientation="horizontal"
        disabled={readOnly}
        className={group}
      >
        <Button
          id="decrement-button"
          disabled={minReached}
          variant="outlined"
          onClick={onDecrement}
          className={button}
        >
          -
        </Button>
        <InputCounter
          value={value}
          className={input}
          onChange={onChange}
        />
        <Button
          id="increment-button"
          disabled={maxReached}
          variant="outlined"
          onClick={onIncrement}
          className={button}
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  )
}

Counter.displayName = 'Counter'

export default Counter
