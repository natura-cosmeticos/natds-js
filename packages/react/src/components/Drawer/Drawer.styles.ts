/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createUseStyles } from 'react-jss'
import type { Theme } from '@naturacosmeticos/natds-themes'
import type { DrawerProps } from './Drawer.props'

const getSize = ({ size }: DrawerProps) => {
  const width = {
    small: 256,
    medium: 375,
    large: 600
  }

  return size ? width[size] : width.small
}

const styles = createUseStyles((theme: Theme) => ({
  overlayContainer: (props: DrawerProps) => ({
    zIndex: 1100,
    position: 'absolute',
    width: props.open ? '100%' : 0,
    height: props.open ? '100%' : 0,
    backgroundColor: `${theme.color.highlight}80`
  }),

  drawer: (props: DrawerProps) => {
    const x = props.open ? getSize(props) : 0

    return {
      zIndex: 1200,
      position: 'absolute',
      top: 0,
      transition: '0.3s ease-in-out',
      WebkitTransition: '0.3s ease-in-out',
      width: getSize(props),
      left: getSize(props) * -1,
      WebkitTransform: `translateX(${x}px)`,
      transform: `translateX(${x}px)`,
      boxShadow: theme.elevation.small,
      backgroundColor: theme.color.surface,
      height: '100%'
    }
  }
}))

export default styles
