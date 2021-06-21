export interface CardProps {

  /**
   * The content of Card
   */
  children: React.ReactNode

  /**
   * If `false`, a box-shadow effect will be removed
   * @default true
   */
  elevation?: boolean;

  /**
   * If `false`, the box-radius effect will be removed
   * @default true
   */
  radius?: boolean;

  /**
   * Optional ID for testing
   */
  testID?: string;
}
