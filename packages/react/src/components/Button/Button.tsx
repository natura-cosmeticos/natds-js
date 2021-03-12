import React from 'react'
import { ButtonProps } from './Button.props'

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}) => (
  <button
    type="button"
    {...props}
  >
    {label}
  </button>
)

export default Button
