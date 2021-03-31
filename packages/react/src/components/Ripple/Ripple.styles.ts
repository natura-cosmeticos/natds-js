import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { RippleProps } from './Ripple.props'

type RippleStyleProps = Required<Pick<RippleProps, 'size' | 'color' | 'hideOverflow' | 'disabled' | 'fullWidth'>>

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    overflow: ({ hideOverflow }: RippleStyleProps) => (!hideOverflow && 'hidden'),
    position: 'relative',
    display: ({ fullWidth }: RippleStyleProps) => (fullWidth ? 'block' : 'inline-block'),
    cursor: ({ disabled }: RippleStyleProps) => (disabled ? 'default' : 'pointer')
  },
  ripple: {
    backgroundColor: ({ color }: RippleStyleProps) => theme.color[color],
    borderRadius: '50%',
    height: ({ size }: RippleStyleProps) => size,
    left: '50%',
    opacity: theme.opacity.transparent,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'scale opacity 0.3s',
    width: ({ size }: RippleStyleProps) => size
  },
  rippleActive: {
    animation: '$ripple 0.5s',
    zIndex: 999
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(0)'
    },
    '75%': {
      opacity: theme.opacity.low,
      transform: 'translate(-50%, -50%) scale(1)'
    },
    '100%': {
      opacity: theme.opacity.transparent,
      transform: 'translate(-50%, -50%) scale(1)'
    }
  }
}))

export default styles
