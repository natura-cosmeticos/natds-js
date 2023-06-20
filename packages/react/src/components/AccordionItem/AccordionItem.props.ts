import React from 'react'
import { BrandTypes } from '../../brandTypes/brandTypes'

export interface AccordionItemProps {

  brand?: BrandTypes
  /**
   * Specify an optional className to be added to your AccordionItem
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Set text header of AccordionItem
   */
  title: string

  /**
   * Optional text usign as "subtitle"
   */
  legend?: string

  /**
   * Parameter to define the style that will be applied
   * @default info
  */
  color?: 'regular' | 'primary'

  /**
   * Define state of item (open/close)
   * @default false
  */
  isActive?: boolean

  /**
   * If "true" disable event click and change color style
   * @default false
  */
  isDisabled?: boolean

  /**
   * Function to toggle state between open and close
  */
  onClick: () => void

  /**
   * Content will be render when AccordionItem is open
  */
  children: React.ReactNode
}
