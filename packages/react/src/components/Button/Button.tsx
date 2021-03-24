import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.styles'

const Button = ({
  disabled = false,
  display = 'inline',
  label,
  onClick,
  size = 'semiX',
  testID,
  variant = 'contained',
  ...props
}: ButtonProps): JSX.Element => {
  const classes = styles({ size, display, variant })

  return (
    <button
      className={classes.button}
      data-testid={testID}
      disabled={disabled}
      onClick={onClick}
      type="button"
      {...props}
    >
      <span className={classes.label}>{label}</span>
    </button>
  )
}

export default Button
