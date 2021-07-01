export interface DialogProps {
  /**
   * Use this attribute to describe the contents of the dialog.
   */
  ariaDescribedBy?: string

  /**
   * The value of the this attribute will be
   * the id of the element used to title the dialog.
   */
  ariaLabelledBy?: string
  /**
   * Component children, usually the included sub-components.
   */
  children: React.ReactNode

  /**
   * If `true`, the `Dialog` is open.
   * @default false
   */
  openDialog?: boolean

  /**
   * Optional ID for testing
   */
  testID?: string
}
