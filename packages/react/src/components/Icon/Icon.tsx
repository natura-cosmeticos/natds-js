import React from 'react'
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
  const { icon } = styles({ size, color })

  return (
    <i
      aria-hidden={ariaHidden}
      arial-label={ariaLabel}
      className={`${icon} natds-icons natds-icons-${String(name)}`}
      data-testid={testID}
      role={role}
    />
  )
}

export default Icon
