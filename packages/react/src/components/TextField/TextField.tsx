/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react'
import { IconButton } from '../IconButton'
import {
  TextFieldActionIcon, TextFieldActionImage, TextFieldFeedback, TextFieldProps
} from './TextField.props'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { styles, actionStyles } from './TextField.styles'

export const getIconName = (feedback: TextFieldFeedback) => (feedback === 'success' ? 'outlined-action-check' : 'outlined-action-cancel')
export const getIconColor = (feedback: TextFieldFeedback) => (feedback === 'success' ? 'success' : 'alert')

export const isIconAction = (props: TextFieldProps): props is TextFieldActionIcon => (props as TextFieldActionIcon).action === 'icon'

export const Action = (props: TextFieldActionIcon | TextFieldActionImage): JSX.Element => {
  const classes = actionStyles(props)

  return (
    <div className={classes.action}>
      {isIconAction(props)
        ? (<IconButton iconName={props.iconName} onClick={props.onClick} ariaLabel={props.ariaLabel} disabled={props.disabled || props.readOnly} />)
        : <img src={props.src} alt={props.alt} className={classes.actionImage} />}
    </div>
  )
}

const TextField = (props: TextFieldProps): JSX.Element => {
  const {
    disabled = false,
    feedback,
    helperText,
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
      <label className={classes.label}>
        {label}
        {required && '*'}
      </label>
      <div className={classes.inputContainer}>
        <Input
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
        />
        {rest.action && isIconAction(props) && (<Action {...props} />)}
      </div>
      <p className={classes.helperText}>
        {feedback && <Icon name={getIconName(feedback)} color={getIconColor(feedback)} size="small" />}
        {helperText}
      </p>
    </div>
  )
}

export default TextField
