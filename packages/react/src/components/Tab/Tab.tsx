import React, { createRef, useState, useEffect } from 'react'

import Icon from '../Icon'
import styles from './Tab.styles'
import { TabProps } from './Tab.props'

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (props, ref) => {
    const {
      icon = 'left',
      align = 'left',
      position = 'fixed',
      elevation = true,
      color = true,
      ariaLabelButtonRight,
      ariaLabelButtonLeft,
      ...rest
    } = props

    const {
      wrapper,
      container,
      navigation,
      navigationPrev,
      navigationNext
    } = styles({
      icon, align, position, elevation, color
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
      <div className={`${wrapper} Tab-gaya`} ref={ref} {...rest}>
        {showNavigation && (
        <button type="button" className={`${navigation} ${navigationPrev}`} onClick={handlePrev} data-testid="btn-prev" {...ariaLabelButtonLeft}>
          <Icon name="filled-navigation-arrowleft" />
        </button>
        )}

        <ul className={container} ref={listRef}>
          {props.children}
        </ul>

        {showNavigation && (
        <button type="button" className={`${navigation} ${navigationNext}`} onClick={handleNext} data-testid="btn-next" {...ariaLabelButtonRight}>
          <Icon name="filled-navigation-arrowright" />
        </button>
        )}
      </div>
    )
  }
)

export default Tab
