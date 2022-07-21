export interface TestComponentProps {
  /**
   * Specify an optional className to be added to your TestComponent
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Set default style
   * @default primary
   */
  color?: 'primary' | 'secondary'
}
