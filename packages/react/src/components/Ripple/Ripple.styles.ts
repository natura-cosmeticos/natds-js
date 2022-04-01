/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { RippleProps } from './Ripple.props'

type RippleStyleProps = Required<Pick<RippleProps, 'color' | 'hideOverflow' | 'disabled' | 'fullWidth' | 'showHover' | 'animationDuration'>> &
{ size: number, mousePosition: { x: number, y: number }, isCentered: boolean }

const styles = createUseStyles((theme: Theme) => ({
  sharedRippleEffect: {
    content: '" "',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1
  },
  wrapper: {
    flexBasis: ({ fullWidth }: RippleStyleProps) => fullWidth && '100%',
    cursor: ({ disabled }: RippleStyleProps) => (disabled ? 'default' : 'pointer'),
    display: ({ fullWidth }: RippleStyleProps) => (fullWidth ? 'block' : 'inline-block'),
    position: 'relative',
    alignSelf: ({ fullWidth }: RippleStyleProps) => (fullWidth ? 'stretch' : 'start'),
    outline: 'none',
    height: 'fit-content',
    '&:focus:after': {
      extend: 'sharedRippleEffect',
      backgroundColor: ({ color, disabled }: RippleStyleProps) => !disabled && theme.color[color],
      opacity: theme.opacity.mediumLow
    },
    '&:hover:after': {
      extend: 'sharedRippleEffect',
      backgroundColor: ({ color }: RippleStyleProps) => theme.color[color],
      opacity: ({ showHover, disabled }: RippleStyleProps) => (!disabled && showHover ? theme.opacity.mediumLow : 0)
    }
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
    transition: ({ animationDuration }) => `scale opacity ${animationDuration}ms`,
    width: ({ size }) => size
  },
  rippleContainer: {
    inset: 0,
    overflow: ({ hideOverflow }: RippleStyleProps) => (hideOverflow && 'hidden'),
    position: 'absolute'
  },
  rippleActive: {
    animation: ({ animationDuration }) => `$ripple ${animationDuration}ms`,
    zIndex: 99
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
      opacity: theme.opacity.transparent,
      zIndex: 0
    }
  }
}))

export default styles
