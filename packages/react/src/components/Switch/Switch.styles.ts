/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { SwitchProps } from './Switch.props'

type SwitchStyleProps = Required<Pick<SwitchProps, 'checked' | 'disabled'>>

const transitionProps = '150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'

const styles = createUseStyles((theme: Theme) => ({
  switchContainer: {
    width: 56,
    height: 40,
    position: 'relative',
    display: 'flex'
  },
  switchBase: {
    display: 'flex',
    alignItems: 'center',
    cursor: ({ disabled }: SwitchStyleProps) => (disabled ? 'default' : 'pointer'),
    pointerEvents: ({ disabled }: SwitchStyleProps) => (disabled ? 'none' : 'unset'),
    width: '100%',
    height: '100%',
    '&:hover $switchOverlay': {
      opacity: theme.opacity.veryLow,
      backgroundColor: ({ checked }: SwitchStyleProps) => (checked ? theme.color.primary : theme.color.highlight)
    }
  },
  switchInput: {
    position: 'absolute',
    opacity: 0,
    '&:focus + $switchBase $switchOverlay': {
      opacity: theme.opacity.low,
      backgroundColor: ({ checked }: SwitchStyleProps) => (checked ? theme.color.primary : theme.color.highlight)
    }
  },
  switchTrack: {
    transition: `background-color ${transitionProps}`,
    left: 10,
    position: 'absolute',
    width: 36,
    height: 14,
    borderRadius: 20,
    backgroundColor: ({ checked, disabled }: SwitchStyleProps) => (disabled
      ? theme.color.lowEmphasis
      : checked
        ? theme.color.primary
        : theme.color.mediumEmphasis),
    opacity: ({ checked, disabled }: SwitchStyleProps) => (disabled || !checked ? 1 : theme.opacity.medium)
  },
  switchOverlay: {
    left: ({ checked }: SwitchStyleProps) => (checked ? 16 : 0),
    transition: `left ${transitionProps}`,
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: '50%'
  },
  switchThumb: {
    left: ({ checked }: SwitchStyleProps) => (checked ? 26 : 10),
    transition: `left ${transitionProps}`,
    position: 'absolute',
    width: 20,
    height: 20,
    boxShadow: '0px 1px 3px #00000036',
    borderRadius: '50%',
    backgroundColor: ({ checked, disabled }: SwitchStyleProps) => (disabled || !checked ? theme.color.surface : theme.color.primary)
  }
}))

export default styles
