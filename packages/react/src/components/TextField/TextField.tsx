/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react'
import { IconButton } from '../IconButton'
import { TextFieldFeedback, TextFieldProps } from './TextField.props'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { styles, actionStyles } from './TextField.styles'

export const getIconName = (feedback: TextFieldFeedback) => (feedback === 'success' ? 'outlined-action-check' : 'outlined-action-cancel')
export const getIconColor = (feedback: TextFieldFeedback) => (feedback === 'success' ? 'success' : 'alert')

export const Action = ({
  action,
  iconName,
  onClick,
  ariaLabel,
  readOnly,
  disabled,
  src,
  alt
}) => {
  const classes = actionStyles({ action })

  return (
    <div className={classes.action}>
      {action === 'icon'
        ? (<IconButton iconName={iconName} onClick={onClick} ariaLabel={ariaLabel} disabled={disabled || readOnly} />)
        : <img src={src} alt={alt} className={classes.actionImage} />}
    </div>
  )
}

const TextField = ({
  action = 'none',
  disabled = false,
  feedback,
  helperText,
  label,
  onChange,
  placeholder,
  readOnly = false,
  required = false,
  size = 'mediumX',
  testID,
  type = 'text',
  value,
  iconName,
  onClick,
  ariaLabel,
  src,
  alt
}: TextFieldProps): JSX.Element => {
  const classes = styles({
    disabled, feedback, readOnly, size
  })

  return (
    <div data-testid={testID}>
      <label className={classes.label}>
        {label}
        {required && '*'}
      </label>
      <div className={classes.inputContainer}>
        <Input
          size={size}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          type={type}
        />
        {action !== 'none'
          && (
          <Action
            action={action}
            iconName={iconName}
            onClick={onClick}
            ariaLabel={ariaLabel}
            src={src}
            alt={alt}
            disabled={disabled}
            readOnly={readOnly}
          />
          )}
      </div>
      <p className={classes.helperText}>
        {feedback && <Icon name={getIconName(feedback)} color={getIconColor(feedback)} size="small" />}
        {helperText}
      </p>
    </div>
  )
}

export default TextField
