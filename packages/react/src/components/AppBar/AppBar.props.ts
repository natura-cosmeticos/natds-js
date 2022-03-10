export type AppBarProps = {
  children?: React.ReactNode
  /**
   * Override or extend the styles applied to the component
   */
  className?: string
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
