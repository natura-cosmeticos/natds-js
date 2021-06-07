import { Size } from '@naturacosmeticos/natds-themes'

export type ProgressIndicatorSize = keyof Pick<Size, 'standard' | 'semi' | 'medium' | 'large'>
export interface ProgressIndicatorProps {
  /**
   * Show a layer behind the progress indicator
   * @default false
   */
  showLayer?: boolean

  /**
   * The Progress Indicator size
   * @default medium
   */
  size?: ProgressIndicatorSize

  /**
   * Optional ID for testing
   */
  testID?: string,

  /**
   * The Progress Indicator model
   * @default circular
   */
  variant?: 'circular'
}
