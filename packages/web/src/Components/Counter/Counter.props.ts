export type Sizes = "small" | "medium";

export interface ICounterProps {
  label?: string,
  readOnly?: boolean
  size?: Sizes,
  initialValue: number,
  maxValue?: number,
  minValue?: number,
  onChange: (newValue: number) => void,
  onIncrement: (newValue: number) => void,
  onDecrement: (newValue: number) => void,
}
