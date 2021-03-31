import React, { useState } from 'react'
import styles from './Ripple.styles'
import { RippleProps } from './Ripple.props'

const Ripple = ({
  children,
  color = 'highlight',
  disabled = false,
  fullWidth = false,
  hideOverflow = false,
  size
}: RippleProps): JSX.Element => {
  const { wrapper, ripple, rippleActive } = styles({
    hideOverflow, size, color, disabled, fullWidth
  })

  const [animation, setAnimation] = useState('')

  const createRipple = () => {
    if (!disabled) {
      setAnimation(rippleActive)
      setTimeout(() => setAnimation(''), 500)
    }
  }

  return (
    <div className={wrapper} onClick={createRipple}>
      {children}
      <div className={`${ripple} ${animation}`} />
    </div>
  )
}

export default Ripple
