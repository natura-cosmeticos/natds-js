import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.styles'

const Button = ({
  disabled = false,
  label,
  onClick,
  size = 'semiX',
  testID,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = styles({ size })

  return (
    <button className={classes.button} type="button" {...props} onClick={onClick} data-testid={testID} disabled={disabled}>
      <span className={classes.label}>{label}</span>
    </button>
  )
}

export default Button
