import { Size } from '@naturacosmeticos/natds-themes'

export type RatingPosition = 'left' | 'right'
export type RatingValue = 0 | 1 | 2 | 3 | 4 | 5
export type RatingInputSize = keyof Pick<Size, 'semi' | 'semiX' | 'medium'>
export type RatingCounterSize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>
export type RatingReadOnlySize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>

export interface RatingBaseProps {
  /**
   * Use to define a text that explains the meaning of EACH Rating.
   */
  ariaLabel: string
  /**
   * Optional ID for testing
   * By default, this value will be concatenated to the position of each element.
   * @example rating-1
   */
  testID?: string
}

export type RatingCounterProps = RatingBaseProps & ({
  /**
   * The Rating position relative to placeholder
   * @default left
   */
  align?: RatingPosition

  /**
   * The text aside the Rating
   */
  label: string

  /**
   * The size of Rating
   */
  size: RatingCounterSize

  /**
   * The variant
   */
  variant: 'counter'
})

export type RatingInputProps = RatingBaseProps & ({
  /**
   * If `true`, the Rating will be disabled
   * @default false
   */
  disabled?: boolean

  /**
   * The text below the Rating
   */
  label?: string

  /**
   * Click handler
   */
  onClick: (e: any) => void

  /**
   * The number of Rating stars filled
   */
  rate: RatingValue

  /**
   * The size of Rating
   */
  size: RatingInputSize

  /**
   * The variant
   */
  variant: 'input'
})

export type RatingReadOnlyProps = RatingBaseProps & ({
  /**
   * The number of Rating stars filled
   */
  rate: RatingValue

  /**
   * The size of Rating
   */
  size: RatingReadOnlySize

  /**
   * The variant
   */
  variant: 'read-only'
})

export type RatingProps = RatingCounterProps | RatingInputProps | RatingReadOnlyProps
