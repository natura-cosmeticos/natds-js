export interface ShortcutProps {
  /**
   * Specify an optional className to be added to your Shortcut
   */
  className?: string

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
  onClick: () => void

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The id attribute specifies a unique id for an HTML element
   */
  id?: HTMLButtonElement['id'];

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
   * The label to be displayed in the Shotcut
   */
  label?: string

  /**
   * Element to be rendered top of the Shortcut
   */
  BadgeComponent?: React.ReactElement

  /**
   * Determine the limit of the badge
   */
  breakLine?: boolean
}
