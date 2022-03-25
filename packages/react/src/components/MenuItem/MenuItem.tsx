import React from 'react'
import styles from './MenuItem.styles'
import { MenuItemProps } from './MenuItem.props'
import Ripple from '../Ripple'

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(({
  className = '',
  testID,
  onClick,
  children,
  disabled = false,
  href,
  ...props
}, ref) => {
  const { menuItem } = styles({ ...props, children, disabled })

  return (
    <Ripple disabled={disabled} fullWidth>
      <li
        data-testid={testID}
        className={`${className} ${menuItem}`}
        ref={ref}
        tabIndex={0}
        onClick={onClick}
        aria-disabled={disabled}
      >
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    </Ripple>
  )
})

export default MenuItem
