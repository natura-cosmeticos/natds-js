import React from 'react'
import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json'
import { IconProps } from './Icon.props'
import styles from './Icon.styles'

const Icon = ({
  ariaHidden = true,
  color = 'highlight',
  name = 'outlined-default-mockup',
  size = 'standard',
  testID = `icon-${name}`
}: IconProps): JSX.Element => {
  const unicodeName = iconNames[name].replace('%', '\\')
  const icon = JSON.parse(`["${unicodeName}"]`)[0]
  const classes = styles({ size, color })

  return (
    <i className={classes.icon} data-testid={testID} aria-hidden={ariaHidden}>
      {icon}
    </i>
  )
}

export default Icon
