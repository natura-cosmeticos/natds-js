import React from 'react'
import { ButtonProps } from './Button.props'
import styles from './Button.styles'

/**
 * `import { Button } from '@naturacosmeticos/natds-react'`
 */
const Button = ({
  label, size = 'semiX', onClick, testID, ...props
}: ButtonProps): JSX.Element => {
  const classes = styles({ size })

  return (
    <button className={classes.button} type="button" {...props} onClick={onClick} data-testid={testID}>
      <span className={classes.label}>{label}</span>
    </button>
  )
}

export default Button
