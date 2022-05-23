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

  color?: 'info' | 'success' | 'error' | 'warning' | 'custom'

  type?: 'contained' | 'outlined'

  title?: string;

  icon?: React.ReactNode

  children: React.ReactNode
}
