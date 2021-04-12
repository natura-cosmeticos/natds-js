import React from 'react'
import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json'
import { IconProps } from './Icon.props'
import styles from './Icon.styles'

const Icon = ({
  ariaHidden = true,
  ariaLabel,
  color = 'highlight',
  name = 'outlined-default-mockup',
  role = 'img',
  size = 'standard',
  testID = `icon-${name}`
}: IconProps): JSX.Element => {
  const unicodeName = iconNames[name].replace('%', '\\')
  const icon = JSON.parse(`["${unicodeName}"]`)[0]
  const classes = styles({ size, color })

  return (
    <i
      aria-hidden={ariaHidden}
      arial-label={ariaLabel}
      className={classes.icon}
      data-testid={testID}
      role={role}
    >
      {icon}
    </i>
  )
}

export default Icon
