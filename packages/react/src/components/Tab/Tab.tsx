import React from 'react'

import styles from './Tab.styles'
import { TabProps } from './Tab.props'

const Tab = React.forwardRef<HTMLUListElement, TabProps>(
  (props, ref) => {
    const {
      iconPosition = 'left',
      itemsPosition = 'left',
      size = 'normal'
    } = props
    const { container } = styles({ iconPosition, itemsPosition, size })

    return (
      <ul className={container} ref={ref}>
        {props.children}
      </ul>
    )
  }
)

export default Tab
