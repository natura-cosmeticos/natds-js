import React from 'react'
import Ripple from '../Ripple'
import Divider from '../Divider'
import { ListItemProps } from './ListItem.props'
import styles from './ListItem.styles'

const ListItem = ({
  children,
  divider = 'none',
  feedback = 'ripple',
  key,
  onClick,
  ref,
  selected = false,
  testID
}: ListItemProps): JSX.Element => {
  const { listItem } = styles({ selected })

  return (
    <Ripple disabled={feedback !== 'ripple'} fullWidth>
      <li className={listItem} key={key} onClick={onClick} data-testid={testID} ref={ref}>
        {children}
      </li>
      {divider !== 'none' && <Divider variant={divider} />}
    </Ripple>
  )
}

export default ListItem
