/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createUseStyles } from 'react-jss'
import type { Theme } from '@naturacosmeticos/natds-themes'
import type { DrawerProps } from './Drawer.props'

const styles = createUseStyles((theme: Theme) => ({
  overlayContainer: (props: DrawerProps) => ({
    zIndex: 1100,
    position: 'absolute',
    width: props.open ? '100%' : 0,
    height: props.open ? '100%' : 0,
    backgroundColor: `${theme.color.highlight}80`
  }),

  drawer: (props: DrawerProps) => {
    const x = props.open ? props.width! : 0

    return {
      zIndex: 1200,
      position: 'absolute',
      top: 0,
      transition: '0.3s ease-in-out',
      WebkitTransition: '0.3s ease-in-out',
      width: props.width!,
      left: props.width! * -1,
      WebkitTransform: `translateX(${x}px)`,
      transform: `translateX(${x}px)`,
      boxShadow: theme.elevation.small,
      backgroundColor: theme.color.surface,
      height: '100%'
    }
  }
}))

export default styles
