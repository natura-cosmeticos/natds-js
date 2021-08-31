import { Size } from '@naturacosmeticos/natds-themes'

type CounterSizes = keyof Pick<Size, 'semiX' | 'medium' >

export interface CounterProps {

  /**
   * If `true` disable component actions.
   *
   * @default false
   * @optional
   * @type boolean
   */
  disabled?: boolean

  /**
   * Insert a label above Counter input group. This attribute is optional.
   *
   * @default null
   * @optional
   * @type string
   */
  label?: string

  /**
   * The maximum valid value for the component
   *
   * @default 99
   * @optional
   * @type number
   */
  maxValue?: number

  /**
   * The minimum valid value for the component
   *
   * @default 0
   * @optional
   * @type number
   */
  minValue?: number

  /**
   * Execute a callback when user change the input manually.
   * @type Function
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>

  /**
   * Execute a callback when decrement button is pressed.
   * @type Function
   */
  onDecrement: () => void

  /**
   * Execute a callback when increment button is pressed.
   * @type Function
   */
  onIncrement: () => void

  /**
   * Select Counter component height
   *
   * @default "semiX"
   * @optional
   * @type string
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
  value: number
}
