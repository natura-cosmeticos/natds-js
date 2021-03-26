import React from 'react'
import { DividerProps } from './Divider.props'
import styles from './Divider.styles'

const Divider = ({ testID, variant = 'full-bleed', ...props }: DividerProps): JSX.Element => {
  const classes = styles({ variant })

  return (
    <hr className={classes.divider} {...props} data-testid={testID} />
  )
}

export default Divider
