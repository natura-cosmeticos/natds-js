import React, { useState } from 'react'
import styles from './Ripple.styles'
import { RippleProps } from './Ripple.props'

const Ripple = ({
  children,
  color = 'highlight',
  disabled = false,
  fullWidth = false,
  hideOverflow = false
}: RippleProps): JSX.Element => {
  const [animation, setAnimation] = useState('')
  const [mousePosition, setMousePosition] = useState({})
  const [rippleSize, setRippleSize] = useState({})

  const getBiggestSide = (width: number, height: number) => (width > height ? width : height)

  const showRipple = (e) => {
    if (!disabled) {
      setAnimation(rippleActive)
      setTimeout(() => setAnimation(''), 300)
    }

    const rippleContainer = e.currentTarget
    const {
      width, height, x, y
    } = rippleContainer.getBoundingClientRect()
    const posX = e.clientX - x - (rippleContainer.offsetWidth / 2)
    const posY = e.clientY - y - (rippleContainer.offsetWidth / 2)

    setMousePosition({ x: posX, y: posY })
    setRippleSize({ width, height })
  }

  const size = getBiggestSide(rippleSize?.width, rippleSize?.height)

  const { wrapper, ripple, rippleActive } = styles({
    hideOverflow, size, color, disabled, fullWidth, mousePosition
  })

  return (
    <div className={wrapper} onClick={showRipple}>
      {children}
      <div className={`${ripple} ${animation}`} />
    </div>
  )
}

export default Ripple
