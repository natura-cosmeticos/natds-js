import React from 'react'
import { icons } from '@naturacosmeticos/natds-icons'
import { IconProps } from './Icon.props'
import styles from './Icon.styles'

export const checkIcon = (iconName: string): string => (iconName in icons ? iconName : 'outlined-default-mockup')

const Icon = ({
  ariaHidden = true,
  ariaLabel,
  color = 'highlight',
  name,
  role = 'img',
  size = 'standard',
  testID = `icon-${name}`
}: IconProps): JSX.Element => {
  const { icon } = styles({ size, color })

  return (
    <i
      aria-hidden={ariaHidden}
      arial-label={ariaLabel}
      className={`${icon} natds-icons natds-icons-${checkIcon(name)}`}
      data-testid={testID}
      role={role}
    />
  )
}

export default Icon
