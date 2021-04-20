import { IconName } from '@naturacosmeticos/natds-icons'

export interface ButtonProps {
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
   * Check all available names in [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)
   * @default 'outlined-default-mockup'
   */
  iconName?: IconName

  /**
   * Set the position of icon
   * @default right
   */
  iconPosition?: 'left' | 'right'

  /**
   * Click handler
   */
  onClick: () => void;

  /**
   * If `true`, will show an icon on the left
   * @default false
   */
  showIcon?: boolean

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
   * @default 'button'
   */
  text: string;

  /**
   * The variant to use.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';

}
