import React, { useState } from 'react'
import styles from './Ripple.styles'
import { RippleProps } from './Ripple.props'

type Size = { width: number, height: number }
type MousePosition = { x: number, y: number }

export const getBiggestSide = ({ width, height }: Size): number => (width > height ? width : height)

const Ripple = ({
  animationDuration = 300,
  children,
  color = 'highlight',
  disabled = false,
  fullWidth = false,
  hideOverflow = true,
  isCentered = false
}: RippleProps): JSX.Element => {
  const [animation, setAnimation] = useState('')
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [rippleSize, setRippleSize] = useState<Size>({ width: 0, height: 0 })

  const showRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      setAnimation(rippleActive)
      setTimeout(() => setAnimation(''), animationDuration)
    }

    const {
      width, height, x, y
    } = e.currentTarget.getBoundingClientRect()

    const posX = e.pageX - x
    const posY = e.pageY - y

    setMousePosition({ x: posX, y: posY })
    setRippleSize({ width, height })
  }

  const size = getBiggestSide(rippleSize)

  const {
    ripple, rippleActive, rippleContainer, wrapper
  } = styles({
    animationDuration,
    color,
    disabled,
    fullWidth,
    hideOverflow,
    isCentered,
    mousePosition,
    size
  })

  return (
    <div className={wrapper} onClick={showRipple} data-testid="ripple-wrapper">
      <div className={rippleContainer}>
        <div className={`${ripple} ${animation}`} data-testid="ripple-animation" />
      </div>
      {children}
    </div>
  )
}

export default Ripple
