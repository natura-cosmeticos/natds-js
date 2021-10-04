export interface DialogBodyProps {
  /**
   * Component children, usually the included another component.
   */
  children: React.ReactNode
  /**
   * Specify an optional className to be added to your Badge
   */
  className?: string
  /**
   * If `true`, will show a Divider above and below the DialogBody
   */
  showDivider?: boolean
}
