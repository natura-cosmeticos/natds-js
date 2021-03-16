export interface ButtonProps {
  /**
   * The size of the button
   */
  size?: 'semi' | 'semix' | 'medium';

  /**
   * The text content of the button
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}
