import { DividerVariants } from 'components/Divider/Divider.props'

export interface ListItemProps {
  /**
   * The ListItem content
   */
  children: React.ReactNode

  /**
   * @default none
   */
  divider?: DividerVariants

  /**
   * An unique identifier. Will be pass to `key` attribute
   * Read more [here](https://reactjs.org/docs/lists-and-keys.html#keys)
   */
  id: string | number

  /**
   * Click handler
   */
  onClick?: () => void

  /**
   * If `true`, apply selected styling
   * @default false
   */
  selected?: boolean
}
