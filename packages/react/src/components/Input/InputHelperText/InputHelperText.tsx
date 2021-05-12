import React from 'react'
import styles from './InputHelperText.styles'
import { Icon } from '../../Icon'
import { InputHelperTextProps } from './InputHelperText.props'
import { Feedback } from '../Input.props'

export const getIconName = (feedback: Feedback) => (feedback === 'success' ? 'outlined-action-check' : 'outlined-action-cancel')
export const getIconColor = (feedback: Feedback) => (feedback === 'success' ? 'success' : 'alert')

const InputHelperText = ({
  disabled,
  feedback,
  helperText
}: InputHelperTextProps): JSX.Element => {
  const classes = styles({ feedback, disabled })

  return (
    <p className={classes.helperText}>
      {feedback && <Icon name={getIconName(feedback)} color={getIconColor(feedback)} size="small" />}
      {helperText}
    </p>
  )
}

export default InputHelperText
