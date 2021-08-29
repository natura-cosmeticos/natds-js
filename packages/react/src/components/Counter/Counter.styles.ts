/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CounterProps } from './Counter.props'

const styles = createUseStyles((theme: Theme) => ({
  buttonGroup: {
    border: `1px solid ${theme.color.lowEmphasis}`,
    borderRadius: theme.borderRadius.medium,
    marginTop: theme.spacing.micro,
    width: 'fit-content',
    '& button': {
      width: ({ size }: CounterProps) => (size && size === 'semiX' ? theme.size.semi : theme.size.semiX)
    }
  },
  inputBase: {
    backgroundColor: 'transparent',
    borderBottom: 'none',
    borderLeft: `1px solid ${theme.color.lowEmphasis}`,
    borderRight: `1px solid ${theme.color.lowEmphasis}`,
    borderTop: 'none',
    color: theme.color.highlight,
    cursor: 'default',
    height: ({ size }: CounterProps) => size && theme.size[size],
    outline: 'none',
    textAlign: 'center',
    width: theme.size.semiX
  }
}))

export default styles
