import React from 'react'

import TabItem from '../TabItem'

import styles from './Tab.styles'
import { TabProps } from './Tab.props'

const Tab = React.forwardRef<HTMLUListElement, TabProps>(
  (props, ref) => {
    const {
      iconPosition = 'left',
      itemsPosition = 'left',
      size = 'normal',
      items
    } = props
    const { container } = styles({ iconPosition, itemsPosition, size })

    return (
      <ul className={container} ref={ref}>
        {items.map((item) => (
          <TabItem isActive={item.isActive} isDisabled={item.isDisabled}>
            {item.component}
          </TabItem>
        ))}
      </ul>
    )
  }
)

export default Tab
