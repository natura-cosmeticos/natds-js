import React from 'react'
import { InputProps } from './Input.props'
import styles from './Input.styles'

const Input = ({
  disabled = false,
  id,
  isResizable = false,
  minRows = 3,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly = false,
  size = 'mediumX',
  type = 'text',
  value
}: InputProps): JSX.Element => {
  const classes = styles({ size, isResizable })
  const isMultiline = type === 'multiline'

  return (
    isMultiline
      ? (
        <textarea
          className={classes.textArea}
          data-testid="ds-input-multiline"
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          rows={minRows}
          id={id}
        />
      )
      : (
        <input
          className={classes.input}
          data-testid="ds-input"
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          value={value}
          id={id}
        />
      )
  )
}

export default Input
