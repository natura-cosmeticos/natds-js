/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createUseStyles } from 'react-jss'
import type { Theme } from '@naturacosmeticos/natds-themes'
import type { DrawerProps, DrawerSize } from './Drawer.props'

const getSize = (size: DrawerSize) => {
  const width = {
    small: 256,
    medium: 375,
    large: 600
  }

  return width[size]
}

const styles = createUseStyles((theme: Theme) => ({
  overlayContainer: ({ open }: DrawerProps) => ({
    backgroundColor: theme.color.highlight,
    display: !open && 'none',
    height: '100%',
    left: 0,
    opacity: theme.opacity.mediumHigh,
    position: 'fixed',
    top: 0,
    width: '100%',
    overflow: 'hidden',
    zIndex: 1199
  }),

  drawer: ({ open = false, size = 'small', position = 'left' }: DrawerProps) => {
    const x = open ? getSize(size) : 0
    const y = open ? getSize(size) : getSize(size) + getSize(size)

    const pos = {
      left: {
        height: '100%',
        left: getSize(size) * -1,
        top: 0,
        transform: `translateX(${x}px)`,
        width: getSize(size)
      },
      right: {
        height: '100%',
        right: getSize(size),
        top: 0,
        transform: `translateX(${y}px)`,
        width: getSize(size)
      },
      top: {
        height: getSize(size),
        left: 0,
        top: getSize(size) * -1,
        transform: `translateY(${x}px)`,
        width: '100%'
      },
      bottom: {
        height: getSize(size),
        left: 0,
        bottom: getSize(size),
        transform: `translateY(${y}px)`,
        width: '100%'
      }
    }
    return {
      display: 'flex',
      flexFlow: 'column nowrap',
      backgroundColor: theme.color.surface,
      color: theme.color.highEmphasis,
      boxShadow: theme.elevation.small,

      ...pos[position],

      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'absolute',
      transition: '0.3s ease-in-out',
      zIndex: 1200
    }
  }
}))

export default styles
