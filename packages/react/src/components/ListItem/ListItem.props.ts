import React from 'react'

export type ListItemFeedback = 'ripple' | 'selection'

export interface ListItemProps {
  /**
   * The ListItem content
   */
  children: React.ReactNode

  /**
   * If you set `selection`, the `ripple` effect will be disabled
   * @default ripple
   */
  feedback?: ListItemFeedback

  /**
   * An unique identifier. Will be pass to `key` attribute
   * Read more [here](https://reactjs.org/docs/lists-and-keys.html#keys)
   */
  key: string | number

  /**
   * Click handler
   */
  onClick?: () => void

  /**
   * Refs provide a way to access ListItem element
   */
  ref?: React.Ref<never>

  /**
  * If `true`, apply selected styling
  * @default false
  */
  selected?: boolean

  /**
   * If you pass the `Divider` component here, it will
   * appear at the bottom of each `ListItem`
   */
  SeparatorComponent?: React.ReactElement

  /**
   * Optional ID for testing
   */
  testID?: string
}
