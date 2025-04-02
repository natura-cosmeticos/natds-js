import { IconName } from '@naturacosmeticos/natds-icons'
import { Size, Color } from '@naturacosmeticos/natds-themes'
import { BrandTypes } from '../../brandTypes/brandTypes'

export type IconPosition = 'left' | 'right'
export type ButtonSize = keyof Pick<Size, 'semi' | 'semiX' | 'medium'>
export type ButtonVariant = 'contained' | 'outlined' | 'text'
export type ButtonType = 'button' | 'reset' | 'submit'
export type ButtonColor = keyof Pick<Color, 'primary'| 'onPrimary' | 'secondary'| 'onSecondary' | 'surfaceInverse' | 'onSurfaceInverse'>
export type mode = 'light' | 'dark'
export type ButtonAccessibilityProps = {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-disabled'?: boolean;
  'aria-pressed'?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  role?: string;
  tabIndex?: number;
};
export interface ButtonBaseProps {

  accessibility?: ButtonAccessibilityProps;
  /**
   * Specifies a description to your button.
   * Use it in cases where a text label is not visible on the screen.
   */
  ariaLabel?: string
  /**
   * Specifies an optional mode to be added to your theme
   */
  mode?: mode
  /**
   * Specifies an optional brand to be added to your Button
   */
  brand?: BrandTypes
   /**
   * Specifies an optional color to be added to your Button
   */
   color?: ButtonColor
  /**
   * Specifies an optional textTransform to be added to your Button
   */
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
  /**
   * Specifies whether the Button should be disabled, or not
   * @default false
   */
  disabled?: boolean;

  /**
   * Specifies the content of your Button
   */
  children: React.ReactNode

  /**
   * Specifies an optional className to be added to your Button
   */
  className?: string

  /**
   * If `true`, the button will occupy 100% of the width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Provides a function to be called when the button element is clicked
   */
  onClick: () => void;

  /**
  * Specifies the size of the button, from a list of available sizes.
  * If no size is specified, the 'semiX' size will be applied as default.
  * @default semiX
  */
  size?: ButtonSize;

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Optional prop to specifies the type of the Button
   * @default 'button'
   */
  type?: ButtonType;

  /**
   * Specifies the variant of Button you want to create.
   * If no variant is specified, a 'contained' button will be rendered.
   * @default contained
   */
  variant?: ButtonVariant;

}

export type ButtonWithIcon = ButtonBaseProps & {
  /**
   * If `true`, will display an icon on the right of text label
   * @default false
   */
  showIcon: true

  /**
   * Specifies the icon position
   * @default 'right'
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
