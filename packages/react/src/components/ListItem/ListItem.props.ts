import React from 'react'

export type ListItemInteraction = 'none' | 'action' | 'selectable'

export interface ListItemProps {
  /**
   * The ListItem content
   */
  children: React.ReactNode

  /**
   * Override or extend the styles applied to the component
   */
  className?: string

  /**
   * The type of interaction with each element
   * Read more about (here)[https://ds.natura.design/28db352be/p/99a1c2-list-item/t/06665a]
   * @default none
   */
  interaction?: ListItemInteraction

  /**
   * A unique identifier for the list item. Will be pass to `key` attribute
   * Read more [here](https://reactjs.org/docs/lists-and-keys.html#keys)
   */
  key: string | number

  /**
   * Click handler
   */
  onClick?: () => void

  /**
  * If `true`, apply the selected style if
  * the `interaction` attribute is of the `selectable` type
  * @default false
  */
  selected?: boolean

  /**
   * If you pass the `Divider` component here, it will
   * be rendered at the bottom of each `ListItem`
   */
  SeparatorComponent?: React.ReactElement

  /**
   * Optional ID for testing
   */
  testID?: string
}
