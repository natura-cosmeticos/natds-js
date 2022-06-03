import { IconName } from '@naturacosmeticos/natds-icons'
import React from 'react'

export interface AlertProps {
  /**
   * Specify an optional className to be added to your Alert
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string

  /**
   * Parameter to define the style that will be applied
   * @default info
  */
  color?: 'info' | 'success' | 'error' | 'warning' | 'custom'

  /**
   * Parameter to define border styles
   * @default info
  */
  type?: 'contained' | 'outlined'

  /**
   * The text to be define as Heading
  */
  title?: string

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
   * The body text of component to render on the left side
  */
  children: React.ReactNode

  /**
   * Parameter to set custom background color
   * Should be a hexadecimal color like e.g. #000000
  */
  customBackgroundColor?: string

  /**
   * Parameter to set custom font color
   * Should be a hexadecimal color like e.g. #000000
  */
  customTextColor?: string

  /**
   * Parameter to set custom icon color
   * Should be a hexadecimal color like e.g. #000000
  */
  customIconColor?: string

  /**
   * Parameter to set custom border color
   * Should be a hexadecimal color like e.g. #000000
  */
  customBorderColor?: string
}
