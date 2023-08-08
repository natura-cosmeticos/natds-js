import React from 'react'
import styles from './Drawer.styles'
import { DrawerProps } from './Drawer.props'

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(({
  className = '',
  testID,
  ...props
}, ref) => {
  const { overlayContainer, drawer } = styles(props)

  return (
    <>
      <div
        className={`${className} ${drawer}`}
        data-testid={testID}
        ref={ref}
        {...props}
      />
      <div className={overlayContainer} onClick={() => props.handleClick?.()} />
    </>
  )
})

export default Drawer
