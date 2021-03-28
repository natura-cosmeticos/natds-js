import React from 'react'
import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json'
import { IconProps } from './Icon.props'
import styles from './Icon.styles'

const Icon = ({
  ariaHidden = true,
  color = 'highlight',
  name = 'outlined-default-mockup',
  size = 'standard',
  testID,
  ...props
}: IconProps): JSX.Element => {
  const unicodeName = iconNames[name].replace('%', '\\')
  const code = JSON.parse(`["${unicodeName}"]`)[0]
  const classes = styles({ size, color })

  return (
    <i
      className={classes.icon}
      data-testid={testID}
      aria-hidden={ariaHidden}
      {...props}
    >
      {code}
    </i>
  )
}

export default Icon
