import { Size } from '@naturacosmeticos/natds-themes'

type CounterSizes = keyof Pick<Size, 'semi' | 'medium' >

export interface CounterProps {
  
  disabled?: boolean

  size?: CounterSizes

  label?: string

  readOnly?: boolean

  maxValue?: number

  minValue?: number

  onIncrement: () => void

  onDecrement: () => void,
 
  value: number

  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>

}
