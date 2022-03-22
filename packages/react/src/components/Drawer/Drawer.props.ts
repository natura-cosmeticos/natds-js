export type DrawerSize = 'small' | 'medium' | 'large'

export interface DrawerProps {
  /**
   * The content of Drawer
   */
  children: React.ReactNode
  /**
   * Override or extend the styles applied to the component
   */
  className?: string
  /**
   * Whether the Drawer is opened or not
   */
  open: boolean
  /**
    * The Drawer's width size
    * @default small
  */
  size?: DrawerSize
  /**
   * Optional ID for testing
   */
  testID?: string
}
