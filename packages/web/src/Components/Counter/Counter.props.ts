import { InputBaseProps } from '@material-ui/core'

export type Sizes = 'small' | 'medium';

export interface ICounterProps {

  /**
   * Insert a label above Counter input group. This attribute is optional.
   *
   * @default null
   * @optional
   * @type string
   */
  label?: string,

  /**
   * If `true` disable component actions.
   *
   * @default false
   * @optional
   * @type boolean
   */
  readOnly?: boolean

  /**
   * Select Counter component height
   *
   * @default "small"
   * @optional
   * @type string
   */
  size?: Sizes,

  /**
   * The maximum valid value for the component
   *
   * @default 99
   * @optional
   * @type number
   */
  maxValue?: number,

  /**
   * The minimum valid value for the component
   *
   * @default 0
   * @optional
   * @type number
   */
  minValue?: number,

  /**
   * Execute a callback when user change the input manually.
   * @type Function
   */
  onChange: InputBaseProps['onChange'],

  /**
   * Execute a callback when increment button is pressed.
   * @type Function
   */
  onIncrement: () => void,

  /**
   * Execute a callback when decrement button is pressed.
   * @type Function
   */
  onDecrement: () => void,

  /**
   * The value of input
   * @default 0
   */
  value?: number
}
