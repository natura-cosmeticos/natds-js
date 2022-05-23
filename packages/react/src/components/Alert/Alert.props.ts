import React from 'react'

export interface AlertProps {
  /**
   * Specify an optional className to be added to your Alert
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  variant?: 'info' | 'success' | 'error' | 'warning' | 'custom'

  title?: string;

  icon?: React.ReactNode

  children: React.ReactNode
}
