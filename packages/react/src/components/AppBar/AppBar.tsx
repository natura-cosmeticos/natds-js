import React from 'react'
import styles from './AppBar.styles'
import type { AppBarProps } from './AppBar.props'

const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>((props, ref) => {
  const {
    className = '', color = 'default', elevation = true, testID, ...rest
  } = props
  const { appBar } = styles({ elevation, color })

  return <div {...rest} className={`${className} ${appBar}`} data-testid={testID} ref={ref} />
})

export default AppBar
