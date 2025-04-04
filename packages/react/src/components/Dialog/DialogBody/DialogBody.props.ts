export type DialogBodyAccessibilityProps = {
  id?: string;
  role?: 'document';
};
export interface DialogBodyProps {

  accessibility?: DialogBodyAccessibilityProps;
  /**
   * Component children, usually the included another component.
   */
  children: React.ReactNode

  /**
   * Specify an optional className to be added to your DialogBody
   */
  className?: string

  /**
   * If `true`, will show a Divider above and below the DialogBody
   */
  showDivider?: boolean
}
