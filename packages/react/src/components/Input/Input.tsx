import React from 'react'
import { InputProps } from './Input.props'
import styles from './Input.styles'

const Input = ({
  disabled = false,
  onChange,
  placeholder,
  readOnly = false,
  size = 'mediumX',
  type = 'text',
  value
}: InputProps): JSX.Element => {
  const classes = styles({ size })

  return (
    <input
      className={classes.input}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
      value={value}
    />
  )
}

export default Input
