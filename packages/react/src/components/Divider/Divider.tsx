import React from 'react'
import { DividerProps } from './Divider.props'
import styles from './Divider.styles'

const Divider = ({ testID, variant = 'full-bleed' }: DividerProps): JSX.Element => {
  const classes = styles({ variant })

  return (
    <hr className={classes.divider} data-testid={testID} />
  )
}

export default Divider
