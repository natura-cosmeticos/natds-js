export type CollapseProps = {
  /**
   * Override or extend the styles applied to the component
   */
  className?: string
  /**
   * Controls when the content should be show or hide
   * @default false
   */
  open?: boolean
  /**
   * Optional ID for testing
   */
  testID?: string

  /**
   * The content of collapse
   */
  children: React.ReactNode
}
