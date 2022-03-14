export type AppBarProps = {
  children?: React.ReactNode
  /**
   * Override or extend the styles applied to the component
   */
  className?: string
  /**
   * If `fixed` the AppBarTop is fixed leaving the content
   * scrolling from behind, when using `scroll` it hides
   * the AppBarTop when scrolling up and reveals when scrolling
   * down
   * @default 'fixed'
   */
  behaviour?: 'fixed' | 'scroll'
  /**
   * Override or extend the styles applied to the component
   */
  color?: 'default' | 'primary' | 'none' | 'inverse'
  /**
   * If `false`, a box-shadow effect are disabled
   * @default true
   */
  elevation?: boolean
  /**
   * Optional ID for testing
   */
  testID?: string
}

export type AppBarStyleOptions = AppBarProps & {
  hide: boolean
}
