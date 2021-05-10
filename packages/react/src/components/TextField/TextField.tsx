/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react'
import { Feedback } from 'components/Input/Input.props'
import { TextFieldProps } from './TextField.props'
import { Icon } from '../Icon'
import { Input } from '../Input'
import styles from './TextField.styles'

export const getIconName = (feedback: Feedback) => (feedback === 'success' ? 'outlined-action-check' : 'outlined-action-cancel')
export const getIconColor = (feedback: Feedback) => (feedback === 'success' ? 'success' : 'alert')

const TextField = (props: TextFieldProps): JSX.Element => {
  const {
    disabled = false,
    feedback,
    helperText,
    id,
    isResizable = false,
    label,
    minRows = 3,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    readOnly = false,
    required = false,
    size = 'mediumX',
    testID,
    type = 'text',
    value,
    ...rest
  } = props

  const classes = styles({
    disabled, feedback, readOnly, size
  })

  return (
    <div data-testid={testID}>
      <label className={classes.label} htmlFor={id}>
        {label}
        {required && '*'}
      </label>
      <Input
        id={id}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        size={size}
        type={type}
        value={value}
        minRows={minRows}
        isResizable={isResizable}
        feedback={feedback}
        {...rest}
      />
      <p className={classes.helperText}>
        {feedback && <Icon name={getIconName(feedback)} color={getIconColor(feedback)} size="small" />}
        {helperText}
      </p>
    </div>
  )
}

export default TextField
