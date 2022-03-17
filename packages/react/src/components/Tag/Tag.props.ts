import { Color, Size } from '@naturacosmeticos/natds-themes'

export type TagColors = keyof Pick<Color, 'primary' | 'secondary' | 'success' | 'alert' | 'warning' | 'link'>
export type TagSizes = keyof Pick<Size, 'small' | 'standard'>
export type TagPositions = 'center' | 'left' | 'right'

export interface TagProps {
  /**
   * Specify an optional className to be added to your Tag
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /** Optional border position of the tag.
   * @default `center`
   * @optional
   */
  position?: TagPositions;

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

  /** Define a custom hexadecimal background color.
   * @required
   */
  customBackgroundColor?: string;

  /** Define a custom hexadecimal label color.
   * @required
   */
  customLabelColor?: string;

  /**
   * @required
   */
  children?: React.ReactNode;

  /**
   * Element to be rendered inside the Tag
   */
  IconComponent?: React.ReactElement
}
