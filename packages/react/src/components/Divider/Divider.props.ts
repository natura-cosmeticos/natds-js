export type DividerVariants = 'full-bleed' | 'inset' | 'middle'

export interface DividerProps {
  /**
   * Specify an optional className to be added to your Divider
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The variant to use.
   */
  variant?: DividerVariants;
}
