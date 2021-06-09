import { Size } from '@naturacosmeticos/natds-themes'

export type ProgressIndicatorSize = keyof Pick<Size, 'standard' | 'semi' | 'medium' | 'large'>
export interface ProgressIndicatorProps {
  /**
   * Describe the purpose of Progress Indicator
   * Read more [here](https://dequeuniversity.com/rules/axe/4.2/aria-progressbar-name?application=axeAPI)
   */
  ariaLabel: string

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
}
