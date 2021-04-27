import React from 'react'
import { TextFieldFeedback, TextFieldProps } from './TextField.props'
import { Icon } from '../Icon'
import styles from './TextField.styles'

export const getIconName = (feedback: TextFieldFeedback) => (feedback === 'success' ? 'outlined-action-check' : 'outlined-action-cancel')
export const getIconColor = (feedback: TextFieldFeedback) => (feedback === 'success' ? 'success' : 'alert')

const TextField = ({
  action = 'none',
  disabled = false,
  feedback,
  helperText,
  label,
  placeholder,
  readOnly = false,
  required = false,
  size = 'mediumX',
  testID,
  type = 'text'
}: TextFieldProps): JSX.Element => {
  const classes = styles({ disabled, feedback, size })

  return (
    <div className={classes.container}>
      <label className={classes.label}>
        {label}
        {required && '*'}
      </label>
      <input
        data-testid={testID}
        className={classes.input}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        type={type}
      />
      <p className={classes.helperText}>
        {feedback && <Icon name={getIconName(feedback)} color={getIconColor(feedback)} size="small" />}
        {helperText}
      </p>
    </div>
  )
}

export default TextField
