import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { RippleProps } from './Ripple.props'

type RippleStyleProps = Required<Pick<RippleProps, 'color' | 'hideOverflow' | 'disabled' | 'fullWidth'>>

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    cursor: 'pointer',
    display: ({ fullWidth }: RippleStyleProps) => (fullWidth ? 'block' : 'inline-block'),
    overflow: ({ hideOverflow }: RippleStyleProps) => (!hideOverflow && 'hidden'),
    position: 'relative'
  },
  ripple: {
    backgroundColor: ({ color }: RippleStyleProps) => theme.color[color],
    borderRadius: '50%',
    height: ({ size }) => size,
    left: ({ mousePosition }) => mousePosition.x,
    opacity: theme.opacity.transparent,
    position: 'absolute',
    top: ({ mousePosition }) => mousePosition.y,
    transform: 'translate(-50%, -50%)',
    transition: 'scale opacity 300ms',
    width: ({ size }) => size
  },
  rippleActive: {
    animation: '$ripple 0.5s',
    zIndex: 999
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0)'
    },
    '75%': {
      opacity: theme.opacity.low,
      transform: 'scale(1)'
    },
    '100%': {
      opacity: theme.opacity.transparent,
      transform: 'scale(1)'
    }
  }
}))

export default styles
