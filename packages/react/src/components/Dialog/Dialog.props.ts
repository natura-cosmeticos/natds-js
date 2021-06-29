export interface DialogProps {
  /**
   * Component children, usually the included sub-components.
   */
  children: React.ReactNode

  /**
   * Optional ID for testing
   */
  testID?: string

  /**
   * If `true`, the `Dialog` is open.
   * @default false
   */
  openDialog?: boolean
}
