import React from 'react'

export interface TabItemProps {
  /**
   * Specify an optional className to be added to your TabItem
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Specify the content of your TabItem
   */
  children: React.ReactNode

  /**
   * Specify the content of your TabItem
   */
   isActive?: boolean
}
