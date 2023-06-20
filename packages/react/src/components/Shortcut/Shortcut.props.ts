import { BrandTypes } from '../../brandTypes/brandTypes'

export interface ShortcutProps {
  /**
   * Specify an optional className to be added to your Shortcut
   */
  className?: string
  /**
   * Specify an optional className to be added to your Shortcut
   */
  brand?: BrandTypes

  /**
   * Allowing you to change the way an HTML element is "translated" into the accessibility tree
   */
  ariaLabel?: string,

  /**
   * If `true`, the element will be disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * The click handler
   */
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The id attribute specifies a unique id for an HTML element
   */
  id: HTMLButtonElement['id'];

  /**
   * Specify the variant of Shortcut you want to create.
   * If no variant is specified, a 'contained' shortcut will be rendered.
   * @default contained
   */
  variant?: 'contained' | 'outlined'

  /**
   * Specify a color of element.
   * If no color is specified, a 'primary' color will be rendered.
   * @default primary
   */
  color?: 'primary' | 'neutral'

  /**
   * Element to be rendered inside the Shortcut
   */
  IconComponent: React.ReactElement

  /**
   * The label to be displayed below the Shortcut
   */
  label?: string

  /**
   * Element to be rendered top of the Shortcut
   */
  BadgeComponent?: React.ReactElement

  /**
   * If true, the text will wrap on two or more lines within the component boundary.
   * If false, the exceeded text will be replaced by an ellipsis
   */
  breakLine?: boolean
}
