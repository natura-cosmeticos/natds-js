import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CounterProps } from './Counter.props'

const styles = createUseStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonGroup: {
    border: `1px solid ${theme.color.lowEmphasis}`,
    borderRadius: theme.borderRadius.medium,
    display: 'inline-block'
  },
  buttonSharedStyle: {
    backgroundColor: theme.color.surface,
    color: theme.color.highEmphasis,
    '&:disabled': {
      color: theme.color.mediumEmphasis
    }
  },
  buttonLeft: {
    borderBottomLeftRadius: theme.borderRadius.medium,
    borderTopLeftRadius: theme.borderRadius.medium,
    extend: 'buttonSharedStyle',
    width: ({ size }: CounterProps) => (size && size === 'semiX' ? theme.size.semi : theme.size.semiX)
  },
  buttonRight: {
    borderBottomRightRadius: theme.borderRadius.medium,
    borderTopRightRadius: theme.borderRadius.medium,
    extend: 'buttonSharedStyle',
    width: ({ size }: CounterProps) => (size && size === 'semiX' ? theme.size.semi : theme.size.semiX)
  },
  inputBase: {
    height: ({ size }: CounterProps) => size && theme.size[size],
    textAlign: 'center',
    width: ({ size }: CounterProps) => (size && size === 'semiX' ? theme.size[size] : theme.size.semiX)
  }
}))

export default styles
