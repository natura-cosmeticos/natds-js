import { Size } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'

export type ProgressIndicatorSize = keyof Pick<Size, 'standard' | 'semi' | 'medium' | 'large'>
export interface ProgressIndicatorProps {
  /**
   * Describe the purpose of Progress Indicator
   * Read more [here](https://dequeuniversity.com/rules/axe/4.2/aria-progressbar-name?application=axeAPI)
   */
  ariaLabel: string

  /**
   * Specify an optional className to be added to your ProgressIndicator
   */
  className?: string
  /**
   * Specify an optional Brand to be added to your ProgressIndicator
   */
  brand?: BrandTypes

  /**
   * Show a layer behind the progress indicator
   * @default false
   */
  showBackdrop?: boolean

  /**
   * The Progress Indicator size
   * @default medium
   */
  size?: ProgressIndicatorSize

  /**
   * Optional ID for testing
   */
  testID?: string,
}
