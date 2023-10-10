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
  type = 'regular',
  href,
  ...props
}, ref) => {
  const { listItem, menuItem } = styles({
    ...props, children, disabled, type
  })

  return (
    <li
      data-testid={testID}
      className={`${className} ${listItem} MenuItem-gaya`}
      ref={ref}
      tabIndex={0}
      onClick={onClick}
      aria-disabled={disabled}
    >
      <Ripple disabled={disabled} fullWidth>
        <a href={href} {...props} className={menuItem}>
          {children}
        </a>
      </Ripple>
    </li>
  )
})

export default MenuItem
