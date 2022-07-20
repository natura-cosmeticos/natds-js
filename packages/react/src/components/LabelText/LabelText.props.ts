import React from 'react'

export interface LabelTextProps {
  /**
   * Specify an optional className to be added to your LabelText
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Apply error style
   */
  hasError?: boolean

  children: React.ReactNode
}
