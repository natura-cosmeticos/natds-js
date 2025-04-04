export type DialogHeaderAccessibilityProps = {
  id?: string;
  role?: 'heading';
  'aria-level'?: number;
};
export interface DialogHeaderProps {

  accessibility?: DialogHeaderAccessibilityProps;
  /**
   * Component children, usually the included other components.
   */
  children?: React.ReactNode,

  /**
   * Specify an optional className to be added to your DialogHeader
   */
  className?: string

  /**
   * @deprecated
   * use accessibility object
   * The value must be the same as the one passed to
   * the `aria-labelledby` attribute in the Dialog
   */
  id?: string

  /**
   * The title of Dialog
   */
  title: string
}
