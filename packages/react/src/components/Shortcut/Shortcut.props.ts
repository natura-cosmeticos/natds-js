export interface ShortcutProps {
  /**
   * Specify an optional className to be added to your Shortcut
   */
  className?: string

  /**
   * Use to define a text that explains the expected action
   */
  ariaLabel?: string,

  /**
   * Use to define a text that explains the expected action
   */
  ariaLabelledBy?: string,

  /**
   * If `true`, the icon button will be disabled.
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
   * Optional ID for testing
   */
  id?: HTMLButtonElement['id'];

  /**
   * Optional ID for testing
   * @default contained
   */
  variant?: 'contained' | 'outlined'

  /**
   * Optional ID for testing
   * @default primary
   */
  color?: 'primary' | 'neutral'

  /**
   * Optional ID for testing
   */
  IconComponent: React.ReactElement

  /**
   * Optional ID for testing
   */
  label?: string
}
