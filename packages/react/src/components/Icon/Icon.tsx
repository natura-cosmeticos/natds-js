import React from 'react'
import { icons } from '@naturacosmeticos/natds-icons'
import { IconProps } from './Icon.props'
import styles from './Icon.styles'

export const checkIcon = (iconName: string): string => (iconName in icons ? iconName : 'outlined-default-mockup')

const Icon = React.forwardRef<HTMLElement, IconProps>(({
  ariaHidden = true,
  ariaLabel,
  className = '',
  color = 'highlight',
  name,
  role = 'img',
  size = 'standard',
  testID = `icon-${name}`,
  ...props
}, ref) => {
  const { icon } = styles({ size, color })
  const defaultIconName = `natds-icons-${checkIcon('outlined-default-mockup')}`
  const iconName = name ? `natds-icons-${checkIcon(name)}` : defaultIconName

  return (
    <i
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      className={`${className} ${icon} natds-icons ${iconName}`}
      data-testid={testID}
      ref={ref}
      role={role}
      {...props}
    />
  )
})

export default Icon
