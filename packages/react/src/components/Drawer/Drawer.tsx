import React from 'react'
import styles from './Drawer.styles'
import { DrawerProps } from './Drawer.props'

const Drawer: React.FC<DrawerProps> = ({
  open,
  className = '',
  width = 280,
  testID,
  elevation = true,
  overlay = true,
  ...props
}) => {
  const { overlayContainer, drawer } = styles({
    open,
    width,
    elevation,
    overlay
  })

  return (
    <>
      <div className={overlayContainer} />
      <div
        {...props}
        className={`${className} ${drawer}`}
        data-testid={testID}
      />
    </>
  )
}

export default Drawer
