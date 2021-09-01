import { IconName } from '@naturacosmeticos/natds-icons'
import { Size } from '@naturacosmeticos/natds-themes'

export type IconPosition = 'left' | 'right'
export type ButtonSize = keyof Pick<Size, 'semi' | 'semiX' | 'medium'>
export type ButtonVariant = 'contained' | 'outlined' | 'text'

export interface ButtonBaseProps {

  /**
   * Button description
   */
  ariaLabel?: string

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: string;

  /**
   * If `true`, the button will occupy 100% of the width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Click handler
   */
  onClick: () => void;

  /**
  * The size of the button
  * @default semiX
  */
  size?: ButtonSize;

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * The text content of the button
   * @default button
   */
  text: string;

  /**
   * The variant to use.
   * @default contained
   */
  variant?: ButtonVariant;

}

export type ButtonWithIcon = ButtonBaseProps & {
  /**
   * If `true`, will show an icon on the right
   * @default false
   */
  showIcon: true

  /**
   * Set the icon position
   */
  iconPosition?: IconPosition

  /**
   * Set the icon to be rendered.
   * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
   * @default outlined-default-mockup
   */
  iconName: IconName
}

export type ButtonProps = ButtonBaseProps
  & { showIcon?: never, iconPosition?: never }
  | ButtonWithIcon
