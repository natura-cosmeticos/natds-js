import { Size } from '@naturacosmeticos/natds-themes'

type CounterSizes = keyof Pick<Size, 'semiX' | 'medium' >

export interface CounterProps {
  disabled?: boolean
  label?: string
  maxValue?: number
  minValue?: number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onDecrement: () => void,
  onIncrement: () => void
  readOnly?: boolean
  size?: CounterSizes
  testID?: string
  value: number
}
