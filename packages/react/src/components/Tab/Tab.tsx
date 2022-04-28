import React, { createRef, useState, useEffect } from 'react'

import Icon from '../Icon'
import styles from './Tab.styles'
import { TabProps } from './Tab.props'

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (props, ref) => {
    const {
      iconPosition = 'left',
      align = 'left',
      size = 'normal',
      position = 'fixed',
      elevation = true,
      color = true
    } = props

    const {
      wrapper,
      container,
      navigation,
      navigationPrev,
      navigationNext
    } = styles({
      iconPosition, align, size, position, elevation, color
    })

    const listRef = createRef<HTMLUListElement>()
    const [itemWitdth, setItemWidth] = useState(0)
    const [showNavigation] = useState(() => position === 'scrollable')

    useEffect(() => {
      if (!listRef.current) return

      const { current } = listRef
      const item = current.firstChild as HTMLElement

      setItemWidth(item.offsetWidth)
    }, [listRef])

    const handleNext = () => {
      if (!listRef.current) return

      listRef.current.scrollLeft += itemWitdth
    }

    const handlePrev = () => {
      if (!listRef.current) return

      listRef.current.scrollLeft -= itemWitdth
    }

    return (
      <div className={wrapper} ref={ref}>
        {showNavigation && (
        <button type="button" className={`${navigation} ${navigationPrev}`} onClick={handlePrev}>
          <Icon name="filled-navigation-arrowleft" />
        </button>
        )}

        <ul className={container} ref={listRef}>
          {props.children}
        </ul>

        {showNavigation && (
        <button type="button" className={`${navigation} ${navigationNext}`} onClick={handleNext}>
          <Icon name="filled-navigation-arrowright" />
        </button>
        )}
      </div>
    )
  }
)

export default Tab
