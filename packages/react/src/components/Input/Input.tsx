/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-lines-per-function */
import React from 'react'
import { InputActionIcon, InputActionImage, InputProps } from './Input.props'
import { IconButton } from '../IconButton'
import { actionStyles, styles } from './Input.styles'

export const isIconAction = (props: InputProps): props is InputActionIcon => (props as InputActionIcon).action === 'icon'
export const isImageAction = (props: InputProps): props is InputActionImage => (props as InputActionImage).action === 'image'

export const Action = (props: InputProps): JSX.Element => {
  const classes = actionStyles(props)

  return (
    <div className={classes.action}>
      {
        isIconAction(props)
        && (
        <IconButton
          iconName={props.iconName}
          onClick={props.onClick}
          ariaLabel={props.ariaLabel}
          disabled={props.disabled || props.readOnly}
        />
        )
      }
      {
        isImageAction(props)
        && <img src={props.src} alt={props.alt} className={classes.actionImage} />
      }
    </div>
  )
}

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
    size, isResizable, disabled, readOnly, feedback
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
      {rest.action && (<Action {...props} />)}
    </div>
  )
}

export default Input
