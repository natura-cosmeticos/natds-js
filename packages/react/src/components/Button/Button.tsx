import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.styles'

const Button = ({
  disabled = false,
  fullWidth = false,
  label,
  onClick,
  size = 'semiX',
  testID,
  variant = 'contained',
  ...props
}: ButtonProps): JSX.Element => {
  const classes = styles({
    size, fullWidth, variant, disabled
  })

  return (
    <button
      className={classes.button}
      data-testid={testID}
      disabled={disabled}
      onClick={onClick}
      type="button"
      {...props}
    >
      <div className={classes.overlay} />
      <span className={classes.label}>{label}</span>
    </button>
  )
}

export default Button
