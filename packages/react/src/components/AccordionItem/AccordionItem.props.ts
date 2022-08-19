import React from 'react'

export interface AccordionItemProps {
  /**
   * Specify an optional className to be added to your AccordionItem
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

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

   isDisabled?: boolean

   onClick: () => void

   children: React.ReactNode
}
