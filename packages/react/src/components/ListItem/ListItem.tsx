import React from 'react'
import Ripple from '../Ripple'
import Divider from '../Divider'
import { ListItemProps } from './ListItem.props'
import styles from './ListItem.styles'

const ListItem = ({
  children,
  divider,
  id,
  onClick,
  selected = false
}: ListItemProps): JSX.Element => {
  const { listItem } = styles({ selected })

  return (
    <Ripple disabled={!!selected} fullWidth>
      <li className={listItem} key={id} onClick={onClick}>
        {children}
      </li>
      {divider && <Divider variant={divider} />}
    </Ripple>
  )
}

export default ListItem
