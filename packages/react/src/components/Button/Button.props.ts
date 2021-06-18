import { IconName } from '@naturacosmeticos/natds-icons'

interface ButtonBaseProps {
  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

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
  size?: 'semi' | 'semiX' | 'medium';

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
  variant?: 'contained' | 'outlined' | 'text';

}

type ButtonWithIcon = ButtonBaseProps & {
  /**
   * If `true`, will show an icon on the right
   * @default false
   */
  showIcon: true

  /**
   * Set the icon position
   */
  iconPosition: 'left' | 'right'

  /**
   * Set the icon to be rendered.
   * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
   * @default outlined-default-mockup
   */
  iconName: IconName
}

export type ButtonProps = ButtonBaseProps & { showIcon?: never } | ButtonWithIcon
