/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CounterProps } from './Counter.props'

type CounterStyleProps = Required<Pick<CounterProps, 'size'>>

const styles = createUseStyles((theme: Theme) => ({
  buttonGroup: {
    display: 'flex',
    // border: `1px solid ${theme.color.lowEmphasis}`,
    borderRadius: theme.counter.borderRadius,
    marginTop: theme.spacing.micro,
    width: 'fit-content',
    height: ({ size }: CounterStyleProps) => theme.size[size],
    '& button': {
      width: ({ size }: CounterStyleProps) => (size === 'semiX' ? theme.size.semi : theme.size.semiX)
    }
  },
  buttonLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.size.semi,
    height: ({ size }: CounterStyleProps) => theme.size[size],
    border: `1px solid ${theme.color.lowEmphasis}`,
    borderRight: 'none',
    '&:disabled': {
      borderRight: 'none'
    },
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
    // '&:focus:not([disabled])': {
    //   color: theme.color.surface,
    //   backgroundColor: theme.color.highEmphasis
    // }

  },
  buttonRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.size.semi,
    height: ({ size }: CounterStyleProps) => theme.size[size],
    border: `1px solid ${theme.color.lowEmphasis}`,
    borderLeft: 'none',
    '&:disabled': {
      borderLeft: 'none'
    },
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  },
  inputBase: {
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: theme.typography.fontSize.level3,
    backgroundColor: 'transparent',
    // borderBottom: 'none',
    border: `1px solid ${theme.color.lowEmphasis}`,
    // borderLeft: `1px solid ${theme.color.lowEmphasis}`,
    // borderRight: `1px solid ${theme.color.lowEmphasis}`,
    // borderTop: 'none',
    // height: ({ size }: CounterStyleProps) => theme.size[size],
    color: theme.color.highlight,
    cursor: 'default',
    '&:focus:not([disabled])': {
      border: `1px solid ${theme.color.primary}`
    },
    boxSizing: 'border-box',
    // height: '100%',
    outline: 'none',
    padding: theme.spacing.tiny,
    textAlign: 'center',
    width: theme.size.large
  },
  labelText: {
    color: theme.color.mediumEmphasis,
    fontFamily: [theme.counter.label.primary.fontFamily, theme.counter.label.fallback.fontFamily],
    fontSize: theme.counter.label.fontSize,
    fontWeight: theme.counter.label.primary.fontWeight,
    letterSpacing: theme.counter.label.letterSpacing,
    lineHeight: theme.counter.label.lineHeight
  }
}))

export default styles
