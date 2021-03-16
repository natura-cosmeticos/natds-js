import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.styles'

/**
 * `import { Button } from '@naturacosmeticos/natds-react'`
 */
const Button = ({ label = 'button', size = 'medium', ...props }: ButtonProps): JSX.Element => {
  const classes = styles({ size })

  return (
    <button className={classes.button} type="button" {...props}>
      <span className={classes.label}>{label}</span>
    </button>
  )
}

export default Button
