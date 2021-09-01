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
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  buttonRigth: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  inputBase: {
    backgroundColor: 'transparent',
    borderBottom: 'none',
    borderLeft: `1px solid ${theme.color.lowEmphasis}`,
    borderRight: `1px solid ${theme.color.lowEmphasis}`,
    borderTop: 'none',
    color: theme.color.highlight,
    cursor: 'default',
    outline: 'none',
    textAlign: 'center',
    width: theme.size.semiX,
    height: '100%',
    padding: 0
  }
}))

export default styles
