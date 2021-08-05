import React from 'react'
import Ripple from '../Ripple'
import { ListItemProps } from './ListItem.props'
import styles from './ListItem.styles'

const ListItem = ({
  children,
  feedback = 'ripple',
  key,
  onClick,
  ref,
  selected = false,
  SeparatorComponent,
  testID
}: ListItemProps): JSX.Element => {
  const { listItem } = styles({ selected })

  return (
    <Ripple disabled={feedback !== 'ripple'} fullWidth>
      <li className={listItem} key={key} onClick={onClick} data-testid={testID} ref={ref}>
        {children}
      </li>
      {SeparatorComponent}
    </Ripple>
  )
}

export default ListItem
