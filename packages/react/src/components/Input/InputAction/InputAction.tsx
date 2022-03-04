/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { InputActionIcon, InputActionImage, InputProps } from '../Input.props'
import { IconButton } from '../../IconButton'
import styles from './InputAction.styles'

export const isIconAction = (props: InputProps): props is InputActionIcon => (props as InputActionIcon).action === 'icon'
export const isImageAction = (props: InputProps): props is InputActionImage => (props as InputActionImage).action === 'image'

const InputAction = (props: InputProps): JSX.Element => {
  const classes = styles(props)

  return (
    <div className={classes.container}>
      {
        isIconAction(props)
        && (
          <IconButton
            IconComponent={props.IconComponent}
            onClick={props.onClick}
            ariaLabel={props.ariaLabel}
            disabled={props.disabled || props.readOnly}
            testID="ds-input-action-icon"
          />
        )
      }
      {
        isImageAction(props)
        && (
          <div className={classes.wrapper}>
            <img
              src={props.src}
              alt={props.alt}
              className={classes.image}
              data-testid="ds-input-action-image"
            />
          </div>
        )
      }
    </div>
  )
}

export default InputAction
