/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react'
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
  focus = false,
  fullWidth = false,
  hideOverflow = true,
  isCentered = false,
  showHover = false
}: RippleProps): JSX.Element => {
  const [animation, setAnimation] = useState('')
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [rippleSize, setRippleSize] = useState<Size>({ width: 0, height: 0 })

  useEffect(() => {
    if (animation) {
      const timeout = setTimeout(() => setAnimation(''), animationDuration)
      return () => clearTimeout(timeout)
    }

    return () => null
  }, [animation, animationDuration])

  const showRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      setAnimation(rippleActive)
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
    size,
    showHover
  })

  const showFocus = focus ? 0 : -1

  return (
    <div className={wrapper} onClick={showRipple} data-testid="ripple-wrapper" tabIndex={showFocus}>
      <div className={rippleContainer}>
        <div className={`${ripple} ${animation}`} data-testid="ripple-animation" />
      </div>
      {children}
    </div>
  )
}

export default Ripple
