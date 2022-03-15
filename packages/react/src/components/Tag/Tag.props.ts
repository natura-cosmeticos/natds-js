import { Color, Size } from '@naturacosmeticos/natds-themes'

export type TagColors = keyof Pick<Color, 'primary' | 'secondary' | 'success' | 'alert' | 'warning' | 'link'>
export type TagSizes = keyof Pick<Size, 'small' | 'standard'>
// It was done that way for the documentation to show types explicitly.
export type TagPositions = keyof {
  default: 'default';
  left: 'left';
  right: 'right';
}

export interface TagBaseProps {
  /**
   * Specify an optional className to be added to your Tag
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /** Optional position of the tag.
   * @default `default`
   * @optional
   */
  borderPosition?: TagPositions;

  /** Optional size of the tag.
   * @default `small`
   * @optional
   */
  size?: TagSizes;

  /**
   * Optional color of the tag.
   * @default `primary`
   * @optional
   */
  color?: TagColors;

  /** Define a label for the tag.
   * @required
   */
  text: string;

  /** Define a label for the tag.
   * @required
   */
  customBackgroundColor?: string;

  /** Define a label for the tag.
   * @required
   */
  customLabelColor?: string;
}

export interface TagCenteredProps extends TagBaseProps {
  /** Optional position of the tag.
   * @default `default`
   * @optional
   */
  borderPosition: 'default';

  /**
   * Element to be rendered inside the Tag.
   */
  IconComponent?: React.ReactElement;
}

export type TagProps = TagBaseProps | TagCenteredProps;
