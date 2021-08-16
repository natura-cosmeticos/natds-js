import { Size } from '@naturacosmeticos/natds-themes'

export type RatingPosition = 'left' | 'right'
export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5
export type RatingInputSize = keyof Pick<Size, 'semi' | 'semiX' | 'medium'>
export type RatingCounterSize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>
export type RatingReadOnlySize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>

export interface RatingBaseProps {
  ariaLabel: string
  testID?: string
}

export type RatingCounter = RatingBaseProps & ({
  align?: RatingPosition
  label: string
  size: RatingCounterSize
  variant: 'counter'
})

export type RatingInput = RatingBaseProps & ({
  disabled?: boolean
  label?: string
  onClick: (e: any) => void
  rate: RatingValue
  size: RatingInputSize
  variant: 'input'
})

export type RatingReadOnly = RatingBaseProps & ({
  rate: RatingValue
  size: RatingReadOnlySize
  variant: 'read-only'
})

export type RatingProps = RatingCounter
  | RatingInput
  | RatingReadOnly
