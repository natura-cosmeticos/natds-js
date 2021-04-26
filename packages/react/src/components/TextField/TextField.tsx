import React from 'react'
import { TextFieldProps } from './TextField.props'
import styles from './TextField.styles'

const TextField = ({
  action = 'none',
  disabled = false,
  feedback = 'none',
  helperText,
  placeholder,
  readOnly = false,
  required = false,
  size = 'mediumX',
  testID,
  type = 'text'
}: TextFieldProps): JSX.Element => {
  const classes = styles({ disabled, size })

  return (
    <input
      data-testid={testID}
      className={classes.input}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      type={type}
    />
  )
}

export default TextField
