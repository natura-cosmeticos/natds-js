import { Size } from '@naturacosmeticos/natds-themes'

type CounterSizes = keyof Pick<Size, 'semiX' | 'medium'>

export interface CounterProps {

  /**
   * Add a description to increment button
   */
  ariaLabelIncrementButton?: string

  /**
   * Add a description to decrement button
   */
  ariaLabelDecrementButton?: string

  /**
   * If `true` disable component actions.
   *
   * @default false
   */
  disabled?: boolean

  /**
   * Insert a label above Counter input group.
   *
   */
  label?: string

  /**
   * The maximum valid value for the component
   *
   * @default 99
   */
  maxValue?: number

  /**
   * The minimum valid value for the component
   *
   * @default 0
   */
  minValue?: number

  /**
   * Execute a callback when decrement button is pressed.
   */
  onDecrement: () => void

  /**
   * Execute a callback when increment button is pressed.
   */
  onIncrement: () => void

  /**
   * Select Counter component height
   *
   * @default "semiX"
   */
  size?: CounterSizes

  /**
   * Optional ID for testing
   */
  testID?: string

  /**
   * The value of input
   * @default 0
   */
  value?: number
}