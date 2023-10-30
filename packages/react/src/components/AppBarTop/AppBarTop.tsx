import React, { useLayoutEffect, useState } from 'react'
import styles from './AppBarTop.styles'
import type { AppBarProps } from './AppBarTop.props'

const AppBarTop = React.forwardRef<HTMLElement, AppBarProps>(
  (
    {
      className = '',
      color = 'default',
      behaviour = 'fixed',
      elevation = true,
      testID,
      children,
      role,
      ...props
    },
    ref
  ) => {
    const [position, setPosition] = useState({
      hide: false,
      y: global.scrollY
    })

    useLayoutEffect(() => {
      const onScroll = () => {
        const currentY = global.scrollY

        if (currentY < position.y) {
          setPosition({ y: currentY, hide: false })
        } else if (currentY > position.y) {
          setPosition({ y: currentY, hide: true })
        }
      }

      document.addEventListener('scroll', onScroll)

      return () => {
        document.removeEventListener('scroll', onScroll)
      }
    }, [position.y])

    const { container, appBar } = styles({
      elevation,
      color,
      behaviour,
      hide: position.hide
    })

    return (
      <header ref={ref} className={`${className} ${container} AppBarTop-gaya`} {...props} role={role} data-testid={testID}>
        <div className={appBar}>
          {children}
        </div>
      </header>
    )
  }
)

export default AppBarTop
