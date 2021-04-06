import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { RippleProps } from './Ripple.props'

type RippleStyleProps = Required<Pick<RippleProps, 'color' | 'hideOverflow' | 'disabled' | 'fullWidth'>>

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    cursor: 'pointer',
    display: ({ fullWidth }: RippleStyleProps) => (fullWidth ? 'block' : 'inline-block'),
    position: 'relative',
    alignSelf: 'start'
  },
  ripple: {
    backgroundColor: ({ color }: RippleStyleProps) => theme.color[color],
    borderRadius: '50%',
    height: ({ size }) => size,
    left: ({ mousePosition, isCentered }) => (isCentered ? '50%' : mousePosition.x),
    opacity: theme.opacity.transparent,
    position: 'absolute',
    top: ({ mousePosition, isCentered }) => (isCentered ? '50%' : mousePosition.y),
    transform: 'translate(-50%, -50%)',
    transition: ({ ANIMATION_DURATION }) => `scale opacity ${ANIMATION_DURATION}ms`,
    width: ({ size }) => size
  },
  rippleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: ({ hideOverflow }: RippleStyleProps) => (hideOverflow && 'hidden')
  },
  rippleActive: {
    animation: ({ ANIMATION_DURATION }) => `$ripple ${ANIMATION_DURATION}ms`,
    zIndex: 999
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(0)'
    },
    '75%': {
      transform: 'translate(-50%, -50%) scale(1)',
      opacity: theme.opacity.low
    },
    '100%': {
      opacity: theme.opacity.transparent
    }
  }
}))

export default styles
