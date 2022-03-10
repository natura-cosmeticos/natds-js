import React from 'react'
import styles from './AppBar.styles'
import type { AppBarProps } from './AppBar.props'

const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(({
  className = '',
  color = 'default',
  elevation = true,
  testID,
  children
},
ref) => {
  const { appBar } = styles({ elevation, color })

  return (
    <div className={`${className} ${appBar}`} data-testid={testID} ref={ref}>
      {children}
    </div>
  )
})

export default AppBar
