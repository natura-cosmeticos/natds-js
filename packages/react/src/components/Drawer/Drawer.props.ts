export type DrawerProps = {
  /**
   * Override or extend the styles applied to the component
   */
  className?: string
  /**
   * If `false`, a box-shadow effect are disabled
   * @default true
   */
  elevation?: boolean
  /**
   * Whether the Drawer is opened or not
   */
  open: boolean
  /**
   * If `false`, disables the overlay outside the Drawer
   * @default true
   */
  overlay?: boolean
  /**
    * The Drawer's width size
    * @default small
  */
  size?: 'small' | 'medium' | 'large'
  /**
   * Optional ID for testing
   */
  testID?: string
}
