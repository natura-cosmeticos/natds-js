import React from 'react'
import styles from './MenuItem.styles'
import { MenuItemProps } from './MenuItem.props'

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(({
  className = '',
  testID,
  onClick,
  children,
  href,
  ...props
}, ref) => {
  const { menuItem } = styles(props)

  return (
    <li
      data-testid={testID}
      className={`${className} ${menuItem}`}
      ref={ref}
      tabIndex={0}
      onClick={onClick}
    >
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
})

export default MenuItem
