export interface TypographyProps {
  /**
   * Specify an optional className to be added to your Typography
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Specify the variant of Typography you want to create.
   * If no variant is specified, a 'body1' will be rendered.
   */
  variant?:
    'heading1' |
    'heading2' |
    'heading3' |
    'heading4' |
    'heading5' |
    'heading6' |
    'subtitle1' |
    'subtitle2' |
    'body1' |
    'body2' |
    'caption' |
    'overline',

  /**
   * Children to be rendered inside the Typography.
   * Should be pass a string like e.g. Lorem Ipsum
   * @required
   */
   children?: React.ReactNode;
}
