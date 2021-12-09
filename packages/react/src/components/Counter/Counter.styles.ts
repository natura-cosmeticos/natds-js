/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CounterProps } from './Counter.props'

type CounterStyleProps = Required<Pick<CounterProps, 'size'>>

const styles = createUseStyles((theme: Theme) => ({
  buttonGroup: {
    display: 'flex',
    border: `1px solid ${theme.color.lowEmphasis}`,
    borderRadius: theme.counter.borderRadius,
    marginTop: theme.spacing.micro,
    width: 'fit-content',
    height: ({ size }: CounterStyleProps) => theme.size[size],
    '& button': {
      width: ({ size }: CounterStyleProps) => (size === 'semiX' ? theme.size.semi : theme.size.semiX)
    }
  },
  buttonLeft: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
  },
  buttonRight: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  },
  inputBase: {
    backgroundColor: 'transparent',
    borderBottom: 'none',
    borderLeft: `1px solid ${theme.color.lowEmphasis}`,
    borderRight: `1px solid ${theme.color.lowEmphasis}`,
    borderTop: 'none',
    color: theme.color.highlight,
    cursor: 'default',
    height: '100%',
    outline: 'none',
    padding: 0,
    textAlign: 'center',
    width: theme.size.semiX
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
