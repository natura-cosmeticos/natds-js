export interface DialogBodyProps {
  /**
   * Component children, usually the included sub-components.
   */
  children: React.ReactNode

  /**
  * The value must be the same as the one passed to
  * the `aria-describedby` attribute.
  */
  id?: string

  /**
   * Optional ID for testing
   */
  showDivider?: boolean
}
