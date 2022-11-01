import { IconName } from '@naturacosmeticos/natds-icons'

export interface SnackbarProps {
  /**
   * Specify an optional className to be added to your Snackbar
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

    /**
   * Parameter to render a custom Icon using color as custom
  */
  customIcon?: IconName

  /**
  * Parameter to render a custom Icon using color as custom
  * @default true
  */
  showIcon?: boolean

    /**
   * Parameter to define the style that will be applied
   * @default info
  */
  backgroundColor?: 'info' | 'success' | 'error' | 'warning' | 'custom'

  /**
   * The title to be define as Heading
  */
  title?: string

  /**
   * The text to be define as Heading
  */
  text?: string

  positionShowIcon?: 'left' | 'right'

  buttonText?: string

  verticalButton?: boolean

  customTextColor?: string
   
}
