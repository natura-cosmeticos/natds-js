import { IconName } from '@naturacosmeticos/natds-icons'

export interface ChipProps {
  /**
   * Specify an optional className to be added to your Chip
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string

  /**
   * Text that will be displayed on the Chip
   */
  labelText: string

  /**
   * Icon name that will be render on the left side
   */
  leftIcon?: IconName

  /**
   * Icon name that will be render on the right side
   */
  rightIcon?: IconName

  /**
   * Colors available
   */
  color?: 'neutral' | 'primary' | 'secondary' | 'custom'

  /**
   * The source URL of the image you want to display
   */
   avatar?: string

  /**
   * If `true` click are disable and change style of the component
   */
  disabled?: boolean

  /**
   * If `true` change style of the component
   */
  selected?: boolean

  /**
   * Parameter to set custom background color
   * Should be a hexadecimal color like e.g. #000000
  */
  customBackground?: string

  /**
   * Parameter to set custom border color
   * Should be a hexadecimal color like e.g. #000000
  */
  customBorderColor?: string

  /**
   * Parameter to define height of component
  */
  size?: 'semi' | 'semiX' | 'medium'
}
