import React from 'react'
import Ripple from '../Ripple'
import { ListItemProps } from './ListItem.props'
import styles from './ListItem.styles'

const ListItem = ({
  children,
  interaction = 'none',
  key,
  onClick,
  ref,
  selected = false,
  SeparatorComponent,
  testID
}: ListItemProps): JSX.Element => {
  const { listItem } = styles({ selected, interaction })

  return (
    <Ripple disabled={interaction !== 'action'} fullWidth>
      <li
        className={listItem}
        key={key}
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
}

export default ListItem
