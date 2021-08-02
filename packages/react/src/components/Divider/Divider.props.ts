export type DividerVariants = 'full-bleed' | 'inset' | 'middle'

export interface DividerProps {
  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The variant to use.
   */
  variant?: DividerVariants;
}
