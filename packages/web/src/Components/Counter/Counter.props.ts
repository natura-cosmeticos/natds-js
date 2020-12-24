export type Sizes = "small" | "medium";

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
   * Select Counter component height with two sizes (small or medium).
   *
   * @default "small"
   * @optional
   * @type string
   */
  size?: Sizes,

  /**
   * Start the component with a defined value.
   *
   * @default 1
   * @type number
   */
  initialValue: number,

  /**
   * The maximum valid value for the component
   *
   * @default 99
   * @optional
   * @type number
   */
  maxValue?: number,

  /**
   * The mininum valid value for the component
   *
   * @default 0
   * @optional
   * @type number
   */
  minValue?: number,

  /**
   * Execute a callback when user change the input manually.
   *
   * @type Function
   */
  onChange: (newValue: number) => void,

  /**
   * Execute a callback when increment button is pressed.
   *
   * @type Function
   */
  onIncrement: (newValue: number) => void,

  /**
   * Execute a callback when decrement button is pressed.
   *
   * @type Function
   */
  onDecrement: (newValue: number) => void,
}
