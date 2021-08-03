/* eslint-disable max-lines-per-function */
import React from 'react'
import { InputProps } from './Input.props'
import styles from './Input.styles'
import InputAction from './InputAction'

const Input = (props: InputProps): JSX.Element => {
  const {
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
    feedback,
    value,
    ...rest
  } = props

  const classes = styles({
    isResizable, size, feedback, ...props
  })
  const isMultiline = type === 'multiline'

  return (
    <div className={classes.wrapper}>
      {
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
      }
      {rest.action && (<InputAction {...props} />)}
    </div>
  )
}

export default Input
