export interface ButtonProps {
  /**
   * The size of the button
   */
  size?: 'semi' | 'semiX' | 'medium';

  /**
   * The text content of the button
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;
}
