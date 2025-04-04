export type DialogFooterAccessibilityProps = {
  role?: 'group';
  'aria-describedby'?: string;
};
export interface DialogFooterProps {

  accessibility?: DialogFooterAccessibilityProps;
  /**
   * Specify an optional className to be added to your DialogFooter
   */
  className?: string

  /**
   * Specify the main button into Footer area
   */
  primaryButton: React.ReactElement

  /**
   * Specify the secondary button into Footer area
   */
  secondaryButton?: React.ReactElement
}
