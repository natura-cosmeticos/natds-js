export interface CardProps {

  /**
   * The content of Card
   */
  children: React.ReactNode

  /**
   * Override or extend the styles applied to the component
   */
  className?: string

  /**
   * If `false`, a box-shadow effect are disabled
   * @default true
   */
  elevation?: boolean;

  /**
   * If `false`, rounded corners are disabled
   * @default true
   */
  radius?: boolean;

  /**
   * Optional ID for testing
   */
  testID?: string;
}
