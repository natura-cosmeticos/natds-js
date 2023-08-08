type AppBarTopColor = 'default' | 'primary' | 'none' | 'inverse' | 'secondary'
type AppBarTopBehaviour = 'fixed' | 'scroll' | 'absolute'

export type AppBarProps = {
  /**
   * If `fixed` the AppBarTop is fixed leaving the content
   * scrolling from behind, when using `scroll` it hides
   * the AppBarTop when scrolling up and reveals when scrolling
   * down
   * @default fixed
   */
  behaviour?: AppBarTopBehaviour

  /**
   * Specify the content of your AppBarTop
   */
  children?: React.ReactNode

  /**
   * Override or extend the styles applied to the component
   */
  className?: string

  /**
   * Define de background color
   * @default default
   */
  color?: AppBarTopColor

  /**
   * If `false`, a box-shadow effect are disabled
   * @default true
   */

  elevation?: boolean

  /**
   * Define a semantic role for Assistive Technology
   */
  role?: string

  /**
   * Optional ID for testing
   */
  testID?: string
}

export type AppBarStyleOptions = AppBarProps & {
  hide: boolean
}
