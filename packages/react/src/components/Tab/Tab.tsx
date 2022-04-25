import React from 'react'

import TabItem from '../TabItem'

import styles from './Tab.styles'
import { TabProps } from './Tab.props'

const Tab = React.forwardRef<HTMLUListElement, TabProps>(
  (props, ref) => {
    const {
      iconPosition = 'left',
      items
    } = props
    const { container } = styles({ iconPosition })

    return (
      <ul className={container} ref={ref}>
        {items.map((item) => <TabItem isActive={item.isActive}>{item.component}</TabItem>)}
      </ul>
    )
  }
)

export default Tab
