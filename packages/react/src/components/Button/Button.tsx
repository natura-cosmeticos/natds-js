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
  variant = 'contained'
}: ButtonProps): JSX.Element => {
  const classes = styles({
    size, fullWidth, variant, disabled
  })

  return (
    <Ripple disabled={disabled} fullWidth={fullWidth}>
      <button
        className={classes.button}
        data-testid={testID}
        disabled={disabled}
        onClick={onClick}
        type="button"
      >
        <span className={classes.label}>{label}</span>
      </button>
    </Ripple>
  )
}

export default Button
