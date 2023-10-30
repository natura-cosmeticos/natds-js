import React from 'react'
import Ripple from '../Ripple'
import { ListItemProps } from './ListItem.props'
import styles from './ListItem.styles'

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(({
  children,
  className = '',
  interaction = 'none',
  onClick,
  selected = false,
  SeparatorComponent,
  testID
}, ref): JSX.Element => {
  const { listItem } = styles({ selected, interaction })

  return (
    <Ripple disabled={interaction !== 'action'} fullWidth>
      <li
        className={`${className} ${listItem} ListItem-gaya`}
        onClick={onClick}
        data-testid={testID}
        ref={ref}
        tabIndex={0}
      >
        {children}
      </li>
      {SeparatorComponent}
    </Ripple>
  )
})

export default ListItem
