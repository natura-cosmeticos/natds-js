import { Size } from '@naturacosmeticos/natds-themes'
import { ButtonBaseProps, ButtonWithIcon } from 'components/Button/Button.props'

type CounterSizes = keyof Pick<Size, 'semi' | 'medium' >

export interface CounterProps {
  
  disabled?: boolean

  size?: CounterSizes

  label?: String

  readOnly?: boolean

  maxValue?: number

  minValue?: number

  onIncrement: () => void

  onDecrement: () => void,
 
  value?: number

}

export type ButtonProps = ButtonBaseProps
& { showIcon?: never, iconPosition?: never }
| ButtonWithIcon
