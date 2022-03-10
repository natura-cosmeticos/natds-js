import React from 'react'
import { AppBarItemProps } from './AppBarItem.props'
import styles from './AppBarItem.styles'

const AppBarItem = React.forwardRef<HTMLDivElement, AppBarItemProps>((props, ref) => {
  const { className = '', testID, ...rest } = props
  const { appBarItem } = styles()

  return <div {...rest} className={`${className} ${appBarItem}`} data-testid={testID} ref={ref} />
})

export default AppBarItem
