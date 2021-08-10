import { Size } from '@naturacosmeticos/natds-themes'

export type RatingPosition = 'left' | 'right'
export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5
export type RatingInputSize = keyof Pick<Size, 'semi' | 'semiX' | 'medium'>
export type RatingCounterSize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>
export type RatingReadOnlySize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>

export interface RatingBaseProps {
  testID?: string
  ariaLabel: string
}

export type RatingInput = RatingBaseProps & ({
  align: 'top'
  disabled?: boolean
  label?: string
  onClick: () => void
  rate?: RatingValue
  size: RatingInputSize
  variant: 'input'
})

export type RatingCounter = RatingBaseProps & ({
  align?: RatingPosition
  label?: string
  size: RatingCounterSize
  variant: 'counter'
})

export type RatingReadOnly = RatingBaseProps & ({
  rate?: RatingValue
  size: RatingReadOnlySize
  variant: 'read-only'
})

export type RatingProps = RatingBaseProps & { variant?: never }
  | RatingCounter
  | RatingInput
  | RatingReadOnly
