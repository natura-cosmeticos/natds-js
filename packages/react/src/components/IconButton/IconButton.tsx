import React from 'react'
import IconButtonBase from './IconButtonBase'
import { IconButtonProps } from './IconButton.props'
import styles from './IconButton.styles'

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  ariaLabel,
  backgroundStyle = 'none',
  className = '',
  disabled = false,
  IconComponent,
  onClick,
  size = 'semi',
  testID
}, ref) => {
  const { iconButtonContainer } = styles({ disabled, backgroundStyle, size })

  return (
    <IconButtonBase
      ariaLabel={ariaLabel}
      className={`${className} ${iconButtonContainer}`}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      size={size}
      testID={testID}
      IconComponent={IconComponent}
    />
  )
})

export default IconButton
