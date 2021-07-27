export interface DialogHeaderProps {
  /**
   * Component children, usually the included sub-components.
   */
  children?: React.ReactNode,

  /**
   * The value must be the same as the one passed to
   * the `aria-labelledby` attribute in the Dialog
   */
  id?: string

  /**
   * The title of Dialog
   */
  title: string
}
