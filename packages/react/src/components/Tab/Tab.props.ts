import React from 'react'

interface TabItem {
  component: React.ReactNode
  isActive?: boolean
  isDisabled?: boolean
}

export interface TabProps {
  /**
   * Specify an optional className to be added to your Tab
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Array of elements that will be render as TabItem
   */
  items: TabItem[]

  /**
   * Define icon position relative by text
   */
  iconPosition?: 'left' | 'top'

  /**
   * Define tabs aligns
   */
  itemsPosition?: 'left' | 'center' | 'right'

  /**
   * Define height of container
   */
  size?: 'normal' | 'large'
}
