import React from 'react'

interface TabItem {
  component: React.ReactNode,
  isActive?: boolean}

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
   * Define icon position
   */
  iconPosition?: 'left' | 'top'
}
