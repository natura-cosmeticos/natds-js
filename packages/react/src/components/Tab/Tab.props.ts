import React from 'react'

export interface TabProps {

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * All TabItems component
   */
  children: React.ReactNode

  /**
   * Define align icon relative by text
   */
  alignIcon?: 'left' | 'top'

  /**
   * Define align of tabs
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Define height of container
   */
  size?: 'normal' | 'large'

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
