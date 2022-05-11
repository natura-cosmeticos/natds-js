import React from 'react'

import Ripple from '../Ripple'

import styles from './TabItem.styles'
import { TabItemProps } from './TabItem.props'

const TabItem = React.forwardRef<HTMLLIElement, TabItemProps>(
  (props, ref) => {
    const {
      isActive = false,
      isDisabled = false,
      onClick
    } = props
    const { wrapper, tabButton } = styles({ isActive, isDisabled })

    return (
      <li className={wrapper} ref={ref}>
        <Ripple isCentered fullWidth>
          <button type="button" onClick={onClick} className={tabButton} disabled={isDisabled}>{props.children}</button>
        </Ripple>
      </li>
    )
  }
)

export default TabItem
