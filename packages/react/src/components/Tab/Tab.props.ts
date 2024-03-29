import React from 'react'
import { BrandTypes } from '../../brandTypes/brandTypes'

export interface TabProps {

  /**
   * Optional ID for testing
   */
  testID?: string;
  /**
   * Optional ID for testing
   */
  brand?: BrandTypes;

  /**
   * All TabItems component
   */
  children: React.ReactNode

  /**
   * Define align of icon relative by text
   */
  icon?: 'left' | 'top'

  /**
   * Define align of tabs
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Define behavior of container when width is over
   */
   position?: 'fixed' | 'scrollable'

  /**
  * Toggle box shadow effects
  */
  elevation?: boolean

  /**
  * Toggle background color of container
  */
  color?: boolean
}
