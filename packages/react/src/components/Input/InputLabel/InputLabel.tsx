import React from 'react'
import { InputLabelProps } from './InputLabel.props'
import styles from './InputLabel.styles'

const InputLabel = ({
  id,
  label,
  required,
  feedback,
  disabled
}: InputLabelProps): JSX.Element => {
  const classes = styles({ feedback, disabled, label })

  return (
    <label htmlFor={id} className={classes.label}>
      {label}
      {required && label && '*'}
    </label>
  )
}

export default InputLabel
