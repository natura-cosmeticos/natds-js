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
    zIndex: 1199
  }),

  drawer: ({ open = false, size = 'small' }: DrawerProps) => {
    const x = open ? getSize(size) : 0

    return {
      backgroundColor: theme.color.surface,
      color: theme.color.highEmphasis,
      boxShadow: theme.elevation.small,
      display: 'flex',
      flexFlow: 'column nowrap',
      height: '100%',
      justifyContent: 'space-between',
      left: getSize(size) * -1,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      transform: `translateX(${x}px)`,
      transition: '0.3s ease-in-out',
      width: getSize(size),
      zIndex: 1200
    }
  }
}))

export default styles
