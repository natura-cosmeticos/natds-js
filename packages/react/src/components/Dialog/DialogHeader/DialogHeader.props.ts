export interface DialogHeaderProps {
  /**
   * Component children, usually the included other components.
   */
  children?: React.ReactNode,

  /**
   * Specify an optional className to be added to your DialogHeader
   */
  className?: string

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
