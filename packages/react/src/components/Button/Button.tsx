import React from 'react'
import { ButtonProps } from './Button.props'
import { Ripple } from '../Ripple'
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
    <Ripple disabled={disabled} fullWidth={fullWidth} data-testid="ripple-button">
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
    </Ripple>
  )
}

export default Button
