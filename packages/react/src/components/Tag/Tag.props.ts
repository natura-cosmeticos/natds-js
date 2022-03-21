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

  /**
   * Optional border position of the tag.
   * @default center
   * @optional
   */
  position?: TagPositions;

  /**
   * Optional size of the tag.
   * @default small
   * @optional
   */
  size?: TagSizes;

  /**
   * Optional color of the tag.
   * @default primary
   * @optional
   */
  color?: TagColors;

  /**
   * Define a custom hexadecimal background color.
   * Should be a hexadecimal color like e.g. #000000
   * @required
   */
  customBackgroundColor?: string;

  /**
   * Define a custom hexadecimal label color.
   * Should be a hexadecimal color like e.g. #FFFFFF
   * @required
   */
  customLabelColor?: string;

  /**
   * Children to be rendered inside the Tag.
   * Should be pass a string like e.g. Lorem Ipsum
   * @required
   */
  children?: React.ReactNode;

  /**
   * Element to be rendered inside the Tag.
   * Should be pass a component like Icon from this lib or a SVG
   */
  IconComponent?: React.ReactElement
}
