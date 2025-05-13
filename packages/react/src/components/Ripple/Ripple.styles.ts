/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { RippleProps } from './Ripple.props'
import { buildTheme } from '../../ThemeProvider'

type RippleStyleProps = Pick<RippleProps, 'focus'|'radius'| 'color' | 'hideOverflow' | 'disabled' | 'fullWidth' | 'showHover' | 'animationDuration' | 'brand'> &
{ size: number, mousePosition: { x: number, y: number }, isCentered: boolean }

const getColorThemeRipple = (theme: Theme) => ({ brand, color }: Pick<RippleStyleProps, 'brand' | 'color'>) => {
  if (brand) {
    const themeSelectdRipple = buildTheme(brand, 'light')
    return color && themeSelectdRipple.color[color]
  }
  return color && theme.color[color]
}
const getPropsThemeRipple = (theme: Theme) => ({ brand }: Pick<RippleStyleProps, 'brand' >) => {
  if (brand) {
    const themeSelectdRipple = buildTheme(brand, 'light')
    return {
      buttonborderRadius: themeSelectdRipple.button.borderRadius
    }
  }
  return {
    buttonborderRadius: theme.button.borderRadius
  }
}

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
      backgroundColor: ({
        color, disabled, brand, focus
      }: RippleStyleProps) => !disabled && focus && color && getColorThemeRipple(theme)({ brand, color }),
      opacity: theme.opacity.mediumLow,
      borderRadius: ({ radius }: RippleStyleProps) => (radius || 'none')
    },
    '&:hover:after': {
      extend: 'sharedRippleEffect',
      backgroundColor: ({ brand, color }: RippleStyleProps) => color && getColorThemeRipple(theme)({ brand, color }),
      opacity: ({ showHover, disabled }: RippleStyleProps) => (!disabled && showHover ? theme.opacity.mediumLow : 0),
      borderRadius: ({ radius }: RippleStyleProps) => (radius || 'none')
    }
  },
  ripple: {
    backgroundColor: ({ color, brand }: RippleStyleProps) => getColorThemeRipple(theme)({ brand, color }),
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
    position: 'absolute',
    borderRadius: ({ brand }: RippleStyleProps) => getPropsThemeRipple(theme)({ brand }).buttonborderRadius
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
