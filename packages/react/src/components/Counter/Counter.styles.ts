/* eslint-disable max-lines-per-function */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { CounterProps } from './Counter.props'

const styles = createUseStyles((theme: Theme) => ({
  buttonGroup: {
    display: 'flex',
    border: `1px solid ${theme.color.lowEmphasis}`,
    borderRadius: theme.borderRadius.medium,
    marginTop: theme.spacing.micro,
    width: 'fit-content',
    height: ({ size }: CounterProps) => size && theme.size[size],
    '& button': {
      width: ({ size }: CounterProps) => (size && size === 'semiX' ? theme.size.semi : theme.size.semiX)
    }
  },
  buttonLeft: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
  },
  buttonRigth: {
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
  }
}))

export default styles
