export interface ButtonProps {
  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * @default inline
   */
  display?: 'inline' | 'block';

  /**
   * The text content of the button
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * The size of the button
   */
  size?: 'semi' | 'semiX' | 'medium';

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The variant to use.
   */
  variant?: 'contained';
}
